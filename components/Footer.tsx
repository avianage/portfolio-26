'use client';

import { PROFILE, SOCIALS } from '@/lib/data';
import Socials from './Socials';

export default function Footer() {
    return (
        <footer id="footer" className="relative z-20 py-12 px-6 md:px-12 bg-black border-t border-white/5 text-center">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">

                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Let's Connect</h2>
                    <p className="text-gray-400 mb-6">Open to opportunities in Systems Engineering, DevOps & AI Infrastructure.</p>
                    <a
                        href={SOCIALS.find(s => s.id === 'email')?.url}
                        className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Send an Email
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
