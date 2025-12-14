export type Tour = {
  title: string;
  subtitle: string;
  mailTitle?: string;
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
    title: "Fix Menu Dinner",
    subtitle: "Unlimited Soft Drinks",
    mailTitle:"Fix Menu Dinner V2",
    duration: "3 Hours",
    drinks: "Unlimited Soft",
    service: "Free Shuttle",
    price: "€ 60 pp.",
    images: [
      "/img/menu-fish.jpg",
      "/img/menu-chicken.jpg",
      "/img/menu-food.jpg",
      "/img/menu-pasta.jpg",
       "/img/menu-meze-mix-1.jpg",
    ],
    description: "Our friendly, experienced team will serve you during the night and you will have the opportunity to explore the Bosphorus more closely with the departure of our ship from the pier. While you are exploring the Bosphorus shores of Istanbul, the hidden capital of the world, you will also be amazed by the different dance shows prepared by our animation team while discovering the flavors of the rich Turkish cuisine.",

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
    title: "Fix Menu Dinner",
    subtitle: "Unlimited Soft Drinks & 2 Alcoholic Drinks",
    mailTitle:"Fix Menu Dinner V1",
    duration: "3 Hours",
    drinks: "2 Glass of Alcoholic",
    service: "Free Shuttle",
    price: "€ 70 pp.",
    images: [
      "/img/menu-fish.jpg",
      "/img/menu-chicken.jpg",
      "/img/menu-food.jpg",
      "/img/menu-pasta.jpg",
      "/img/menu-meze-mix-1.jpg",
    ],
    description: "Our friendly, experienced team will serve you during the night and you will have the opportunity to explore the Bosphorus more closely with the departure of our ship from the pier. While you are exploring the Bosphorus shores of Istanbul, the hidden capital of the world, you will also be amazed by the different dance shows prepared by our animation team while discovering the flavors of the rich Turkish cuisine.",

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
        "DRINKS : Unlimited soft drinks such as coke, fanta, sprite, juice, tea, coffee + 2 Glasses of local alcoholic drinks (wine, raki, beer, vodka, gin)",
        "Import drinks are not included and available with an extra charge on the boat. (such as whiskey, tequila, champagne, cognac etc.)"
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
    title: "Vip Menu Dinner",
    subtitle: "Unlimited Soft Drinks",
    mailTitle:"Vip Menu Dinner V2",
    duration: "3 Hours",
    drinks: "Unlimited Soft",
    service: "Free Shuttle",
    price: "€ 100 pp.",
    images: [
      "/img/menu-meat.jpg",
      "/img/menu-salmon.jpg",
      "/img/menu-fish.jpg",
      "/img/menu-fruit.jpg",
      "/img/menu-meze-mix.jpg",
    ],
    description: "Our friendly, experienced team will serve you during the night and you will have the opportunity to explore the Bosphorus more closely with the departure of our ship from the pier. While you are exploring the Bosphorus shores of Istanbul, the hidden capital of the world, you will also be amazed by the different dance shows prepared by our animation team while discovering the flavors of the rich Turkish cuisine.",

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
        " – Creamy Pasta",
        "Mixed Nuts",
        "Dessert",
        "Fruit Plate",
        "DRINKS : Unlimited soft drinks such as coke, fanta, sprite, juice, tea, coffee",
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
    title: "Vip Menu Dinner",
    subtitle: "Unlimited Soft Drinks & Unlimited Local Alcoholic Drinks",
    mailTitle:"Vip Menu Dinner V1",
    duration: "3 Hours",
    drinks: "Unlimited Alcoholic",
    service: "Free Shuttle",
    price: "€ 120 pp.",
    images: [
      "/img/menu-salmon.jpg",
      "/img/menu-meat.jpg",
      "/img/menu-fish.jpg",
      "/img/menu-fruit.jpg",
      "/img/menu-meze-mix.jpg",
    ],
    description: "Our friendly, experienced team will serve you during the night and you will have the opportunity to explore the Bosphorus more closely with the departure of our ship from the pier. While you are exploring the Bosphorus shores of Istanbul, the hidden capital of the world, you will also be amazed by the different dance shows prepared by our animation team while discovering the flavors of the rich Turkish cuisine.",

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
        " – Creamy Pasta",
        "Mixed Nuts",
        "Dessert",
        "Fruit Plate",
        "DRINKS : Unlimited soft drinks such as coke, fanta, sprite, juice, tea, coffee",
        "Unlimited local alcoholic drinks (includes wine, raki, beer, vodka, gin)",
        "Import drinks are not included and available with an extra charge on the boat. (such as whiskey, tequila, champagne, cognac etc.)"
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

