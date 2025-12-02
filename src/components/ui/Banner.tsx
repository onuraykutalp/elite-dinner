"use client";

import Image from "next/image";
import Link from "next/link";

export function PageBanner({
  title,
  subtitle,
  breadcrumb = [],
}: {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative w-full h-[40vh] md:h-[55vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/img/istanbul.jpg"
        alt={title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>


      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-3 max-w-2xl text-base md:text-lg opacity-90 drop-shadow-md">
            {subtitle}
          </p>
        )}
      </div>
      
      {breadcrumb.length > 0 && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6">
          <nav className="text-white text-sm md:text-base flex flex-wrap items-center gap-2 justify-center">
            {breadcrumb.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="opacity-80 hover:opacity-100 transition font-medium"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="opacity-100 font-semibold">{item.label}</span>
                )}

                {index < breadcrumb.length - 1 && (
                  <span className="opacity-70">›</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      )}
    </section>
  );
}
