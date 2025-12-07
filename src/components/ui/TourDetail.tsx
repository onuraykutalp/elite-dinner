"use client";

import { useState, useEffect } from "react";

export default function TourDetail({ tour }: { tour: any }) {
  const [activeImage, setActiveImage] = useState(tour.images?.[0] || tour.image);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ESC ile modal kapatma
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-16">

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/75 backdrop-blur-sm flex justify-center items-center z-[9999] p-6"
          onClick={() => setIsModalOpen(false)}
        >
          <img
            src={activeImage}
            className="max-w-8xl max-h-[90vh] rounded-2xl shadow-2xl object-contain animate-[zoomIn_0.2s_ease]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">

        <div>
          <h1 className="text-4xl font-extrabold mb-6 text-gray-900 tracking-tight">
            {tour.title}
          </h1>

          <div className="rounded-3xl overflow-hidden shadow-xl mb-4 cursor-pointer group relative">
            <img
              src={activeImage}
              className="w-full h-[400px] object-contain transition-all duration-300 group-hover:brightness-90"
              onClick={() => setIsModalOpen(true)}
            />

            <div className="absolute bottom-4 right-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all">
              Büyüt
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {tour.images?.map((img: string, index: number) => (
              <button
                key={index}
                onClick={() => setActiveImage(img)}
                className={`min-w-[100px] h-[70px] rounded-xl overflow-hidden border-2 transition-all ${
                  activeImage === img
                    ? "border-rose-600 scale-105"
                    : "border-transparent hover:scale-105"
                }`}
              >
                <img src={img} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          <p className="text-lg text-gray-700 leading-relaxed my-10">
            {tour.description}
          </p>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🍽️ {tour.menu.title}</h2>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <ul className="space-y-3">
                {tour.menu.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start text-gray-700 text-[15px]">
                    <span className="text-rose-500 mr-2 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🎭 {tour.program.title}</h2>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <ul className="space-y-3">
                {tour.program.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start text-gray-700 text-[15px]">
                    <span className="text-rose-500 mr-2 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-24 h-fit">
          <div className="bg-white shadow-xl rounded-3xl p-8 border border-gray-200">

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Booking Information</h3>

            <div className="space-y-4 text-gray-700">
              <p className="flex justify-between">
                <span className="font-medium">⏱ Duration:</span>
                <span>{tour.duration}</span>
              </p>

              <p className="flex justify-between">
                <span className="font-medium">🍹 Drinks:</span>
                <span>{tour.drinks}</span>
              </p>

              <p className="flex justify-between">
                <span className="font-medium">🚖 Service:</span>
                <span>{tour.service}</span>
              </p>

              <p className="flex justify-between text-xl font-bold text-rose-600 mt-6">
                <span>Total Price:</span>
                <span>{tour.price}</span>
              </p>
            </div>

            <button className="mt-8 w-full bg-rose-600 text-white py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-rose-700 transition-all">
              Book Now
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
