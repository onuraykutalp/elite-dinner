"use client";

export function Header() {
    return (
        <header className="absolute top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-xs shadow-sm">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-[70px] sm:h-[120px] md:h-[150px] lg:h-[180px]">
                    <div className="flex items-center gap-4">
                        <a href="/" className="flex items-center gap-3" aria-label="Elite Dinner Cruise Home">
                            <img
                                src="/img/logo1.png"
                                alt="Elite Dinner Cruise - Luxury Bosphorus Dinner Cruise Istanbul"
                                className="h-14 sm:h-16 md:h-20 lg:h-24 object-contain"
                            />
                        </a>
                    </div>

                    <nav className="hidden md:flex items-center gap-6 text-sm" aria-label="Main navigation">
                        <a href="/" className="hover:text-rose-600 transition font-semibold text-white text-xl">Home</a>
                        <a href="/tours" className="hover:text-rose-600 transition font-semibold text-white text-xl">Tours</a>
                        <a href="/gallery" className="hover:text-rose-600 transition font-semibold text-white text-xl">Gallery</a>
                        <a href="/transportation" className="hover:text-rose-600 transition font-semibold text-white text-xl">Transportation</a>
                        <a href="/contact" className="hover:text-rose-600 transition font-semibold text-white text-xl">Contact</a>
                    </nav>

                    <div className="flex items-center gap-3">
                        <a href="/tours" className="hidden md:inline-block px-4 py-2 rounded-full bg-rose-600 text-white text-sm shadow hover:shadow-lg transition" aria-label="Book your dinner cruise now">Book Now</a>

                        {/* Mobile menu button */}
                        <button
                            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
                            aria-label="Open menu"
                            onClick={() => {
                                const el = document.getElementById("mobile-menu");
                                if (!el) return;
                                el.classList.toggle("hidden");
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <nav id="mobile-menu" className="hidden md:hidden py-2" aria-label="Mobile navigation">
                    <div className="flex flex-col gap-2 px-2 pb-4">
                        <a href="/" className="px-3 py-2 rounded hover:bg-slate-50">Home</a>
                        <a href="/tours" className="px-3 py-2 rounded hover:bg-slate-50">Tours</a>
                        <a href="/gallery" className="px-3 py-2 rounded hover:bg-slate-50">Gallery</a>
                        <a href="/transportation" className="px-3 py-2 rounded hover:bg-slate-50">Transportation</a>
                        <a href="/contact" className="px-3 py-2 rounded hover:bg-slate-50">Contact</a>
                    </div>
                </nav>
            </div>
        </header>
    );
}
