import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transportation & Shuttle Service | Elite Dinner Cruise Istanbul",
  description: "Free shuttle service (pick-up & drop-off) available from Topkapi, Fındıkzade, Aksaray, Laleli, Beyazit, Sultanahmet, Şişli, Nişantaşı, Tepebaşı, Şişhane, Taksim, Talimhane, Maçka, Sirkeci, and Karakoy. Pick-up times between 19:00-20:00.",
  keywords: [
    "Istanbul cruise shuttle service",
    "free transportation dinner cruise",
    "dinner cruise pick up",
    "Bosphorus cruise transportation",
    "Istanbul tour shuttle",
    "dinner cruise drop off",
  ],
  openGraph: {
    title: "Transportation & Shuttle Service | Elite Dinner Cruise Istanbul",
    description: "Free shuttle service (pick-up & drop-off) available from Topkapi, Fındıkzade, Aksaray, Laleli, Beyazit, Sultanahmet, Şişli, Nişantaşı, Tepebaşı, Şişhane, Taksim, Talimhane, Maçka, Sirkeci, and Karakoy.",
    url: "https://www.elitedinnercruise.com/transportation",
  },
  alternates: {
    canonical: "https://www.elitedinnercruise.com/transportation",
  },
};

export default function TransportationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

