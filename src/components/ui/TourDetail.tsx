"use client";

import { useState, useEffect } from "react";

export default function TourDetail({ tour }: { tour: any }) {
  const [activeImage, setActiveImage] = useState(tour.images?.[0] || tour.image);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // NEW: booking form modal state
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // ESC ile modal kapatma
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
        setIsBookingOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

      {/* FULLSCREEN IMAGE MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-[9999] p-4 md:p-12"
          onClick={() => setIsModalOpen(false)}
        >
          <img
            src={activeImage}
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* ⭐ BOOKING FORM MODAL (NEW) ⭐ */}
      {isBookingOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[9999] p-4"
          onClick={() => setIsBookingOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Reservation Form</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl p-3"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-xl p-3"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-xl p-3"
              />
              <input
                type="date"
                className="w-full border rounded-xl p-3"
              />
              <input
                type="number"
                placeholder="Number of Guests"
                className="w-full border rounded-xl p-3"
              />

              <div className="bg-gray-100 p-3 rounded-xl text-gray-700 text-sm">
                Selected Tour: <strong>{tour.title}</strong>
              </div>

              <button
                type="button"
                className="w-full bg-rose-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-rose-700 transition"
              >
                Send Reservation Request
              </button>
            </form>

            <button
              className="mt-4 text-gray-500 text-sm underline w-full text-center"
              onClick={() => setIsBookingOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 lg:gap-12">

        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
            {tour.title}
          </h1>

          <div className="rounded-3xl overflow-hidden shadow-xl mb-5 cursor-pointer group relative">
            <img
              src={activeImage}
              className="w-full h-[260px] sm:h-[350px] md:h-[420px] object-contain bg-white"
              onClick={() => setIsModalOpen(true)}
            />
          </div>

          <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-3 scroll-smooth">
            {tour.images?.map((img: string, index: number) => (
              <button
                key={index}
                onClick={() => setActiveImage(img)}
                className={`min-w-[80px] sm:min-w-[110px] h-[60px] sm:h-[80px] rounded-xl overflow-hidden border-2 transition-all ${
                  activeImage === img
                    ? "border-rose-600 scale-105"
                    : "border-transparent hover:scale-105"
                }`}
              >
                <img src={img} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed my-10 sm:my-12">
            {tour.description}
          </p>

          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              🍽️ {tour.menu.title}
            </h2>
            <div className="bg-white border rounded-2xl p-5 shadow-sm">
              <ul className="space-y-3">
                {tour.menu.items.map((item: string, index: number) => (
                  <li
                    key={index}
                    className="flex text-gray-700 text-sm sm:text-base"
                  >
                    <span className="text-rose-500 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              🎭 {tour.program.title}
            </h2>
            <div className="bg-white border rounded-2xl p-5 shadow-sm">
              <ul className="space-y-3">
                {tour.program.items.map((item: string, index: number) => (
                  <li
                    key={index}
                    className="flex text-gray-700 text-sm sm:text-base"
                  >
                    <span className="text-rose-500 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:sticky lg:top-24 h-fit">
          <div className="bg-white shadow-xl rounded-3xl p-6 sm:p-8 border border-gray-200">

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
              Booking Information
            </h3>

            <div className="space-y-4 text-gray-700 text-base sm:text-lg">
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

            <button
              onClick={() => setIsBookingOpen(true)}
              className="mt-8 w-full bg-rose-600 text-white py-3 sm:py-4 rounded-full text-lg sm:text-xl font-semibold shadow-lg hover:bg-rose-700 transition"
            >
              Book Now
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}
