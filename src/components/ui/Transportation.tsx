"use client";

import React from "react";
import { PageBanner } from "./Banner";

type LocationItem = {
    area: string;
    time: string;
};

const serviceData: LocationItem[] = [
    { area: "TOPKAPI - FINDIKZADE - AKSARAY", time: "Between 19:00 - 19:30" },
    { area: "LALELI - BEYAZIT", time: "Between 19:15 - 19:45" },
    { area: "SULTANAHMET", time: "Between 19:15 - 19:45" },
    { area: "SISLI - NISANTASI", time: "Between 19:15 - 19:45" },
    { area: "TEPEBASI - SISHANE", time: "Between 19:15 - 19:45" },
    { area: "TAKSIM - TALIMHANE - MACKA", time: "Between 19:30 - 20:00" },
    { area: "SIRKECI - KARAKOY", time: "Between 19:30 - 20:00" },
];

export function Transportation() {
    return (
        <>
            <PageBanner
                title="Transportation"
                subtitle="Experience the elegance of our luxury dinner cruise"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Transportation", href: "#" },
                ]}
            />

            <section className="bg-white py-20 sm:pt-20">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Başlık */}
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-6">
                        FREE SHUTTLE SERVICE (Pick Up & Drop Off)
                    </h2>

                    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                        Free Pick-up & Drop-off service available only from the locations listed below.
                        Due to traffic conditions, pick-ups may be delayed.
                    </p>

                    {/* TABLE / GRID */}
                    <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">

                        {/* Header */}
                        <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100 text-gray-800 font-semibold text-sm md:text-base">
                            <div className="py-4 px-6 border-b md:border-b-0 md:border-r border-gray-200 flex items-center">
                                <span className="mr-2">📍</span> LOCATION
                            </div>
                            <div className="py-4 px-6 border-b md:border-b-0 border-gray-200 flex items-center">
                                <span className="mr-2">⏰</span> TRANSPORTATION TIME
                            </div>
                        </div>

                        {/* Rows */}
                        <div>
                            {serviceData.map((item, index) => (
                                <div
                                    key={index}
                                    className={`grid grid-cols-1 md:grid-cols-2 text-gray-700 text-sm md:text-base ${
                                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                    }`}
                                >
                                    <div className="py-4 px-6 border-b md:border-b-0 md:border-r border-gray-200">
                                        {item.area}
                                    </div>
                                    <div className="py-4 px-6 border-b border-gray-200">
                                        {item.time}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Extra Information */}
                    <div className="mt-12 bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm max-w-3xl mx-auto">
                        <p className="text-gray-700 mb-2 text-center">
                            Please ask for pick-up possibility from other locations.
                        </p>
                        <p className="text-gray-700 mb-4 text-center">
                            There may be an extra charge for transportation from other locations.
                        </p>

                        <div className="text-center space-y-2 text-gray-800 font-medium">
                            <p>🚢 <strong>Departs From / Returns To:</strong> Kabatas Port</p>
                            <p>🕒 <strong>Departure / Arrival:</strong> 20:45 / 23:15</p>
                            <p>🎟️ <strong>Boarding Time:</strong> 19:45</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
