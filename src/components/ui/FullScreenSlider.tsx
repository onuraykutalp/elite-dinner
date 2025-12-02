"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type Slide = {
    id: string | number;
    title: string;
    subtitle?: string;
    cta?: { label: string; href: string };
    image: string;
};

export function FullscreenSlider({
    slides,
    autoPlay = true,
    autoPlayInterval = 5000
}: {
    slides: Slide[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
}) {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        if (!autoPlay) return;
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, autoPlayInterval);

        return () => resetTimeout();
    }, [index, autoPlay, autoPlayInterval, slides.length]);

    return (
        <section className="relative top-0 w-full h-[90vh] overflow-hidden" lang="en">
            {/* Slides Container */}
            <div
                className="whitespace-nowrap transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {slides.map((s) => (
                    <div key={s.id} className="inline-block w-full h-[90vh] relative">
                        <Image src={s.image} alt={s.title} fill className="object-cover" priority />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

                        {/* Text Content */}
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-24 text-center text-white max-w-3xl px-4 animate-fade-in-up">
                            <h2 className="text-4xl md:text-6xl font-extrabold drop-shadow-xl">{s.title}</h2>
                            <p className="mt-4 text-lg md:text-xl opacity-90 drop-shadow-lg">{s.subtitle}</p>
                            {s.cta && (
                                <a href={s.cta.href}
                                   className="mt-6 inline-block px-6 py-3 bg-rose-600 rounded-full text-white font-medium shadow hover:scale-[1.02] transition-transform">
                                    {s.cta.label}
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Dot Navigation */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            i === index ? "bg-rose-600 scale-125" : "bg-white/60 hover:bg-white"
                        }`}
                        onClick={() => setIndex(i)}
                    />
                ))}
            </div>
        </section>
    );
}
