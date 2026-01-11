'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS } from '@/lib/data';

export default function ProjectsPage() {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    // Get all unique tags
    const allTags = useMemo(() => {
        const tags = new Set<string>();
        PROJECTS.forEach(project => {
            project.tags.forEach(tag => tags.add(tag));
        });
        return Array.from(tags).sort();
    }, []);

    // Filter and sort projects
    const filteredProjects = useMemo(() => {
        let projects = [...PROJECTS];

        if (selectedTag) {
            projects = projects.filter(p => p.tags.includes(selectedTag));
        }

        return projects.sort((a, b) => a.title.localeCompare(b.title));
    }, [selectedTag]);

    return (
        <main className="min-h-screen bg-[#121212] text-white pt-28 p-6 md:p-12 lg:p-24">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div>
                        <Link
                            href="/"
                            className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors group"
                        >
                            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Home
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">All Projects</h1>
                        <p className="mt-4 text-gray-400 max-w-xl">
                            A complete archive of my work, experiments, and open source contributions.
                            Sorted alphabetically.
                        </p>
                    </div>

                    {/* Filter Tags */}
                    <div className="flex flex-wrap gap-2 md:justify-end max-w-xl">
                        <button
                            onClick={() => setSelectedTag(null)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedTag === null
                                ? 'bg-blue-600/20 text-blue-200 border-blue-500/50'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border-transparent'
                                } border`}
                        >
                            All
                        </button>
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedTag === tag
                                    ? 'bg-blue-600/20 text-blue-200 border-blue-500/50'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border-transparent'
                                    } border`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, i) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            key={project.id}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex flex-col group block h-full"
                        >
                            <div className="relative w-full aspect-video mb-4 rounded-xl overflow-hidden">
                                <Image
                                    src={(project as any).image || "/projects/zenkraft.png"}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="flex justify-between items-start mb-4">
                                <div className="flex gap-2">
                                    {project.featured && (
                                        <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-yellow-500/20 text-yellow-200 rounded border border-yellow-500/30">
                                            Featured
                                        </span>
                                    )}
                                    <span className="text-sm font-mono text-gray-500">{project.year}</span>
                                </div>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors text-gray-400 hover:text-white"
                                    aria-label="View on GitHub"
                                >
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                            </div>

                            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-gray-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}

                    {filteredProjects.length === 0 && (
                        <div className="col-span-full py-24 text-center">
                            <p className="text-gray-500">No projects found with tag "{selectedTag}"</p>
                            <button
                                onClick={() => setSelectedTag(null)}
                                className="mt-4 text-blue-400 hover:underline"
                            >
                                Clear filter
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
