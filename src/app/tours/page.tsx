import { PageBanner } from '@/components/ui/Banner';
import { MenuCards } from '@/components/ui/MenuCards'
import React from 'react'
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