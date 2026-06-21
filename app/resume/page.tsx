import Link from 'next/link';
import { PROFILE } from '@/lib/data';

export default function ResumePage() {
    return (
        <main className="min-h-screen bg-[#121212] pt-28 pb-12 px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <Link
                        href="/"
                        className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        Back to Home
                    </Link>
                    <h1 className="text-2xl font-bold text-white">
                        Resume<span className="text-blue-400">.</span>
                    </h1>
                </div>

                {/* Resume Image */}
                <div className="w-full bg-white rounded-xl shadow-2xl overflow-hidden relative aspect-[1/1.414]">
                    <img
                        src={PROFILE.resumeLink}
                        alt={`${PROFILE.name} Resume`}
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href={PROFILE.resumeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 text-white font-semibold transition-all hover:scale-105 active:scale-95"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        View Full Size
                    </a>
                    <a
                        href={PROFILE.resumeLink}
                        download="Aakash_Joshi_Resume.png"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Resume
                    </a>
                </div>
            </div>
        </main>
    );
}
