'use client';

import { PROFILE } from '@/lib/data';
import { motion } from 'framer-motion';

export default function About() {
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
                        01. PHILOSOPHY
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                        <span className="text-gray-500">I approach engineering with a </span>
                        <span className="text-white">systems-first mindset.</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 text-gray-400 text-lg leading-relaxed">
                        <div>
                            <p className="mb-6">
                                <strong className="text-white font-medium">Computer Engineer</strong> skilled in <strong className="text-white font-medium">software development</strong>, <strong className="text-white font-medium">machine learning</strong>, and <strong className="text-white font-medium">web technologies</strong>. Experienced in <strong className="text-white font-medium">full-stack</strong> application development with expertise in <strong className="text-blue-200/90 font-medium">Python, C++, and JavaScript</strong>.
                            </p>
                            <p>
                                My work isn't just about writing code—it's about understanding the <strong className="text-white font-medium">entire stack</strong>, from hardware constraints to user experience, ensuring <strong className="text-white font-medium">reliability</strong> at every layer.
                            </p>
                        </div>
                        <div>
                            <p className="mb-6">
                                Driven by <strong className="text-white font-medium">trajectory and growth</strong>. <strong className="text-white font-medium">Multidisciplinary</strong>. <strong className="text-blue-200/90 font-medium">AI. Tooling. Infrastructure.</strong>
                            </p>
                            <p>
                                Whether it's optimizing data pipelines or designing intuitive developer tools, I focus on creating value through <strong className="text-white font-medium">precision and performance</strong>.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
