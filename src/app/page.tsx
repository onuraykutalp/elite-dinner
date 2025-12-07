import { Footer } from "@/components/ui/Footer";
import { FullscreenSlider, Slide } from "@/components/ui/FullScreenSlider";
import { MainPageAboutUs } from "@/components/ui/MainPageAboutUs";
import { MenuCards } from "@/components/ui/MenuCards";
import Image from "next/image";

export default function Home() {

    const slidesData: Slide[] = [
    {
      id: 1,
      image: "/slider/slider-1.jpeg",
      title: "Premium Fine Dining",
      subtitle: "Gourmet flavors, elegant atmosphere, and an unforgettable experience.",
      cta: { label: "Book Now", href: "#booking" },
    },
    {
      id: 2,
      image: "/slider/slider-2.jpeg",
      title: "Chef’s Special Touches",
      subtitle: "Creative presentations with the freshest ingredients.",
      cta: { label: "See Menu", href: "#menu" },
    },
    {
      id: 3,
      image: "/slider/slider-3.jpeg",
      title: "Luxury & Elegance",
      subtitle: "Elite Dinner is more than a meal — it's an experience.",
      cta: { label: "Contact Us", href: "#contact" },
    },
  ];


      const menuItems = [
    {
      id: 1,
      name: "Fix Menu Dinner (Unlimited Soft Drinks)",
      slug: "fix-menu-dinner",
      details: "Details",
      tour: "Tour 2 Hours",
      drinks: "Unlimited Soft Drinks",
      service: "Free Service",
      price: "€ 60 pp.",
      image: "/img/menu-chicken.jpg",
    },
    {
      id: 2,
      name: "Fix Menu Dinner (with 2 Glasses of Alcoholic Drinks)",
      slug: "fix-menu-dinner-with-alcohol",
      details: "Details",
      tour: "Tour 2 Hours",
      drinks: "Unlimited Soft Drinks + 2 Alcoholic Drinks",
      service: "Free Service",
      price: "€ 70 pp.",
      image: "/img/menu-fish.jpg",
    },
    {
      id: 3,
      name: "Vip Menu Dinner (Unlimited Soft Drinks)",
      slug: "vip-menu-dinner",
      details: "Details",
      tour: "Tour 2 Hours",
      drinks: "Unlimited Soft Drinks",
      service: "Free Service",
      price: "€ 100 pp.",
      image: "/img/menu-meat.jpg",
    },
     {
      id: 4,
      name: "Vip Menu Dinner (with 2 Glasses of Alcoholic Drinks)",
      slug: "vip-menu-dinner-with-alcohol",
      details: "Details",
      tour: "Tour 2 Hours",
      drinks: "Unlimited Soft Drinks + 2 Alcoholic Drinks",
      service: "Free Service",
      price: "€ 120 pp.",
      image: "/img/menu-salmon.jpg",
    },
  ];


  return (
    <>
      <FullscreenSlider slides={slidesData} autoPlay autoPlayInterval={5000} />
      <MenuCards items={menuItems} />
      <MainPageAboutUs />
    </>
  );
}
