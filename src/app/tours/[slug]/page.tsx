import TourDetail from "@/components/ui/TourDetail";
import { tours } from "../../../../data/Tours";
import { PageBanner } from "@/components/ui/Banner";
import type { Metadata } from "next";

export function generateStaticParams() {
  return [
    { slug: "fix-menu-dinner" },
    { slug: "fix-menu-dinner-with-alcohol" },
    { slug: "vip-menu-dinner" },
    { slug: "vip-menu-dinner-with-alcohol" },
  ];
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const tour = tours[slug as keyof typeof tours];

  if (!tour) {
    return {
      title: "Tour Not Found | Elite Dinner Cruise",
    };
  }

  const title = `${tour.title} - ${tour.subtitle} | Elite Dinner Cruise`;
  const description = `${tour.description} Price: ${tour.price}. Duration: ${tour.duration}. Includes: ${tour.drinks} drinks, ${tour.service} service.`;
  const url = `https://www.elitedinnercruise.com/tours/${slug}`;
  const image = tour.images[0] 
    ? `https://www.elitedinnercruise.com${tour.images[0]}`
    : "https://www.elitedinnercruise.com/img/logo1.png";

  return {
    title,
    description,
    keywords: [
      tour.title.toLowerCase(),
      "dinner cruise",
      "Bosphorus cruise",
      "Istanbul dinner",
      "Turkish night",
      tour.price,
      "luxury dining",
    ],
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${tour.title} - Elite Dinner Cruise`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}


export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;

  const tour = tours[slug as keyof typeof tours];

  if (!tour) {
    return <div className="p-20 text-center">Tour not found</div>;
  }

  return (
    <main>
      <PageBanner
                      title="Tours"
                      subtitle="Experience the elegance of our luxury dinner cruise"
                      breadcrumb={[
                          { label: "Home", href: "/" },
                          { label: "Tours", href: "/tours" },
                      ]}
                  />
      <TourDetail tour={tour} />
    </main>
  );
}
