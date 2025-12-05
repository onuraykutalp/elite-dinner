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
      name: "VIP Menu Dinner",
      slug: "vip-menu-dinner",
      details: "Details",
      tour: "Tour 3 Hours",
      drinks: "Unlimited Soft Drinks",
      service: "Free Service",
      price: "€ 100 pp.",
      image: "/img/menu-1.jpg", // public/img/menu klasörüne ekle
    },
    {
      id: 2,
      name: "Deluxe Dinner",
      slug: "deluxe-dinner",
      details: "Details",
      tour: "Tour 2 Hours",
      drinks: "Unlimited Soft Drinks",
      service: "Free Service",
      price: "€ 80 pp.",
      image: "/img/menu-2.jpg",
    },
    {
      id: 3,
      name: "Classic Dinner",
      slug: "classic-dinner",
      details: "Details",
      tour: "Tour 1.5 Hours",
      drinks: "Fix Menu",
      service: "Free Service",
      price: "€ 60 pp.",
      image: "/img/menu-3.jpg",
    },
     {
      id: 4,
      name: "Premium Dinner",
      slug: "premium-dinner",
      details: "Details",
      tour: "Tour 1.5 Hours",
      drinks: "Fix Menu",
      service: "Free Service",
      price: "€ 60 pp.",
      image: "/img/menu-4.jpg",
    },
  ];


  return (
    <>
      <FullscreenSlider slides={slidesData} autoPlay autoPlayInterval={5000} />
      <MainPageAboutUs />
      <MenuCards items={menuItems} />
    </>
  );
}
