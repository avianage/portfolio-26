'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { CERTIFICATIONS } from '@/lib/data';
import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Certifications from '@/components/Certifications';

export default function CertificationsPage() {
    const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
    const [sortBy, setSortBy] = useState<'alpha' | 'date'>('date');
    const [currentPage, setCurrentPage] = useState(1);

    // Items per page logic
    const [itemsPerPage, setItemsPerPage] = useState(9);
    
    useEffect(() => {
        const updateItemsPerPage = () => {
            setItemsPerPage(window.innerWidth < 768 ? 3 : 9);
        };
        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);
        return () => window.removeEventListener('resize', updateItemsPerPage);
    }, []);

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
        
        if (sortBy === 'alpha') {
            certs.sort((a, b) => a.title.localeCompare(b.title));
        } else {
            // Reverse chronological (default) - newest first
            certs.sort((a, b) => b.year.localeCompare(a.year));
        }
        return certs;
    }, [selectedDomain, sortBy]);

    const totalPages = Math.ceil(filteredCertifications.length / itemsPerPage);
    const paginatedCerts = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return filteredCertifications.slice(start, start + itemsPerPage);
    }, [filteredCertifications, currentPage, itemsPerPage]);

    // Reset to page 1 when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedDomain, sortBy]);

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

                    <div className="flex flex-col gap-6 md:items-end">
                        {/* Sort Controls */}
                        <div className="flex bg-white/5 p-1 rounded-lg border border-white/10 self-start md:self-auto">
                            <button
                                onClick={() => setSortBy('date')}
                                className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${
                                    sortBy === 'date' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                Latest First
                            </button>
                            <button
                                onClick={() => setSortBy('alpha')}
                                className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${
                                    sortBy === 'alpha' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                Alphabetical
                            </button>
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
                </div>

                <PaginationControls 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
                
                <AnimatePresence>
                    <motion.div
                        key={`${selectedDomain}-${sortBy}-${currentPage}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="mb-12"
                    >
                        <Certifications items={paginatedCerts} />
                    </motion.div>
                </AnimatePresence>

                <PaginationControls 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </main>
    );
}

function PaginationControls({ 
    currentPage, 
    totalPages, 
    onPageChange 
}: { 
    currentPage: number; 
    totalPages: number; 
    onPageChange: (p: number) => void; 
}) {
    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-center items-center gap-4 my-8">
            <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-full bg-white/5 border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-all text-blue-400"
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <span className="text-sm font-mono text-gray-400">
                Page <span className="text-white font-bold">{currentPage}</span> of {totalPages}
            </span>
            <button
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-full bg-white/5 border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-all text-blue-400"
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
}

