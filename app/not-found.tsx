import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#121212] text-white flex flex-col items-center justify-center px-6">
            <p className="text-[10rem] font-bold text-white/5 leading-none select-none">404</p>
            <h1 className="text-2xl font-bold text-white mt-4 mb-2">Page not found</h1>
            <p className="text-gray-400 mb-10">This page doesn&apos;t exist or was moved.</p>
            <Link
                href="/"
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors group"
            >
                <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
            </Link>
        </main>
    );
}
