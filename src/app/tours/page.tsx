import { PageBanner } from '@/components/ui/Banner';
import { MenuCards } from '@/components/ui/MenuCards'
import React from 'react'
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


const page= () => {
  return (
   <>
   <PageBanner
                      title="Tours"
                      subtitle="Experience the elegance of our luxury dinner cruise"
                      breadcrumb={[
                          { label: "Home", href: "/" },
                          { label: "Tours", href: "#" },
                      ]}
                  />
   <MenuCards items={menuItems} />
   </>
  )
}

export default page