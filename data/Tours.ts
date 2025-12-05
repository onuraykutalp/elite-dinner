export type Tour = {
  title: string;
  duration: string;
  drinks: string;
  service: string;
  price: string;
  image: string;
  description: string;

  menu: {
    title: string;
    items: string[];
  };

  program: {
    title: string;
    items: string[];
  };
};

export const tours: Record<string, Tour> = {
  "vip-menu-dinner": {
    title: "VIP Menu Dinner",
    duration: "3 Hours",
    drinks: "Unlimited Soft Drinks + 2 Alcoholic Drinks",
    service: "Free Service",
    price: "€ 100 pp.",
    image: "/img/menu-1.jpg",
    description: "Special luxury dinner experience with a rich Turkish menu.",

    menu: {
      title: "Dinner Menu & Drinks",
      items: [
        "Cold Starters (Traditional Turkish Appetizers)",
        "Fresh Seasonal Salad",
        "ENTREE (Main Dish with 6 Options)",
        " – Meat Casserole with mushroom and mashed potatoes",
        " – Grilled Fish with fresh greens",
        " – Chicken Steak with rice and french fries",
        " – Meat Patty with mashed potatoes and cheese",
        " – Vegetarian Plate (sauteed vegetables)",
        " – Creamy Pasta",
        "Mixed Nuts",
        "Dessert (Baklava)",
        "Fruit",
        "Drinks: Unlimited coke, fanta, sprite, juice, tea, coffee + 2 alcoholic drinks",
      ],
    },

    program: {
      title: "Turkish Night Show Program",
      items: [
        "Whirling Dervish",
        "Turkish Gypsy Dance",
        "Belly Dancer Group Show",
        "Caucasian Dance",
        "Folk Dance Performance (Traditional Turkish Dances)",
        "Solo Belly Dancer",
        "Professional DJ Performance",
      ],
    },
  },

  "deluxe-dinner": {
    title: "Deluxe Dinner",
    duration: "2 Hours",
    drinks: "Unlimited Soft Drinks",
    service: "Free Service",
    price: "€ 80 pp.",
    image: "/img/menu-2.jpg",
    description: "A delicious Turkish dinner experience with an elegant atmosphere.",

    menu: {
      title: "Dinner Menu",
      items: [
        "Cold Starters",
        "Seasonal Salad",
        "2 Main Course Options",
        "Dessert",
        "Fruit Plate",
        "Unlimited Soft Drinks",
      ],
    },

    program: {
      title: "Night Show Program",
      items: [
        "Traditional Folk Dances",
        "Belly Dancer",
        "Group Dance Performance",
        "DJ Performance",
      ],
    },
  },

  "classic-dinner": {
    title: "Classic Dinner",
    duration: "1.5 Hours",
    drinks: "Fix Menu",
    service: "Free Service",
    price: "€ 60 pp.",
    image: "/img/menu-3.jpg",
    description: "Traditional flavors prepared with a classic Turkish dinner setting.",

    menu: {
      title: "Dinner Menu",
      items: [
        "Cold Starters",
        "Daily Soup",
        "1 Main Course Option",
        "Dessert",
        "Tea / Water",
      ],
    },

    program: {
      title: "Entertainment Program",
      items: [
        "Live Background Music",
        "Soft Cultural Performances",
      ],
    },
  },

  "premium-dinner": {
    title: "Premium Dinner",
    duration: "1.5 Hours",
    drinks: "Fix Menu",
    service: "Free Service",
    price: "€ 60 pp.",
    image: "/img/menu-4.jpg",
    description: "Premium-quality dinner accompanied by a relaxing environment.",

    menu: {
      title: "Dinner Menu",
      items: [
        "Cold Starters",
        "Fresh Salad",
        "Premium Main Course Selection",
        "Dessert",
        "Fruit Mix",
      ],
    },

    program: {
      title: "Entertainment Program",
      items: [
        "Soft Music",
        "Background Show",
      ],
    },
  },
};
