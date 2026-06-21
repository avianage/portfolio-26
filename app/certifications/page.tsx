'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { CERTIFICATIONS } from '@/lib/data';
import { useState, useMemo, useEffect } from 'react';
import Certifications from '@/components/Certifications';

const PLATFORM_ORDER = ['Udemy', 'Coursera', 'NPTEL', 'Kaggle', 'Spoken Tutorial', 'NVIDIA', 'Others'];

export default function CertificationsPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const grouped = useMemo(() => {
        const q = searchQuery.toLowerCase().trim();
        const map: Record<string, typeof CERTIFICATIONS> = {};
        for (const cert of CERTIFICATIONS) {
            const p = cert.platform ?? 'Others';
            if (q && !cert.title.toLowerCase().includes(q) && !cert.issuer.toLowerCase().includes(q)) continue;
            if (!map[p]) map[p] = [];
            map[p].push(cert);
        }
        return map;
    }, [searchQuery]);

    const platforms = PLATFORM_ORDER.filter(p => grouped[p]?.length);
    const [selected, setSelected] = useState<string>(platforms[0] ?? '');

    // If selected platform disappears due to search, pick the first visible one
    useEffect(() => {
        if (!grouped[selected] && platforms.length > 0) {
            setSelected(platforms[0]);
        }
    }, [grouped, platforms, selected]);

    return (
        <main className="min-h-screen bg-[#121212] text-white pt-28 p-6 md:p-12 lg:p-24 overflow-x-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <Link
                        href="/"
                        className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group"
                    >
                        <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Certifications</h1>
                    <p className="text-gray-400 max-w-xl text-lg">
                        Verified credentials reflecting my continuous growth in advanced engineering domains.
                    </p>
                </div>

                {/* Search */}
                <div className="relative mb-8">
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search certifications..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>

                {platforms.length === 0 ? (
                    <div className="py-24 text-center">
                        <p className="text-gray-500">No certifications match your search.</p>
                        <button onClick={() => setSearchQuery('')} className="mt-4 text-blue-400 hover:underline">
                            Clear search
                        </button>
                    </div>
                ) : (
                    <>
                        {/* Platform selector grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
                            {platforms.map(platform => {
                                const isActive = selected === platform;
                                const count = grouped[platform].length;
                                return (
                                    <button
                                        key={platform}
                                        onClick={() => setSelected(platform)}
                                        className={`relative flex flex-col items-start gap-1 px-5 py-4 rounded-xl border text-left transition-all ${
                                            isActive
                                                ? 'bg-blue-600/20 border-blue-500/60 text-white'
                                                : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20'
                                        }`}
                                    >
                                        <span className="font-semibold text-sm">{platform}</span>
                                        <span className={`text-xs font-mono ${isActive ? 'text-blue-300' : 'text-gray-600'}`}>
                                            {count} {count === 1 ? 'cert' : 'certs'}
                                        </span>
                                        {isActive && (
                                            <motion.div
                                                layoutId="active-indicator"
                                                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-blue-500 rounded-full"
                                            />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Cert cards for selected platform */}
                        <AnimatePresence initial={false}>
                            <motion.div
                                key={selected}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.15 }}
                            >
                                <Certifications items={grouped[selected] ?? []} />
                            </motion.div>
                        </AnimatePresence>
                    </>
                )}
            </div>
        </main>
    );
}
