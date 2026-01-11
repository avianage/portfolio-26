'use client';

import { EDUCATION } from '@/lib/data';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Education() {
    return (
        <section id="education" className="relative z-20 py-16 px-6 md:px-12 bg-[#121212] border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-blue-500/50"></span>
                            Education
                        </h3>
                        <Link
                            href="/leadership"
                            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-medium text-white"
                        >
                            View Activities
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                    <div className="grid gap-6">
                        {EDUCATION.map((item, i) => (
                            <div key={i} className="group relative pl-8 border-l border-white/10 hover:border-blue-500/50 transition-colors">
                                <span className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-800 group-hover:bg-blue-400 transition-colors ring-4 ring-[#121212]"></span>

                                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                                    <h4 className="text-lg font-medium text-zinc-100">{item.institution}</h4>
                                    <span className="text-sm font-mono text-zinc-500">{item.year}</span>
                                </div>
                                <p className="text-zinc-400 text-sm mb-2">{item.degree}</p>

                                {item.achievements.length > 0 && (
                                    <ul className="flex flex-wrap gap-2 mt-2">
                                        {item.achievements.map((ach, j) => (
                                            <li key={j} className="text-xs px-2 py-1 bg-white/5 rounded text-blue-200/70 border border-white/5">
                                                {ach}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
