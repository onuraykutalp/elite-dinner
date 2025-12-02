"use client";

import React from "react";
import { PageBanner } from "./Banner";

type LocationItem = {
    area: string;
    time: string;
};

const serviceData: LocationItem[] = [
    { area: "MERTER – TOPKAPI – ZEYTİNBURNU", time: "18.45 – 19.15" },
    { area: "FINDIKZADE – AKSARAY – LALELİ – BEYAZIT", time: "19.00 – 19.30" },
    { area: "SULTANAHMET", time: "19.15 – 19.45" },
    { area: "ŞİŞLİ – NİŞANTAŞI", time: "19.15 – 19.45" },
    { area: "TEPEBAŞI – ŞİŞHANE", time: "19.15 – 19.45" },
    { area: "TAKSİM – TALİMHANE – MAÇKA", time: "19.30 – 20.00" },
    { area: "SİRKECİ – KARAKÖY", time: "19.30 – 20.00" },
    { area: "BEŞİKTAŞ – MECİDİYEKÖY", time: "19.30 – 20.00" },
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

                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-6">
                        Free Transportation
                    </h2>
                    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                        The complimentary pick-up and drop-off service is only available from the locations listed below.
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
                                    className={`grid grid-cols-1 md:grid-cols-2 text-gray-700 text-sm md:text-base ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
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

                </div>
            </section>
        </>
    );
}
