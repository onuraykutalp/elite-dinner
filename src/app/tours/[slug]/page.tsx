import TourDetail from "@/components/ui/TourDetail";
import { tours } from "../../../../data/Tours";
import { PageBanner } from "@/components/ui/Banner";

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;

  const tour = tours[slug as keyof typeof tours];

  if (!tour) {
    return <div className="p-20 text-center">Tour not found</div>;
  }

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
      <TourDetail tour={tour} />
    </>
  );
}
