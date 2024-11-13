import Link from "next/link";
import { StoreButton } from "./StoreButton";
import {
  FaFacebook,
  FaInstagram,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <footer className="bg-[#001F1A] text-white">
      <div className="relative">
        <AnimatePresence>
          {isMapOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "60vh" }}
              exit={{ height: 0 }}
              className="w-full overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12420.19196989!2d-77.03687532243326!3d38.90363890806837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bcdecbb1df%3A0x715969d86d0b76bf!2sWashington%2C%20DC%2020005!5e0!3m2!1sen!2sus!4v1647081546321!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Google Map"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Map View Button - Now positioned absolutely */}
        <div
          className={`absolute left-0 right-0 z-10 flex justify-center ${isMapOpen ? "top-4" : "py-6 border-b border-white/10"}`}
        >
          <button
            className="flex items-center gap-2 text-white/80 hover:text-white bg-[#001F1A] px-4 py-2 rounded-full"
            onClick={() => setIsMapOpen(!isMapOpen)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            View Address on Map
            {isMapOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-14">
        {/* Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          {/* Left Column - Navigation Links and App Store */}
          <div className="space-y-8">
            <nav className="flex gap-8">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <Link href="/about" className="hover:text-primary">
                About Us
              </Link>
              <Link href="/contacts" className="hover:text-primary">
                Contacts
              </Link>
              <Link href="/faq" className="hover:text-primary">
                FAQ
              </Link>
            </nav>

            <div className="space-y-4">
              <p className="text-sm">Get The App</p>
              <div className="flex gap-4">
                <StoreButton store="google" href="#" />
                <StoreButton store="apple" href="#" />
              </div>
            </div>
          </div>

          {/* Center Column - Empty for spacing */}
          <div></div>

          {/* Right Column - Contact Info */}
          <div className="text-right space-y-2">
            <p>Washington, DC 20005, USA</p>
            <p>+1 125 1234 125</p>
            <p>info@weede.io</p>
            <div className="flex gap-4 justify-end pt-6">
              <Link href="#" className="text-white/60 hover:text-white">
                <FaFacebook size={20} />
              </Link>
              <Link href="#" className="text-white/60 hover:text-white">
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-white/10 gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/terms"
              className="text-sm text-white/60 hover:text-white"
            >
              Terms and Conditions
            </Link>
            <span className="text-white/60">||</span>
            <Link
              href="/privacy"
              className="text-sm text-white/60 hover:text-white"
            >
              Privacy Policy
            </Link>
          </div>

          <p className="text-sm text-white/60">
            © 2024 Weede || All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
