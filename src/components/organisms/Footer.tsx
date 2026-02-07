import {
  Facebook,
  Instagram,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-[#3b2a23] via-[#5a3a2e] to-[#3b2a23] text-[#fdfbf9]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-3xl font-serif text-[#d4af37]">
              Hiru Sandu
            </h2>
            <p className="text-sm text-[#fdfbf9]/80 leading-relaxed">
              Luxury Sri Lankan bridal and traditional fashion, crafted with
              heritage and elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-serif text-lg text-[#d4af37]">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {["Home", "Collections", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(" ", "")}`
                    }
                    className="group relative inline-block text-[#fdfbf9]/75
                               transition-all duration-300
                               hover:text-[#d4af37]"
                  >
                    {item}
                    <span
                      className="absolute left-0 -bottom-1 h-px w-0 bg-[#d4af37]
                                 transition-all duration-300 group-hover:w-full"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-serif text-lg text-[#d4af37]">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-[#fdfbf9]/80">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-1 opacity-70" />
                <span>123 Galle Road, Colombo 03, Sri Lanka</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 opacity-70" />
                <span>+94 77 123 4567</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 opacity-70" />
                <span>info@hirusandubridal.lk</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 font-serif text-lg text-[#d4af37]">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {[
                { href: "https://facebook.com", Icon: Facebook },
                { href: "https://instagram.com", Icon: Instagram },
                { href: "https://wa.me/94771234567", Icon: MessageCircle },
              ].map(({ href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-11 w-11 items-center justify-center rounded-full
                             bg-[#fdfbf9]/10
                             transition-all duration-300
                             hover:bg-[#d4af37]
                             hover:scale-110"
                >
                  <Icon className="h-5 w-5 text-[#fdfbf9] group-hover:text-[#3b2a23]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-[#fdfbf9]/20 pt-6 text-center text-sm text-[#fdfbf9]/60">
          © 2026 Hiru Sandu Bridal. All rights reserved. Handcrafted with tradition.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
