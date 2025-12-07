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
  autoPlayInterval = 5000,
}: {
  slides: Slide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

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

  // optional: keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + slides.length) % slides.length);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % slides.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [slides.length]);

  return (
    <section className="relative top-0 w-full h-screen md:h-[90vh] overflow-hidden" lang="en">
      {/* Slides Container: use flex instead of whitespace-nowrap so text can wrap */}
      <div
        ref={containerRef}
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s) => (
          <div key={s.id} className="min-w-full flex-shrink-0 relative h-screen md:h-[90vh]">
            {/* Background image using next/image fill */}
            <Image src={s.image} alt={s.title} fill className="object-cover" priority />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent z-10" />

            {/* Text Content (whitespace-normal so it wraps on mobile) */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-60 md:bottom-24 text-center text-white z-20 max-w-[100%] md:max-w-3xl px-4">
              <h2 className="whitespace-nowrap text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-xl leading-tight">
                {s.title}
              </h2>

              {s.subtitle && (
                <p className="mt-3 whitespace-normal text-sm sm:text-base md:text-lg opacity-90 drop-shadow-lg">
                  {s.subtitle}
                </p>
              )}

              {s.cta && (
                <a
                  href={s.cta.href}
                  className="inline-block mt-6 px-5 py-3 bg-rose-600 rounded-full text-white font-medium shadow hover:scale-[1.02] transition-transform"
                >
                  {s.cta.label}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? "bg-rose-600 scale-110" : "bg-white/60 hover:bg-white"}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Prev/Next arrows (optional for better UX on mobile too) */}
      <button
        onClick={() => setIndex((idx) => (idx - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 md:p-3"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => setIndex((idx) => (idx + 1) % slides.length)}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 md:p-3"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
