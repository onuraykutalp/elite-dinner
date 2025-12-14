import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Elite Dinner Cruise Istanbul - Photo Gallery",
  description: "Browse our photo gallery showcasing the luxury Elite Dinner Cruise experience. View stunning images of our Bosphorus dinner cruise, Turkish night shows, delicious Turkish cuisine, and beautiful Istanbul views.",
  keywords: [
    "Elite Dinner Cruise gallery",
    "Istanbul cruise photos",
    "Bosphorus cruise images",
    "dinner cruise pictures",
    "Turkish night photos",
    "Istanbul tour gallery",
  ],
  openGraph: {
    title: "Gallery | Elite Dinner Cruise Istanbul - Photo Gallery",
    description: "Browse our photo gallery showcasing the luxury Elite Dinner Cruise experience. View stunning images of our Bosphorus dinner cruise, Turkish night shows, delicious Turkish cuisine, and beautiful Istanbul views.",
    url: "https://www.elitedinnercruise.com/gallery",
    images: [
      {
        url: "https://www.elitedinnercruise.com/gallery/Elite-Dinner-Cruise-01.jpg",
        width: 1200,
        height: 630,
        alt: "Elite Dinner Cruise Gallery",
      },
    ],
  },
  alternates: {
    canonical: "https://www.elitedinnercruise.com/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

