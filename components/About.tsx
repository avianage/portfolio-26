'use client';

import { ABOUT } from '@/lib/data';
import { motion } from 'framer-motion';

export default function About() {
    const formatText = (text: string) => {
        // Handle bolding markers: **text** for white-bold, ^^text^^ for blue-bold
        const parts = text.split(/(\*\*.*?\*\*|\^\^.*?\^\^)/g);
        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return (
                    <strong key={index} className="text-white font-medium">
                        {part.slice(2, -2)}
                    </strong>
                );
            }
            if (part.startsWith('^^') && part.endsWith('^^')) {
                return (
                    <strong key={index} className="text-blue-200/90 font-medium">
                        {part.slice(2, -2)}
                    </strong>
                );
            }
            return part;
        });
    };

    return (
        <section id="about" className="relative z-20 py-24 px-6 md:px-12 bg-[#121212] text-white">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="block text-blue-300 font-mono text-sm tracking-widest mb-4 opacity-80">
                        {ABOUT.label}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                        <span className="text-gray-500">{ABOUT.title.faded}</span>
                        <span className="text-white">{ABOUT.title.highlight}</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 text-gray-400 text-lg leading-relaxed">
                        {ABOUT.description.map((col, colIndex) => (
                            <div key={colIndex}>
                                {col.paragraphs.map((para, paraIndex) => (
                                    <p key={paraIndex} className={paraIndex === 0 ? "mb-6" : ""}>
                                        {formatText(para)}
                                    </p>
                                ))}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
