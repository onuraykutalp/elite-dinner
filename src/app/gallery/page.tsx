"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PageBanner } from "@/components/ui/Banner";

export default function Page() {
  const images = Array.from({ length: 33 }, (_, i) => `/gallery/Elite-Dinner-Cruise-${String(i + 1).padStart(2, "0")}.jpg`);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const nextImage = () => {
    setSelectedIndex((prev) => (prev! + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length);
  };

  return (
    <>
    <PageBanner
                    title="Gallery"
                    subtitle="Experience the elegance of our luxury dinner cruise"
                    breadcrumb={[
                        { label: "Home", href: "/" },
                        { label: "Gallery", href: "#" },
                    ]}
                />
    <main className="max-w-7xl mx-auto px-6 py-20">

      {/* GRID GALLERY */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.07 },
          },
        }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {images.map((src, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              show: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer overflow-hidden rounded-xl shadow-md"
            onClick={() => setSelectedIndex(i)}
            role="button"
            tabIndex={0}
            aria-label={`View Elite Dinner Cruise gallery image ${i + 1}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setSelectedIndex(i);
              }
            }}
          >
            <img
              src={src}
              alt={`Elite Dinner Cruise - Bosphorus dinner cruise experience image ${i + 1}`}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setSelectedIndex(null)}
          >
            {/* STOP PROPAGATION */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="relative max-w-4xl w-full px-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-10 right-0 text-white hover:text-rose-300 transition"
                aria-label="Close image gallery"
              >
                <X size={34} aria-hidden="true" />
              </button>

              {/* LEFT ARROW */}
              <button
                onClick={prevImage}
                className="absolute left-0 top-1/2 -translate-y-1/2 text-white hover:text-rose-300 transition"
                aria-label="Previous image"
              >
                <ChevronLeft size={45} aria-hidden="true" />
              </button>

              {/* IMAGE */}
              <img
                src={images[selectedIndex]}
                alt={`Elite Dinner Cruise - Bosphorus dinner cruise experience image ${selectedIndex + 1} of ${images.length}`}
                className="rounded-xl shadow-2xl w-full max-h-[80vh] object-contain"
              />

              {/* RIGHT ARROW */}
              <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:text-rose-300 transition"
                aria-label="Next image"
              >
                <ChevronRight size={45} aria-hidden="true" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
    </>
  );
}
