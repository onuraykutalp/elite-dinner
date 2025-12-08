"use client";

import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useState } from "react";
import { PageBanner } from "@/components/ui/Banner";

export default function ContactPage() {
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const sendEmail = (e: any) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                e.target,
                "YOUR_PUBLIC_KEY"
            )
            .then(
                () => {
                    setSent(true);
                    setLoading(false);
                    e.target.reset();
                },
                () => {
                    setLoading(false);
                }
            );
    };

    return (
        <>
            <PageBanner
                title="Contact"
                subtitle="Experience the elegance of our luxury dinner cruise"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Tours", href: "#" },
                ]}
            />
            <div className="max-w-7xl mx-auto px-0 py-20">

                {/* HERO */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >

                </motion.div>

                {/* GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* INFO CARD */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white shadow-xl rounded-3xl p-10 border border-gray-200"
                    >
                        <h2 className="text-3xl font-bold mb-6">Our Contact Information</h2>

                        <div className="space-y-8">

                            <div className="flex items-start space-x-4">
                                <Phone className="w-7 h-7 text-rose-600" />
                                <div>
                                    <p className="font-semibold text-gray-800">Phone</p>
                                    <p>+90 541 339 78 30</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <Mail className="w-7 h-7 text-rose-600" />
                                <div>
                                    <p className="font-semibold text-gray-800">E-mail</p>
                                    <a href="mailto:reservation@elitedinnercruise.com"><p>reservation@elitedinnercruise.com</p></a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <MapPin className="w-7 h-7 text-rose-600" />
                                <div>
                                    <p className="font-semibold text-gray-800">Address</p>
                                    <a
                                        href="https://maps.app.goo.gl/QBPkM4DEBJCDmd3q8"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-rose-400 transition"
                                    >
                                        <p>Omer Avni Mah. Meclis-i Mebusan Cd., 34000 Beyoglu/Istanbul</p>
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <Clock className="w-7 h-7 text-rose-600" />
                                <div>
                                    <p className="font-semibold text-gray-800">Working Hours</p>
                                    <p>Every day 09:00 – 23:00</p>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                    {/* FORM */}
                    <motion.form
                        onSubmit={sendEmail}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white shadow-xl rounded-3xl p-10 border border-gray-200 space-y-6"
                    >
                        <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-rose-600"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-rose-600"
                            required
                        />

                        <input
                            type="text"
                            name="phone"
                            placeholder="Your Phone Number"
                            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-rose-600"
                        />

                        <textarea
                            name="message"
                            rows={4}
                            placeholder="Your Message..."
                            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-rose-600"
                            required
                        />

                        <button
                            type="submit"
                            className="w-full bg-rose-600 text-white py-4 rounded-2xl text-lg font-semibold flex items-center justify-center gap-2 hover:bg-rose-700 transition-all"
                        >
                            {loading ? "Sending..." : "Send"} <Send size={18} />
                        </button>

                        {sent && (
                            <p className="text-green-600 text-center font-medium">
                                Your message has been sent successfully!
                            </p>
                        )}
                    </motion.form>

                </div>

                {/* MAP */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold mb-5">Our Location</h2>

                    <div className="rounded-3xl overflow-hidden h-[380px] shadow-md border">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12041.545491091696!2d28.9894256!3d41.0340731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab779e6e8b7b1%3A0x6e7e0e92ce40938e!2sOmer%20Avni%20Mah.%20Meclis-i%20Mebusan%20Cd.%2C%2034000%20Beyoglu%2FIstanbul!5e0!3m2!1str!2str!4v1718030000000!5m2!1str!2str"
                            width="100%"
                            height="100%"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            style={{ border: 0 }}
                        />
                    </div>

                </div>

                {/* WHATSAPP FLOATING BUTTON */}
                <a
                    href="https://wa.me/905413397830"
                    target="_blank"
                    className="fixed bottom-7 right-7 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all"
                >
                    <Phone className="w-6 h-6" />
                </a>
            </div>

        </>
    );
}
