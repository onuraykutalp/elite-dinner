import { PageBanner } from '@/components/ui/Banner';
import { MenuCards } from '@/components/ui/MenuCards'
import React from 'react'
const menuItems = [
    {
      id: 1,
      name: "Fix Menu Dinner",
      subtitle: "Unlimited Soft Drinks",
      slug: "fix-menu-dinner",
      details: "Details",
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
      details: "Details",
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
      details: "Details",
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
      details: "Details",
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