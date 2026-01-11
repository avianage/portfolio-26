import { motion } from 'framer-motion';
import Image from 'next/image';

interface CertItem {
    title: string;
    issuer: string;
    year: string;
    link: string;
    domain: string;
    image?: string;
    score?: string;
}

export default function Certifications({ items }: { items: CertItem[] }) {
    return (
        <div id="certifications-grid" className="max-w-7xl mx-auto px-6 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((cert, i) => (
                    <motion.div
                        layout
                        key={cert.title}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all flex flex-col h-full"
                    >
                        <div className="relative w-full aspect-[16/10] mb-6 rounded-xl overflow-hidden bg-black/40 border border-white/5 group-hover:border-blue-500/20 transition-colors">
                            {/* Placeholder for Certificate Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-700 opacity-20 group-hover:opacity-40 transition-opacity">
                                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z" />
                                </svg>
                            </div>
                            <Image
                                src={cert.image || "/certs/placeholder.png"}
                                alt={cert.title}
                                fill
                                className="object-contain group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 left-3 px-2 py-1 text-[10px] uppercase font-bold tracking-tight bg-blue-600/80 text-white rounded">
                                {cert.domain}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors leading-snug">
                                {cert.title}
                            </h4>
                            <p className="text-gray-400 text-sm mb-4 font-medium">{cert.issuer}</p>
                        </div>

                        <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/5">
                            <span className="text-xs font-mono text-zinc-500">{cert.year}</span>
                            {cert.score && (
                                <span className="text-xs font-semibold text-green-400/80 bg-green-400/10 px-2 py-0.5 rounded">
                                    Score: {cert.score}
                                </span>
                            )}
                            {cert.link && cert.link !== '#' && (
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                                >
                                    Verify
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
