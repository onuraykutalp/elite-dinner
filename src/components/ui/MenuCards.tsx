"use client";

import React from "react";
import Link from "next/link";
import { BiFoodMenu, BiSolidDrink } from "react-icons/bi";
import { MdRoomService } from "react-icons/md";

type MenuItem = {
  id: number | string;
  slug: string;
  name: string;
  details: string;
  tour: string;
  drinks: string;
  service: string;
  price: string;
  image: string;
};

type MenuCardsProps = {
  items: MenuItem[];
};

export function MenuCards({ items }: MenuCardsProps) {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
          Our Menu Options
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.details}</p>

                  {/* Stylish parameter list */}
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700 text-sm">
                      <BiSolidDrink className="h-5 w-5 mr-2 text-rose-600" />
                      {item.tour}
                    </li>

                    <li className="flex items-center text-gray-700 text-sm">
                      <BiFoodMenu className="h-5 w-5 mr-2 text-rose-600" />
                      {item.drinks}
                    </li>

                    <li className="flex items-center text-gray-700 text-sm">
                      <MdRoomService className="h-5 w-5 mr-2 text-rose-600" />
                      {item.service}
                    </li>
                  </ul>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">{item.price}</span>

                  <Link
                    href={`/tours/${item.slug}`}
                    className="px-4 py-2 bg-[#fe7695] text-white rounded-full text-sm font-medium hover:bg-rose-500 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
