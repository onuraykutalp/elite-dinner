import { Footer } from "@/components/ui/Footer";
import { FullscreenSlider, Slide } from "@/components/ui/FullScreenSlider";
import { MainPageAboutUs } from "@/components/ui/MainPageAboutUs";
import { MenuCards } from "@/components/ui/MenuCards";
import { sub } from "framer-motion/client";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elite Dinner Cruise | Luxury Bosphorus Dinner Cruise Istanbul",
  description: "Experience the magic of Istanbul with Elite Dinner Cruise. Enjoy a luxury 3-hour Bosphorus cruise with full-course Turkish cuisine, unlimited drinks, Turkish night shows, and breathtaking views. Book your unforgettable dinner cruise experience today.",
  keywords: [
    "dinner cruise Istanbul",
    "Bosphorus dinner cruise",
    "luxury cruise Istanbul",
    "Turkish night cruise",
    "Istanbul dinner boat",
    "Bosphorus tour",
    "luxury dining cruise",
    "Istanbul cruise experience",
  ],
  openGraph: {
    title: "Elite Dinner Cruise | Luxury Bosphorus Dinner Cruise Istanbul",
    description: "Experience the magic of Istanbul with Elite Dinner Cruise. Enjoy a luxury 3-hour Bosphorus cruise with full-course Turkish cuisine, unlimited drinks, Turkish night shows, and breathtaking views.",
    url: "https://www.elitedinnercruise.com",
    images: [
      {
        url: "https://www.elitedinnercruise.com/slider/slider.jpeg",
        width: 1200,
        height: 630,
        alt: "Elite Dinner Cruise - Luxury Bosphorus Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Dinner Cruise | Luxury Bosphorus Dinner Cruise Istanbul",
    description: "Experience the magic of Istanbul with Elite Dinner Cruise. Enjoy a luxury 3-hour Bosphorus cruise with full-course Turkish cuisine, unlimited drinks, Turkish night shows, and breathtaking views.",
    images: ["https://www.elitedinnercruise.com/slider/slider.jpeg"],
  },
  alternates: {
    canonical: "https://www.elitedinnercruise.com",
  },
};

export default function Home() {

    const slidesData: Slide[] = [
    {
      id: 1,
      image: "/slider/slider.jpeg",
      title: "Turkish Night Magic",
      subtitle: "Experience the rhythm, colors, and joy of authentic Turkish dance.",
      cta: { label: "Book Now", href: "/tours" },
    },
    {
      id: 2,
      image: "/slider/slider-2.jpeg",
      title: "Chef’s Special Touches",
      subtitle: "Creative presentations with the freshest ingredients.",
      cta: { label: "See Menu", href: "/tours" },
    },
    {
      id: 3,
      image: "/slider/slider-2.jpg",
      title: "Enchanting Dance Nights",
      subtitle: "Be fascinated by different dance shows prepared by our animation team.",
      cta: { label: "Contact Us", href: "/contact" },
    },
  ];


      const menuItems = [
    {
      id: 1,
      name: "Fix Menu Dinner",
      subtitle: "Unlimited Soft Drinks",
      slug: "fix-menu-dinner",
      details: "Shared Table",
      tour: "Full Course Meal",
      drinks: "Unlimited Soft Drinks",
      alcohol: "",
      service: "Free Pick up Drop of",
      price: "€ 60 pp.",
      image: "/img/menu-chicken.jpg",
    },
    {
      id: 2,
      name: "Fix Menu Dinner",
      subtitle: "Unlimited Soft Drinks + 2 Alcoholic Drinks",
      slug: "fix-menu-dinner-with-alcohol",
      details: "Shared Table",
      tour: "Full Course Meal",
      drinks: "Unlimited Soft Drinks",
      alcohol: "2 Glasses of Alcohol",
      service: "Free Pick up Drop of",
      price: "€ 70 pp.",
      image: "/img/menu-fish.jpg",
    },
    {
      id: 3,
      name: "Vip Menu Dinner",
      subtitle: "Unlimited Soft Drinks",
      slug: "vip-menu-dinner",
      details: "Private Table Near Stage",
      tour: "Full Course Meal",
      drinks: "Unlimited Soft Drinks",
      alcohol: "",
      service: "Free Pick up Drop of",
      price: "€ 100 pp.",
      image: "/img/menu-meat.jpg",
    },
     {
      id: 4,
      name: "Vip Menu Dinner",
      subtitle: "Unlimited Soft Drinks + Unlimited Alcoholic Drinks",
      slug: "vip-menu-dinner-with-alcohol",
      details: "Private Table Near Stage",
      tour: "Full Course Meal",
      drinks: "Unlimited Soft Drinks",
      alcohol: "Unlimited Local Alcoholic Drinks",
      service: "Free Pick up Drop of",
      price: "€ 120 pp.",
      image: "/img/menu-salmon.jpg",
    },
  ];

  return (
    <main>
      <FullscreenSlider slides={slidesData} autoPlay autoPlayInterval={5000} />
      <MenuCards items={menuItems} />
      <MainPageAboutUs />
    </main>
  );
}
