'use client';

import { PROFILE } from '@/lib/data';
import Socials from './Socials';

export default function Footer() {
    return (
        <footer id="footer" className="relative z-20 py-12 px-6 md:px-12 bg-black border-t border-white/5 text-center">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">

                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Let's Connect</h2>
                    <p className="text-gray-400 mb-6">Open to opportunities in Systems Engineering & AI Infrastructure.</p>
                    <a
                        href={PROFILE.socials.email}
                        className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
                    >
                        Get in Touch
                    </a>
                </div>

                <div className="w-full h-[1px] bg-white/5 max-w-xs mx-auto"></div>

                <div className="flex flex-col items-center gap-4">
                    <Socials />
                    <p className="text-xs text-zinc-600">
                        © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js & TypeScript.
                    </p>
                </div>
            </div>
        </footer>
    );
}
