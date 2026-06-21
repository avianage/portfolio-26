'use client';

import { SKILLS } from '@/lib/data';
import { useState } from 'react';

const ALL = 'All';

export default function Skills() {
    const categories = [ALL, ...SKILLS.map(s => s.category)];
    const [active, setActive] = useState(ALL);

    const visibleItems = active === ALL
        ? SKILLS.flatMap(s => s.items)
        : SKILLS.find(s => s.category === active)?.items ?? [];

    return (
        <section id="skills" className="relative z-20 py-24 px-6 md:px-12 bg-[#121212] border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
                    <h3 className="text-3xl font-bold text-white flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-blue-500/50"></span>
                        Skills
                    </h3>
                </div>

                {/* Category tabs */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                                active === cat
                                    ? 'bg-blue-600/20 text-blue-200 border-blue-500/50'
                                    : 'bg-white/5 text-gray-400 border-transparent hover:bg-white/10 hover:text-white'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-3">
                    {visibleItems.map(item => (
                        <span
                            key={item}
                            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-blue-500/40 hover:text-white transition-all"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
