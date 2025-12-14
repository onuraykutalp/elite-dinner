import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Elite Dinner Cruise Istanbul",
  description: "Get in touch with Elite Dinner Cruise for reservations and inquiries. Contact us via phone, email, or visit our office in Beyoglu, Istanbul. We're available every day from 09:00 to 23:00.",
  keywords: [
    "Elite Dinner Cruise contact",
    "Istanbul cruise reservation",
    "dinner cruise booking",
    "Bosphorus cruise contact",
    "Istanbul tour booking",
  ],
  openGraph: {
    title: "Contact Us | Elite Dinner Cruise Istanbul",
    description: "Get in touch with Elite Dinner Cruise for reservations and inquiries. Contact us via phone, email, or visit our office in Beyoglu, Istanbul.",
    url: "https://www.elitedinnercruise.com/contact",
  },
  alternates: {
    canonical: "https://www.elitedinnercruise.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

