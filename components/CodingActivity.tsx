'use client';

import { useEffect, useRef } from 'react';

export default function CodingActivity() {
    const snakeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (snakeRef.current) {
            snakeRef.current.scrollLeft = snakeRef.current.scrollWidth;
        }
    }, []);

    return (
        <section id="coding-activity" className="relative z-20 py-24 px-6 md:px-12 bg-[#121212] border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-white flex items-center gap-4 mb-12">
                    <span className="w-12 h-[1px] bg-blue-500/50"></span>
                    Coding Activity
                </h3>

                <div className="flex flex-col gap-6">
                    {/* GitHub Snake — scrollable, starts at right (latest) on mobile */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                        <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">GitHub Contributions</p>
                        <div ref={snakeRef} className="overflow-x-auto">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://raw.githubusercontent.com/avianage/avianage/output/github-contribution-grid-snake-dark.svg"
                                alt="GitHub contribution snake"
                                className="w-full min-w-[600px]"
                            />
                        </div>
                    </div>

                    {/* LeetCode — outer sized to scaled dimensions so mx-auto centers correctly */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                        <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">LeetCode Stats</p>
                        <div className="mx-auto overflow-hidden w-[300px] h-[228px] sm:w-[375px] sm:h-[285px] md:w-[500px] md:h-[380px]">
                            <div className="w-[500px] origin-top-left scale-[0.6] sm:scale-[0.75] md:scale-100">
                                <iframe
                                    src="https://leetcard.jacoblin.cool/avianage?theme=dark&font=Inter&ext=heatmap"
                                    width="500"
                                    height="380"
                                    frameBorder="0"
                                    scrolling="no"
                                    className="rounded-lg"
                                    title="LeetCode Stats"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
