"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { motion, AnimatePresence } from "framer-motion";

export default function TourDetail({ tour }: { tour: any }) {
  const [activeImage, setActiveImage] = useState(tour.images?.[0] || tour.image);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    adults: "",
    children: "",
    infants: "",
    notes: "",
    hotelName: "",
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
        setIsBookingOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please verify that you are not a robot.");
      return;
    }

    setSending(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          user_name: formData.name,
          user_email: formData.email,
          user_phone: formData.phone,
          adult_count: formData.adults,
          child_count: formData.children,
          baby_count: formData.infants,
          tour_name: tour.mailTitle,
          tour_date: formData.date,
          special_notes: formData.notes,
          hotel_name: formData.hotelName,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        adults: "",
        children: "",
        infants: "",
        notes: "",
        hotelName: "",
      });
      setCaptchaValue(null);
    } catch (err) {
      console.error("EmailJS Error:", err);
      alert("Something went wrong. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* FULLSCREEN IMAGE MODAL */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-[9999] p-4 md:p-12"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.img
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.85 }}
                src={activeImage}
                alt={`${tour.title} - ${tour.subtitle} - Elite Dinner Cruise`}
                className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* BOOKING FORM MODAL */}
        <AnimatePresence>
          {isBookingOpen && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[9999] p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingOpen(false)}
            >
              <motion.div
                initial={{ y: 60, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 60, opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="
                  bg-white rounded-3xl shadow-2xl 
                  p-8 sm:p-10 
                  w-full max-w-3xl 
                  max-h-[88vh] overflow-y-auto
                  border border-gray-200
                "
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">
                  Reservation Form
                </h2>

                {success && (
                  <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-lg text-center">
                    Reservation request sent successfully!
                  </div>
                )}

                <form
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-col">
                    <label className="font-semibold mb-1">Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="border rounded-xl p-3 w-full"/>
                  </div>

                  <div className="flex flex-col">
                    <label className="font-semibold mb-1">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="border rounded-xl p-3 w-full"/>
                  </div>

                  <div className="flex flex-col">
                    <label className="font-semibold mb-1">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="border rounded-xl p-3 w-full"/>
                  </div>

                  <div className="flex flex-col">
                    <label className="font-semibold mb-1">Date</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required className="border rounded-xl p-3 w-full"/>
                  </div>

                  <div className="flex flex-col sm:col-span-2">
                    <label className="font-semibold mb-1">Hotel Name For Pick Up</label>
                    <input type="text" name="hotelName" value={formData.hotelName} onChange={handleChange} className="border rounded-xl p-3 w-full"/>
                  </div>

                  <div className="flex flex-col sm:col-span-2">
                    <label className="font-semibold mb-1">Special Requests</label>
                    <textarea rows={3} name="notes" value={formData.notes} onChange={(e)=>setFormData({...formData, notes: e.target.value})} className="border rounded-xl p-3 w-full"></textarea>
                  </div>

                  <div className="grid grid-cols-3 gap-4 sm:col-span-2">
                    <div className="flex flex-col">
                      <label className="font-semibold mb-1">Adults</label>
                      <input type="number" min="0" name="adults" value={formData.adults} onChange={handleChange} required className="border rounded-xl p-3"/>
                    </div>
                    <div className="flex flex-col">
                      <label className="font-semibold mb-1">Children</label>
                      <input type="number" min="0" name="children" value={formData.children} onChange={handleChange} className="border rounded-xl p-3"/>
                    </div>
                    <div className="flex flex-col">
                      <label className="font-semibold mb-1">Infants</label>
                      <input type="number" min="0" name="infants" value={formData.infants} onChange={handleChange} className="border rounded-xl p-3"/>
                    </div>
                  </div>

                  <div className="sm:col-span-2 bg-gray-100 p-3 rounded-xl text-gray-700 text-sm font-medium">
                    Selected Tour: <strong>{tour.mailTitle}</strong>
                  </div>

                  <div className="sm:col-span-2">
                    <ReCAPTCHA
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                      onChange={(value) => setCaptchaValue(value)}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="sm:col-span-2 mt-2 bg-rose-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-rose-700 transition"
                  >
                    {sending ? "Sending..." : "Send Reservation Request"}
                  </button>
                </form>

                <button className="mt-4 text-gray-500 text-sm underline w-full text-center" onClick={() => setIsBookingOpen(false)}>
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* REST OF THE PAGE — (SENDEKİ AYNI, DEĞİŞMEDİ) */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 lg:gap-12">
          <div>
            <motion.h1 initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{duration:0.4}} className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
              {tour.title}
            </motion.h1>

            <motion.h3 initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="text-2xl md:text-3xl font-semibold mb-8 text-rose-400">
              {tour.subtitle}
            </motion.h3>

            <motion.div
              className="rounded-3xl overflow-hidden shadow-xl mb-5 cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={activeImage}
                alt={`${tour.title} - ${tour.subtitle} - Elite Dinner Cruise`}
                className="w-full h-[320px] md:h-[430px] object-contain bg-white cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              />
            </motion.div>

            <div className="flex gap-4 overflow-x-auto pb-3">
              {tour.images?.map((img: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(img)}
                    aria-label={`View ${tour.title} image ${index + 1}`}
                    className={`min-w-[100px] h-[70px] rounded-xl overflow-hidden border-2 transition-all ${
                      activeImage === img ? "border-rose-600 scale-105" : "border-gray-200 hover:scale-105"
                    }`}
                  >
                    <img src={img} alt={`${tour.title} image ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
              ))}
            </div>

            <p className="text-lg text-gray-700 leading-relaxed my-12">
              {tour.description}
            </p>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">🍽️ {tour.menu.title}</h2>
              <div className="bg-white border rounded-2xl p-5 shadow-sm">
                <ul className="space-y-3">
                  {tour.menu.items.map((item: string, index: number) => (
                    <li key={index} className="flex text-gray-700 text-base">
                      <span className="text-rose-500 mr-2">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">🎭 {tour.program.title}</h2>
              <div className="bg-white border rounded-2xl p-5 shadow-sm">
                <ul className="space-y-3">
                  {tour.program.items.map((item: string, index: number) => (
                    <li key={index} className="flex text-gray-700 text-base">
                      <span className="text-rose-500 mr-2">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <motion.div initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} className="lg:sticky lg:top-24 h-fit">
            <div className="bg-white shadow-xl rounded-3xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Tour Highlights
              </h3>

              <div className="space-y-4 text-gray-700 text-lg">
                <p className="flex justify-between">
                  <span className="font-medium">⏱ Duration:</span>
                  <span>{tour.duration}</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">🍹 Drinks:</span>
                  <span>{tour.drinks}</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">🚖 Transfer:</span>
                  <span>{tour.service}</span>
                </p>
                <p className="flex justify-between text-rose-600 text-xl font-bold mt-6">
                  <span>Total Price:</span>
                  <span>{tour.price}</span>
                </p>
              </div>

              <button
                onClick={() => setIsBookingOpen(true)}
                className="mt-8 w-full bg-rose-600 text-white py-4 rounded-full text-xl font-semibold shadow-lg hover:bg-rose-700 transition"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
