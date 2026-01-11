'use client';

import { ACHIEVEMENTS } from '@/lib/data';
import { motion } from 'framer-motion';

export default function Achievements() {
    return (
        <div className="max-w-4xl mx-auto space-y-8 mt-20">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white flex items-center gap-4 mb-10"
            >
                <span className="w-12 h-[1px] bg-blue-500"></span>
                Key Achievements
            </motion.h2>

            <div className="grid gap-6">
                {ACHIEVEMENTS.map((achievement, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group"
                    >
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                            {achievement.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            {achievement.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
