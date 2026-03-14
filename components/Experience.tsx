'use client';

import { EXPERIENCE } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Experience() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    return (
        <section id="experience" className="relative z-20 py-24 px-6 md:px-12 bg-[#121212] border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 gap-6">
                        <div>
                            <h3 className="text-3xl font-bold text-white flex items-center gap-4 mb-2">
                                <span className="w-12 h-[1px] bg-blue-500/50"></span>
                                Experience
                            </h3>
                            <p className="text-zinc-500 text-sm ml-16">Click on a card to view details</p>
                        </div>
                        <Link
                            href="/certifications"
                            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all text-sm font-medium text-white whitespace-nowrap"
                        >
                            View Certifications
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                    <div className="flex flex-col gap-6">
                        {EXPERIENCE.map((item, i) => (
                            <motion.div
                                key={i}
                                layout
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                                className={`group relative p-6 md:p-8 rounded-2xl border transition-all cursor-pointer ${
                                    expandedIndex === i 
                                    ? 'bg-white/10 border-blue-500/30 ring-1 ring-blue-500/20' 
                                    : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]'
                                }`}
                            >
                                <div className="flex flex-col md:flex-row gap-6 md:items-center">
                                    {item.logo && (
                                        <div className={`flex-shrink-0 p-3 rounded-xl transition-all duration-500 ${
                                            expandedIndex === i ? 'bg-white scale-110' : 'bg-white/90 group-hover:bg-white'
                                        } flex items-center justify-center w-16 h-16 shadow-xl`}>
                                            <Image
                                                src={item.logo}
                                                alt={`${item.company} logo`}
                                                width={48}
                                                height={48}
                                                className="object-contain"
                                            />
                                        </div>
                                    )}
                                    <div className="flex-1">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                            <h4 className={`text-xl font-bold transition-colors ${
                                                expandedIndex === i ? 'text-blue-400' : 'text-zinc-100'
                                            }`}>
                                                {item.role}
                                            </h4>
                                            <span className="text-xs font-mono text-zinc-500 bg-black/20 px-3 py-1 rounded-full border border-white/5">
                                                {item.year}
                                            </span>
                                        </div>
                                        <p className="text-blue-200/60 font-medium text-sm mt-1">{item.company}</p>
                                    </div>
                                    <div className={`hidden md:block transition-transform duration-300 ${expandedIndex === i ? 'rotate-180' : ''}`}>
                                        <svg className="w-5 h-5 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {expandedIndex === i && item.points && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-6 mt-6 border-t border-white/10 space-y-3">
                                                {item.points.map((point, idx) => (
                                                    <motion.div 
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.1 + idx * 0.05 }}
                                                        className="flex items-start gap-3 group/point"
                                                    >
                                                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500/40 group-hover/point:bg-blue-400 transition-colors shrink-0"></span>
                                                        <p className="text-zinc-400 text-sm md:text-base leading-relaxed group-hover/point:text-zinc-300 transition-colors">
                                                            {point}
                                                        </p>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
