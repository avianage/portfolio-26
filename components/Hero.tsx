'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import Socials from './Socials';
import { PROFILE } from '@/lib/data';

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [0, -distance]);
}

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });

    // 3D "Fly through" effect transformation
    // As user scrolls, content moves towards the camera (scale up, opacity fade)

    // Section 1: Intro
    const y1 = useTransform(scrollYProgress, [0, 0.4], [0, -100]);
    const opacity1 = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
    const scale1 = useTransform(scrollYProgress, [0, 0.25], [1, 1.5]);

    // Section 2: Reliable
    const y2 = useTransform(scrollYProgress, [0.1, 0.4, 0.7], [100, 0, -100]);
    const opacity2 = useTransform(scrollYProgress, [0.15, 0.4, 0.65], [0, 1, 0]);
    const scale2 = useTransform(scrollYProgress, [0.15, 0.4, 0.65], [0.8, 1, 1.2]);

    // Section 3: Multidisciplinary
    const y3 = useTransform(scrollYProgress, [0.4, 0.75, 1], [100, 0, 0]); // Ends at 0 to stay
    const opacity3 = useTransform(scrollYProgress, [0.45, 0.75, 1], [0, 1, 1]);
    const scale3 = useTransform(scrollYProgress, [0.45, 0.75], [0.8, 1]);

    // Background Elements (Parallax Stars/Shapes)
    const bgY1 = useParallax(scrollYProgress, 300);
    const bgY2 = useParallax(scrollYProgress, 600);
    const bgY3 = useParallax(scrollYProgress, 900);

    // Background Image Parallax
    const heroBgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']); // Move slightly slower than scroll

    return (
        <div ref={ref} className="h-[400vh] relative bg-[#0a0a0a] overflow-clip">
            <div className="sticky top-0 h-screen w-full overflow-hidden perspective-1000">

                {/* Main Background Image */}
                <div
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-black/60 z-10" /> {/* Dark overlay for text readability */}
                    <img
                        src="/hero-bg.png"
                        alt="Background"
                        className="w-full h-full object-cover opacity-80"
                    />
                </div>

                {/* Background Grid / Abstract Shapes */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-1 pointer-events-none"></div>

                {/* Floating "Stars" or shapes for depth */}
                <motion.div style={{ y: bgY1 }} className="absolute top-[20%] left-[10%] w-2 h-2 bg-blue-500/30 rounded-full blur-[1px] z-1" />
                <motion.div style={{ y: bgY2 }} className="absolute top-[30%] right-[20%] w-3 h-3 bg-purple-500/30 rounded-full blur-[2px] z-1" />
                <motion.div style={{ y: bgY3 }} className="absolute top-[50%] left-[40%] w-1 h-1 bg-white/20 rounded-full blur-[0px] z-1" />
                <motion.div style={{ y: bgY2 }} className="absolute top-[80%] right-[10%] w-4 h-4 bg-cyan-500/20 rounded-full blur-[4px] z-1" />
                <motion.div style={{ y: bgY1 }} className="absolute top-[10%] right-[30%] w-64 h-64 bg-indigo-600/5 rounded-full blur-[80px] z-1" />
                <motion.div style={{ y: bgY3 }} className="absolute bottom-[20%] left-[20%] w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] z-1" />


                {/* Content Container */}
                <div className="relative w-full h-full flex items-center justify-center p-4 z-20">

                    {/* Section 1 */}
                    <motion.div
                        style={{ y: y1, opacity: opacity1, scale: scale1 }}
                        className="absolute inset-0 flex flex-col items-center justify-center text-center z-30"
                    >
                        <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-2xl">
                            {PROFILE.name}
                        </h1>
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl mb-8 max-w-[90%] w-auto inline-block">
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-lg md:text-2xl text-gray-300 font-light tracking-wide justify-center">
                                {PROFILE.role.split('|').map((part, index) => (
                                    <span key={index} className="flex items-center">
                                        <span className="whitespace-nowrap">{part.trim()}</span>
                                        {index < PROFILE.role.split('|').length - 1 && (
                                            <span className="hidden md:inline-block text-gray-600 ml-4">/</span>
                                        )}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="pointer-events-auto">
                            <Socials itemClassName="bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:scale-110 transition-transform" />
                        </div>
                    </motion.div>

                    {/* Section 2 */}
                    <motion.div
                        style={{ y: y2, opacity: opacity2, scale: scale2 }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
                    >
                        <div className="max-w-4xl text-center px-4">
                            <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight text-white">
                                Reliable, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                    High-Performance
                                </span> <br />
                                Systems.
                            </h2>
                            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                                I simplify complexity. Building robust infrastructure and precision tooling for the modern web.
                            </p>
                        </div>
                    </motion.div>

                    {/* Section 3 */}
                    <motion.div
                        style={{ y: y3, opacity: opacity3, scale: scale3 }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
                    >
                        <div className="max-w-5xl text-center px-4">
                            <h2 className="text-5xl md:text-8xl font-bold mb-8 text-white tracking-tight">
                                Multidisciplinary.
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
                                <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors">
                                    <h3 className="text-2xl font-semibold mb-2 text-purple-300">AI</h3>
                                    <p className="text-gray-400">Integrating intelligence into applications.</p>
                                </div>
                                <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors">
                                    <h3 className="text-2xl font-semibold mb-2 text-blue-300">Tooling</h3>
                                    <p className="text-gray-400">Crafting developer experiences that matter.</p>
                                </div>
                                <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors">
                                    <h3 className="text-2xl font-semibold mb-2 text-cyan-300">Infrastructure</h3>
                                    <p className="text-gray-400">Scalable, resilient foundation engineering.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
