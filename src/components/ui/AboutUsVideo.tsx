"use client";

import { useState } from "react";

export function AboutUsVideo() {
  const [isOpen, setIsOpen] = useState(false);

  const videoId = "dQw4w9WgXcQ"; // Buraya YouTube video ID’sini koy

  return (
    <section id="about" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 drop-shadow-md">
            About EliteDinner
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            EliteDinner offers a premium dining experience combining gourmet flavors, elegant ambiance, and unforgettable memories.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image/Video Thumbnail */}
          <div className="relative h-80 md:h-[500px] rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
               onClick={() => setIsOpen(true)}>
            <img
              src="/img/about-us.jpg" // YouTube thumbnail veya custom image
              alt="EliteDinner Video"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <svg className="w-16 h-16 text-white opacity-90 hover:opacity-100 transition" fill="currentColor" viewBox="0 0 84 84">
                <circle cx="42" cy="42" r="42" fill="currentColor" className="opacity-60"/>
                <polygon points="34,28 34,56 58,42" fill="white"/>
              </svg>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Founded with a vision to redefine fine dining, EliteDinner brings together culinary artistry, exquisite flavors, and exceptional service.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Every dish is crafted with fresh, high-quality ingredients and a touch of creativity. Watch our story below.
            </p>
          </div>
        </div>

        {/* Video Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="EliteDinner Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-rose-500 transition"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
