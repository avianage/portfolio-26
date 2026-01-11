'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Leadership from '@/components/Leadership';
import Achievements from '@/components/Achievements';

export default function LeadershipPage() {
    return (
        <main className="min-h-screen bg-[#121212] text-white pt-28 p-6 md:p-12 lg:p-24 overflow-x-hidden flex flex-col items-center">
            <div className="max-w-7xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 px-6 md:px-0"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group"
                    >
                        <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Leadership & Extracurriculars</h1>
                    <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
                        Beyond the classroom: My contributions to community building,
                        technical leadership, and creative pursuits across campus and beyond.
                    </p>
                </motion.div>

                <Leadership />
                <Achievements />
            </div>
        </main>
    );
}
