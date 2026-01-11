'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import Socials from './Socials';
import { PROFILE } from '@/lib/data';

export default function Overlay() {
    const { scrollYProgress } = useScroll();

    const opacity1 = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

    const opacity2 = useTransform(scrollYProgress, [0.15, 0.3, 0.45], [0, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.15, 0.3, 0.45], [50, 0, -50]);

    const opacity3 = useTransform(scrollYProgress, [0.45, 0.6, 0.95], [0, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.45, 0.6, 0.95], [50, 0, -50]);

    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 text-white font-sans px-4 md:px-12">
            {/* Section 1 */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            >
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-white drop-shadow-2xl">
                    {PROFILE.name}
                </h1>
                <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/5 mb-8 max-w-[90%] w-auto md:max-w-4xl">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 text-lg sm:text-lg md:text-xl text-gray-200 font-light tracking-wide">
                        {PROFILE.role.split('|').map((part, index) => (
                            <span key={index} className="flex items-center justify-center">
                                <span className="whitespace-nowrap">{part.trim()}</span>
                                {index < PROFILE.role.split('|').length - 1 && (
                                    <span className="hidden md:inline-block text-gray-500 ml-3">|</span>
                                )}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="pointer-events-auto scale-90 md:scale-100">
                    <Socials itemClassName="bg-black/60 border border-white/20 text-white hover:bg-black/80 hover:border-white/40" />
                </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute inset-0 flex items-center justify-center md:justify-start md:pl-24 px-6"
            >
                <div className="max-w-xl text-center md:text-left bg-black/60 p-6 md:p-8 rounded-2xl backdrop-blur-md border border-white/10 shadow-2xl">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 md:mb-6 leading-tight text-blue-200/90">
                        Reliable, <br /> High-Performance <br /> Systems.
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                        I simplify complexity. Building robust infrastructure and precision tooling.
                    </p>
                </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute inset-0 flex items-center justify-center md:justify-end md:pr-24 px-6"
            >
                <div className="max-w-xl text-center md:text-right bg-black/60 p-6 md:p-8 rounded-2xl backdrop-blur-md border border-white/10 shadow-2xl">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold mb-4 md:mb-6 text-yellow-100/90">
                        Multidisciplinary.
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
                        AI. Tooling. Infrastructure.
                        <br />
                        <span className="text-sm md:text-base text-gray-400 mt-4 block">
                            Driven by trajectory and growth.
                        </span>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
