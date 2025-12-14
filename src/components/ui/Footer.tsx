"use client";

import { Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#50589C] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/img/logo1.png" alt="Elite Dinner Cruise - Luxury Bosphorus Dinner Cruise Istanbul" className="h-16 mb-4 object-contain" />
            <p className="text-sm opacity-90">
              Elite Dinner Cruise is a premium fine dining experience offering gourmet flavors, elegant ambiance, and unforgettable memories.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-rose-400 transition">Home</a></li>
              <li><a href="/tours" className="hover:text-rose-400 transition">Tours</a></li>
              <li><a href="/gallery" className="hover:text-rose-400 transition">Gallery</a></li>
              <li><a href="/transportation" className="hover:text-rose-400 transition">Transportation</a></li>
              <li><a href="/contact" className="hover:text-rose-400 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Departure Location:<br/> Kabataş Motor İskelesi</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/WYD5sqtatDK7HTYD6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose-400 transition"
                  aria-label="View departure location on Google Maps"
                >
                   Click here for departure location on Google Maps
                </a>
              </li>
              <li>Email: info@elitedinnercruise.com</li>
              <li>Phone: +90 541 339 78 30</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/elitedinnercruise/" target="_blank" rel="noopener noreferrer" className="hover:text-rose-400 transition" aria-label="Follow us on Facebook"><i className="fab fa-facebook-f" aria-hidden="true"></i>Facebook</a>
              <a href="https://www.instagram.com/elitedinnercruise/" target="_blank" rel="noopener noreferrer" className="hover:text-rose-400 transition" aria-label="Follow us on Instagram"><i className="fab fa-instagram" aria-hidden="true"></i>Instagram</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm opacity-80">
          &copy; {new Date().getFullYear()} Elite Dinner Cruise. All rights reserved.
        </div>
      </div>
      
                <a
                    href="https://wa.me/905413397830"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact us on WhatsApp"
                    className="fixed bottom-7 right-7 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all"
                >
                    <Phone className="w-6 h-6" aria-hidden="true" />
                </a>
    </footer>
  );
}
