"use client";

export function Footer() {
  return (
    <footer className="bg-[#50589C] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/img/logo1.png" alt="EliteDinner Logo" className="h-16 mb-4 object-contain" />
            <p className="text-sm opacity-90">
              EliteDinner is a premium fine dining experience offering gourmet flavors, elegant ambiance, and unforgettable memories.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#menu" className="hover:text-rose-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-rose-400 transition">Gallery</a></li>
              <li><a href="#booking" className="hover:text-rose-400 transition">Transport</a></li>
              <li><a href="#contact" className="hover:text-rose-400 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Ömer Avni, Meclis-i Mebusan Cd., 34000 Beyoğlu</li>
              <li>Email: info@elitedinnercruise.com</li>
              <li>Phone: +90 541 339 78 30</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-rose-400 transition"><i className="fab fa-facebook-f"></i>Facebook</a>
              <a href="#" className="hover:text-rose-400 transition"><i className="fab fa-instagram"></i>Instagram</a>
              <a href="#" className="hover:text-rose-400 transition"><i className="fab fa-twitter"></i>Twitter</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm opacity-80">
          &copy; {new Date().getFullYear()} EliteDinner. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
