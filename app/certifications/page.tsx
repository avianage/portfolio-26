'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CERTIFICATIONS } from '@/lib/data';
import { useState, useMemo } from 'react';
import Image from 'next/image';
import Certifications from '@/components/Certifications';

export default function CertificationsPage() {
    const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

    // Get all unique domains
    const allDomains = useMemo(() => {
        const domains = new Set<string>();
        CERTIFICATIONS.forEach(cert => domains.add(cert.domain));
        return Array.from(domains).sort();
    }, []);

    // Filter and sort certifications
    const filteredCertifications = useMemo(() => {
        let certs = [...CERTIFICATIONS];
        if (selectedDomain) {
            certs = certs.filter(c => c.domain === selectedDomain);
        }
        return certs.sort((a, b) => a.title.localeCompare(b.title));
    }, [selectedDomain]);

    return (
        <main className="min-h-screen bg-[#121212] text-white pt-28 p-6 md:p-12 lg:p-24 overflow-x-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div>
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
                            Verified credentials reflecting my continuous growth in
                            advanced engineering domains.
                        </p>
                    </div>

                    {/* Filter Tags */}
                    <div className="flex flex-wrap gap-2 md:justify-end max-w-xl">
                        <button
                            onClick={() => setSelectedDomain(null)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedDomain === null
                                ? 'bg-blue-600/20 text-blue-200 border-blue-500/50'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border-transparent'
                                } border`}
                        >
                            All
                        </button>
                        {allDomains.map(domain => (
                            <button
                                key={domain}
                                onClick={() => setSelectedDomain(selectedDomain === domain ? null : domain)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedDomain === domain
                                    ? 'bg-blue-600/20 text-blue-200 border-blue-500/50'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border-transparent'
                                    } border`}
                            >
                                {domain}
                            </button>
                        ))}
                    </div>
                </div>

                <Certifications items={filteredCertifications} />
            </div>
        </main>
    );
}

