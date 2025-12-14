import { PageBanner } from '@/components/ui/Banner';
import { MenuCards } from '@/components/ui/MenuCards'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tours & Packages | Elite Dinner Cruise Istanbul",
  description: "Choose from our premium dinner cruise packages: Fix Menu Dinner (€60-€70) or VIP Menu Dinner (€100-€120). All packages include full-course Turkish cuisine, unlimited drinks, Turkish night shows, and free shuttle service. Book your Bosphorus cruise experience today.",
  keywords: [
    "dinner cruise packages",
    "Istanbul cruise tours",
    "Bosphorus dinner packages",
    "fix menu dinner cruise",
    "VIP dinner cruise",
    "Istanbul tour packages",
    "dinner cruise prices",
  ],
  openGraph: {
    title: "Tours & Packages | Elite Dinner Cruise Istanbul",
    description: "Choose from our premium dinner cruise packages: Fix Menu Dinner (€60-€70) or VIP Menu Dinner (€100-€120). All packages include full-course Turkish cuisine, unlimited drinks, Turkish night shows, and free shuttle service.",
    url: "https://www.elitedinnercruise.com/tours",
    images: [
      {
        url: "https://www.elitedinnercruise.com/img/menu-chicken.jpg",
        width: 1200,
        height: 630,
        alt: "Elite Dinner Cruise - Tour Packages",
      },
    ],
  },
  alternates: {
    canonical: "https://www.elitedinnercruise.com/tours",
  },
};

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


const page= () => {
  return (
   <main>
   <PageBanner
                      title="Tours"
                      subtitle="Experience the elegance of our luxury dinner cruise"
                      breadcrumb={[
                          { label: "Home", href: "/" },
                          { label: "Tours", href: "#" },
                      ]}
                  />
   <MenuCards items={menuItems} />
   </main>
  )
}

export default page