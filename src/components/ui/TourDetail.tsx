"use client";

export default function TourDetail({ tour }: { tour: any }) {
  return (
    <div className="max-w-7xl mx-auto py-16">
      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">

        {/* LEFT CONTENT */}
        <div>
          {/* Title */}
          <h1 className="text-4xl font-extrabold mb-6 text-gray-900 tracking-tight">
            {tour.title}
          </h1>

          {/* Image */}
          <div className="rounded-3xl overflow-hidden shadow-xl mb-10">
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-[350px] object-cover"
            />
          </div>

          {/* Description */}
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            {tour.description}
          </p>

          {/* MENU SECTION */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              🍽️ {tour.menu.title}
            </h2>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <ul className="space-y-3">
                {tour.menu.items.map((item: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-700 text-[15px]"
                  >
                    <span className="text-rose-500 mr-2 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* PROGRAM SECTION */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              🎭 {tour.program.title}
            </h2>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <ul className="space-y-3">
                {tour.program.items.map((item: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-700 text-[15px]"
                  >
                    <span className="text-rose-500 mr-2 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR — STICKY BOX */}
        <div className="lg:sticky lg:top-24 h-fit">
          <div className="bg-white shadow-xl rounded-3xl p-8 border border-gray-200">

            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Booking Information
            </h3>

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
