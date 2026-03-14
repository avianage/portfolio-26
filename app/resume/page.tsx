'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { PROFILE } from '@/lib/data';

export default function ResumePage() {
    return (
        <main className="min-h-screen bg-[#121212] pt-28 pb-12 px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
                {/* Header/Navigation */}
                <div className="flex items-center justify-between mb-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            href="/"
                            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="group-hover:-translate-x-1 transition-transform"
                            >
                                <path d="m15 18-6-6 6-6" />
                            </svg>
                            Back to Home
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-2xl font-bold text-white">
                            Resume<span className="text-blue-400">.</span>
                        </h1>
                    </motion.div>
                </div>

                {/* Resume Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full bg-white rounded-xl shadow-2xl overflow-hidden relative aspect-[1/1.414]"
                >
                    <Image
                        src={PROFILE.resumeLink}
                        alt={`${PROFILE.name} Resume`}
                        fill
                        className="object-contain"
                        priority
                    />
                </motion.div>

                {/* Download Button (Optional but useful) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-12 flex justify-center"
                >
                    <a
                        href={PROFILE.resumeLink}
                        download="Aakash_Joshi_Resume.png"
                        className="px-8 py-4 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-500/25 flex items-center gap-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" x2="12" y1="15" y2="3" />
                        </svg>
                        Download Resume
                    </a>
                </motion.div>
            </div>
        </main>
    );
}
