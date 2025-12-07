export type Tour = {
  title: string;
  duration: string;
  drinks: string;
  service: string;
  price: string;
  images: string[]; 
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
  "fix-menu-dinner": {
    title: "Fix Menu Dinner (Unlimited Soft Drinks)",
    duration: "3 Hours",
    drinks: "Unlimited Soft",
    service: "Free Service",
    price: "€ 60 pp.",
    images: [
      "/img/menu-chicken.jpg",
      "/img/menu-meat.jpg",
      "/img/menu-fish.jpg",
      "/img/menu-food.jpg",
      "/img/menu-pasta.jpg",
       "/img/menu-meze-mix-1.jpg",
    ],
    description: "Special luxury dinner experience with a rich Turkish menu.",

    menu: {
      title: "Dinner Menu & Drinks",
      items: [
        "Cold Starters (Traditional Turkish Appetizers)",
        "Fresh Seasonal Salad",
        "ENTREE (Main Dish with 5 Options)",
        " – Grilled Fish with fresh greens",
        " – Chicken Steak with rice and french fries",
        " – Meat Patty with mashed potatoes and cheese",
        " – Vegetarian Plate (sauteed vegetables)",
        " – Creamy Pasta",
        "DRINKS : Unlimited soft drinks such as coke, fanta, sprite, juice, tea, coffee"
      ],
    },

    program: {
      title: "Show Program",
      items: [
        "Whirling Dervish",
        "Shaman Dance",
        "Turkish Gypsy Dance",
        "Caucasian Dance",
        "Belly Dancer Group Show",
        "Folk Dance Performance (Traditional Turkish Dances)",
        "Belly Dancer",
        "Professional DJ Performance",
      ],
    },
  },

  "fix-menu-dinner-with-alcohol": {
    title: "Fix Menu Dinner (with 2 Glasses of Alcoholic Drinks)",
    duration: "2 Hours",
    drinks: "Unlimited Soft + 2 Alcoholic",
    service: "Free Service",
    price: "€ 70 pp.",
    images: [
      "/img/menu-fish.jpg",
      "/img/menu-meat.jpg",
      "/img/menu-chicken.jpg",
      "/img/menu-food.jpg",
      "/img/menu-pasta.jpg",
      "/img/menu-meze-mix-1.jpg",
    ],
    description: "A delicious Turkish dinner experience with an elegant atmosphere.",

    menu: {
      title: "Dinner Menu",
      items: [
        "Cold Starters (Traditional Turkish Appetizers)",
        "Fresh Seasonal Salad",
        "ENTREE (Main Dish with 5 Options)",
        "Grilled Fish with fresh greens",
        "Chicken Steak with rice and french fries",
        "Meat Patty with mashed potatoes and cheese",
        "Vegetarian Plate (sauteed vegetables)",
        "Creamy Pasta",
        "DRINKS : Unlimited soft drinks such as coke, fanta, sprite, juice, tea, coffee + 2 Glasses of local alcoholic drinks (wine, raki, beer)",
        "Import drinks are not included and available with an extra charge on the boat."
      ],
    },

    program: {
      title: "Turkish Night Show Program",
      items: [
        "Whirling Dervish",
        "Shaman Dance",
        "Turkish Gypsy Dance",
        "Caucasian Dance",
        "Belly Dancer Group Show",
        "Folk Dance Performance",
        "Belly Dancer",
        "Professional DJ Performance",
      ],
    },
  },

  "vip-menu-dinner": {
    title: "Vip Menu Dinner (Unlimited Soft Drinks)",
    duration: "2 Hours",
    drinks: "Unlimited Soft",
    service: "Free Service",
    price: "€ 100 pp.",
    images: [
      "/img/menu-meat.jpg",
      "/img/menu-salmon.jpg",
      "/img/menu-fish.jpg",
      "/img/menu-fruit.jpg",
      "/img/menu-meze-mix.jpg",
    ],
    description: "Traditional flavors prepared with a classic Turkish dinner setting.",

    menu: {
      title: "Dinner Menu",
      items: [
        "Cold Starters (Traditional Turkish Appetizers)",
        "Fresh Seasonal Salad",
        "Main Dish with 7 options",
        " – Meat Casserole with mushroom and mashed potatoes",
        " – Grilled Salmon Fish served with sea beans",
        " – Grilled Fish with fresh greens",
        " – Chicken Steak with rice and french fries",
        " – Meat Patty with mashed potatoes and cheese",
        " – Vegetarian Plate (sauteed vegetables)",
        " – Beef Steak with mashed potatoes",
        " – Creamy Pasta",
        "Mixed Nuts",
        "Dessert",
        "Fruit Plate",
        "DRINKS : Unlimited soft drinks",
        "Children 0–2 FREE"
      ],
    },

    program: {
      title: "Turkish Night Show Program",
      items: [
        "Whirling Dervish",
        "Shaman Dance",
        "Turkish Gypsy Dance",
        "Caucasian Dance",
        "Belly Dancer Group Show",
        "Folk Dance Performance",
        "Belly Dancer",
        "Professional DJ Performance",
      ],
    },
  },

  "vip-menu-dinner-with-alcohol": {
    title: "Vip Menu Dinner (with 2 Glasses of Alcoholic Drinks)",
    duration: "2 Hours",
    drinks: "Unlimited Soft + 2 Alcoholic",
    service: "Free Service",
    price: "€ 120 pp.",
    images: [
      "/img/menu-salmon.jpg",
      "/img/menu-meat.jpg",
      "/img/menu-fish.jpg",
      "/img/menu-fruit.jpg",
      "/img/menu-meze-mix.jpg",
    ],
    description: "Premium-quality dinner accompanied by a relaxing environment.",

    menu: {
      title: "Dinner Menu",
      items: [
        "Cold Starters (Traditional Turkish Appetizers)",
        "Fresh Seasonal Salad ",
        "Main Dish with 7 options",
        " – Meat Casserole with mushroom and mashed potatoes",
        " – Grilled Salmon Fish",
        " – Grilled Fish",
        " – Chicken Steak",
        " – Meat Patty",
        " – Vegetarian Plate",
        " – Beef Steak",
        " – Creamy Pasta",
        "Mixed Nuts",
        "Dessert",
        "Fruit Plate",
        "DRINKS : Unlimited soft drinks + 2 glasses of alcoholic drinks",
        "Import drinks are extra",
        "Children 0–2 FREE"
      ],
    },

    program: {
      title: "Show Program",
      items: [
        "Whirling Dervish",
        "Shaman Dance",
        "Turkish Gypsy Dance",
        "Caucasian Dance",
        "Belly Dancer Group Show",
        "Folk Dance Performance",
        "Belly Dancer",
        "Professional DJ Performance",
      ],
    },
  },
};

