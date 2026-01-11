'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { PROJECTS } from '@/lib/data';

export default function Projects() {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    useEffect(() => {
        if (selectedId) {
            document.body.style.overflow = 'hidden';
            document.body.classList.add('hide-footer');
        } else {
            document.body.style.overflow = 'unset';
            document.body.classList.remove('hide-footer');
        }

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedId(null);
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            document.body.style.overflow = 'unset';
            document.body.classList.remove('hide-footer');
            window.removeEventListener('keydown', handleEsc);
        };
    }, [selectedId]);

    const selectedProject = PROJECTS.find(p => p.id === selectedId);

    return (
        <section id="projects" className="relative z-20 bg-[#121212] py-24 px-6 md:px-12 text-white">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 md:mb-16 tracking-tight border-b border-white/10 pb-6 flex justify-between items-center flex-wrap gap-4">
                    <div className="flex flex-col">
                        <span>Selected Works</span>
                        <span className="text-sm font-normal text-gray-500 hidden md:inline-block">Sorted by impact & complexity</span>
                    </div>
                    <Link
                        href="/projects"
                        className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-medium"
                    >
                        View All Projects
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" suppressHydrationWarning>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PROJECTS.filter(project => project.featured).map((project, i, arr) => (
                        <motion.div
                            layoutId={`card-${project.id}`}
                            onClick={() => setSelectedId(project.id)}
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`cursor-pointer group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md overflow-hidden flex flex-col ${i === arr.length - 1 && arr.length % 2 !== 0
                                ? 'md:col-span-2 md:mx-auto md:w-[calc(50%-1rem)]'
                                : ''
                                }`}
                        >
                            <div className="relative w-full aspect-video mb-6 rounded-2xl overflow-hidden border border-white/10">
                                <Image
                                    src={project.image || "/projects/zenkraft.png"}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    suppressHydrationWarning
                                />
                            </div>

                            <div className="relative z-10 flex flex-col">
                                <div className="flex flex-wrap gap-3 mb-4 items-center">
                                    <span className="px-3 py-1 text-xs font-mono font-medium text-white/60 border border-white/10 rounded-full">
                                        {project.year}
                                    </span>
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-semibold mb-2 text-white/90 group-hover:text-white">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="p-4 rounded-xl bg-black/30 border border-white/5 mt-2">
                                    <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">
                                        Core Challenge
                                    </span>
                                    <p className="text-sm text-gray-300">
                                        {project.challenge}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>


            </div>

            <AnimatePresence>
                {selectedId && selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-md"
                        />

                        <motion.div
                            layoutId={`card-${selectedId}`}
                            className="relative w-full max-w-2xl bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/10 max-h-[85vh] flex flex-col shadow-2xl"
                        >
                            <div className="relative w-full h-64 sm:h-80 bg-black/40">
                                <Image
                                    src={selectedProject.image || "/projects/zenkraft.png"}
                                    alt={selectedProject.title}
                                    fill
                                    className="object-contain"
                                    suppressHydrationWarning
                                />
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
                            </div>

                            <div className="p-8 pb-4 border-b border-white/5 flex justify-between items-start gap-4 -mt-12 relative z-10">
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 break-words">{selectedProject.title}</h3>
                                        <a
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                                            title="View Source on GitHub"
                                        >
                                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" suppressHydrationWarning>
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tags.map(tag => (
                                            <span key={tag} className="text-xs text-gray-400 border border-white/10 px-2 py-1 rounded whitespace-nowrap">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <button
                                    onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                    className="flex-shrink-0 p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                                    aria-label="Close modal"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" suppressHydrationWarning>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="p-8 overflow-y-auto custom-scrollbar">
                                <section className="mb-8">
                                    <h4 className="text-sm uppercase tracking-widest text-blue-400 mb-2 font-semibold">Overview</h4>
                                    <p className="text-gray-300 leading-relaxed">{selectedProject.details.overview}</p>
                                </section>

                                <section className="mb-8">
                                    <h4 className="text-sm uppercase tracking-widest text-blue-400 mb-2 font-semibold">Architecture</h4>
                                    <p className="text-gray-300 leading-relaxed">{selectedProject.details.architecture}</p>
                                </section>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <section>
                                        <h4 className="text-sm uppercase tracking-widest text-yellow-500/80 mb-2 font-semibold">Key Decision</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                                            {selectedProject.details.keyDecisions}
                                        </p>
                                    </section>
                                    <section>
                                        <h4 className="text-sm uppercase tracking-widest text-green-500/80 mb-2 font-semibold">Key Learning</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                                            {selectedProject.details.learnings}
                                        </p>
                                    </section>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <style jsx global>{`
        .hide-footer #footer {
          display: none !important;
        }
        @media (max-width: 768px) {
          .hide-footer nav {
            display: none !important;
          }
        }
        .stroke-text {
          -webkit-text-stroke: 2px #fff;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
        </section>
    );
}
