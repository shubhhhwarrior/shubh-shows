import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Import Instagram and WhatsApp icons
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div whileHover={{ scale: 1.02 }}>
            <h3 className="text-lg font-semibold mb-4">About Us 🎭</h3>
            <p className="text-gray-400">
              Humors Hub brings you the best comedy entertainment in Amreli. 
              Join us for unforgettable nights of laughter and fun! ✨
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <h3 className="text-lg font-semibold mb-4">Quick Links 🔗</h3>
            <ul className="space-y-2">
              <li>
                <a href="/book-tickets" className="text-gray-400 hover:text-white transition-colors duration-300">
                  🎟️ Book Tickets
                </a>
              </li>
              <li>
                <a href="/book-tickets?type=comedian" className="text-gray-400 hover:text-white transition-colors duration-300">
                  🎤 Join as Comedian
                </a>
              </li>
              <li>
                <a href="/dashboard" className="text-gray-400 hover:text-white transition-colors duration-300">
                  📊 Dashboard
                </a>
              </li>
              <li>
                <Link
                  href="/policies"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  📜 Terms & Policies
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <h3 className="text-lg font-semibold mb-4">Contact Us 📞</h3>
            <ul className="space-y-2 text-gray-400">
              {/* Instagram link with icon */}
              <li>
                <a
                  href="https://www.instagram.com/the.humourshub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors duration-300"
                >
                  <FaInstagram size={20} /> {/* Instagram icon */}
                  Follow us on Instagram
                </a>
              </li>
              {/* WhatsApp link with icon */}
              <li>
                <a
                  href="https://chat.whatsapp.com/JrExMaZiT6F2LmylOuU8NL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors duration-300"
                >
                  <FaWhatsapp size={20} /> {/* WhatsApp icon */}
                  Contact Us on WhatsApp
                </a>
              </li>
              <li>📧 shubhammvaghela999@gmail.com</li>
            </ul>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
        >
          <p>© {new Date().getFullYear()} Humors Hub. All rights reserved. Made with ❤️</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
