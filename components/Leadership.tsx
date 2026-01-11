'use client';

import { LEADERSHIP } from '@/lib/data';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Role {
    title: string;
    period?: string;
    description: string;
    link?: string;
}

interface LeadershipItem {
    organization: string;
    period: string;
    roles: Role[];
    images: string[];
}

export default function Leadership() {
    return (
        <div className="max-w-4xl mx-auto space-y-16">
            {(LEADERSHIP as LeadershipItem[]).map((item, i) => (
                <motion.section
                    key={item.organization}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="group"
                >
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-full md:w-64 space-y-4 flex flex-col items-center md:items-start text-center md:text-left shrink-0">
                            <div className="relative w-48 sm:w-56 md:w-full aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-blue-500/30 transition-colors shadow-2xl">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-700 opacity-20 group-hover:opacity-40 transition-opacity">
                                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z" />
                                    </svg>
                                </div>
                                <Image
                                    src={item.images[0] || "/leadership/placeholder.png"}
                                    alt={item.organization}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                                    {item.organization}
                                </h3>
                                <p className="text-blue-200/50 text-sm font-medium">{item.period}</p>
                            </div>
                        </div>

                        <div className="w-full md:w-2/3 space-y-8 pt-2">
                            {item.roles.map((role, idx) => (
                                <div key={idx} className="relative pl-6 border-l border-white/10 space-y-2">
                                    <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                        <h4 className="text-lg font-bold text-white/90 leading-snug">{role.title}</h4>
                                        {role.period && (
                                            <span className="text-xs font-mono text-zinc-500 bg-white/5 px-2 py-1 rounded">
                                                {role.period}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {role.description}
                                    </p>
                                    {role.link && (
                                        <a
                                            href={role.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors group/link pt-2"
                                        >
                                            View Link
                                            <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>
            ))}
        </div>
    );
}
