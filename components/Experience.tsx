'use client';

import { EXPERIENCE } from '@/lib/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Experience() {
    return (
        <section id="experience" className="relative z-20 py-16 px-6 md:px-12 bg-[#121212] border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 border-b border-white/10 pb-6 gap-4">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-purple-500/50"></span>
                            Experience
                        </h3>
                        <Link
                            href="/certifications"
                            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-medium text-white whitespace-nowrap"
                        >
                            View Certifications
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                    <div className="grid gap-8">
                        {EXPERIENCE.map((item, i) => (
                            <div key={i} className="group relative pl-8 border-l border-white/10 hover:border-purple-500/50 transition-colors">
                                <span className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-800 group-hover:bg-purple-400 transition-colors ring-4 ring-[#121212]"></span>

                                <div className="flex flex-col md:flex-row md:items-start gap-6 mb-2">
                                    {item.logo && (
                                        <div className="flex-shrink-0 bg-white p-2 rounded-xl flex items-center justify-center w-20 h-20 mx-auto md:mx-0 shadow-lg shadow-black/20">
                                            <Image
                                                src={item.logo}
                                                alt={`${item.company} logo`}
                                                width={64}
                                                height={64}
                                                className="object-contain w-full h-full"
                                            />
                                        </div>
                                    )}
                                    <div className="flex-1 text-center md:text-left">
                                        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                                            <h4 className="text-lg font-medium text-zinc-100">{item.role}</h4>
                                            <span className="text-sm font-mono text-zinc-500">{item.year}</span>
                                        </div>
                                        <p className="text-purple-200/80 text-sm mb-2 font-medium">{item.company}</p>
                                        <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
