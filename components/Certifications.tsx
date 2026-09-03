import Image from 'next/image';

interface CertItem {
    title: string;
    issuer: string;
    year: string;
    link: string;
    domain: string;
    platform?: string;
    category?: string;
    image?: string;
    score?: string;
    month?: string;
    expiryMonth?: string;
    expiryYear?: string;
}

const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

// Maps "May" / "sep" / "09" / "9" to a 0-based month index; null if unrecognized.
function parseMonth(m?: string): number | null {
    if (!m) return null;
    const s = m.trim().toLowerCase();
    if (!s) return null;
    const num = Number(s);
    if (Number.isInteger(num) && num >= 1 && num <= 12) return num - 1;
    const idx = MONTH_NAMES.findIndex(name => name.toLowerCase().startsWith(s));
    return idx === -1 ? null : idx;
}

function formatMonthYear(month: string | undefined, year: string): string {
    const idx = parseMonth(month);
    return idx === null ? year : `${MONTH_NAMES[idx]} ${year}`;
}

function expiryStatus(expiryMonth?: string, expiryYear?: string): { label: string; expired: boolean } | null {
    if (!expiryYear) return null;
    const y = parseInt(expiryYear, 10);
    if (!Number.isFinite(y)) return null;
    const monthIdx = parseMonth(expiryMonth);
    // No month => treat expiry as end of that year.
    const cutoff = new Date(y, (monthIdx ?? 11) + 1, 1);
    return {
        label: `Expires ${formatMonthYear(expiryMonth, expiryYear)}`,
        expired: new Date() >= cutoff,
    };
}

export default function Certifications({ items }: { items: CertItem[] }) {
    return (
        <div id="certifications-grid" className="max-w-7xl mx-auto px-6 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((cert, i) => (
                    <div
                        key={cert.title}
                        className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all flex flex-col h-full"
                    >
                        <div className="relative w-full aspect-[16/10] mb-6 rounded-xl overflow-hidden bg-black/40 border border-white/5 group-hover:border-blue-500/20 transition-colors">
                            {/* Placeholder for Certificate Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-700 opacity-20 group-hover:opacity-40 transition-opacity">
                                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z" />
                                </svg>
                            </div>
                            <Image
                                src={cert.image || "/certs/placeholder.png"}
                                alt={cert.title}
                                fill
                                priority={i < 3}
                                unoptimized
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 left-3 px-2 py-1 text-[10px] uppercase font-bold tracking-tight bg-blue-600/80 text-white rounded">
                                {cert.domain}
                            </div>
                            {cert.platform && (
                                <div className="absolute top-3 right-3 px-2 py-1 text-[10px] uppercase font-bold tracking-tight bg-black/60 text-white/90 rounded backdrop-blur-sm">
                                    {cert.platform}
                                </div>
                            )}
                        </div>

                        <div>
                            <h4 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors leading-snug">
                                {cert.title}
                            </h4>
                            <p className="text-gray-400 text-sm mb-4 font-medium">{cert.issuer}</p>
                        </div>

                        <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/5">
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-xs font-mono text-zinc-500">{formatMonthYear(cert.month, cert.year)}</span>
                                {(() => {
                                    const expiry = expiryStatus(cert.expiryMonth, cert.expiryYear);
                                    if (!expiry) return null;
                                    return expiry.expired ? (
                                        <span className="text-xs font-semibold text-red-400/80 bg-red-400/10 px-2 py-0.5 rounded">
                                            Expired
                                        </span>
                                    ) : (
                                        <span className="text-xs font-mono text-zinc-500">· {expiry.label}</span>
                                    );
                                })()}
                            </div>
                            {cert.score && (
                                <span className="text-xs font-semibold text-green-400/80 bg-green-400/10 px-2 py-0.5 rounded">
                                    Score: {cert.score}
                                </span>
                            )}
                            {cert.link && cert.link !== '#' && (
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                                >
                                    Verify
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
