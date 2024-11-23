/**
 * @copyright (c) 2024 - Present
 * @author github.com/KunalG932
 * @license MIT
 */

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon

export default function Home() {
  const { data: session } = useSession();
  const [venueStatus, setVenueStatus] = useState<{
    totalApproved: number;
    isFull: boolean;
  }>({ totalApproved: 0, isFull: false });

  useEffect(() => {
    const fetchVenueStatus = async () => {
      try {
        const res = await fetch('/api/bookings/venue-status');
        const data = await res.json();
        if (!res.ok) throw new Error(data.message);
        setVenueStatus(data);
      } catch (err) {
        console.error('Failed to fetch venue status:', err);
      }
    };

    fetchVenueStatus();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100">
      <Navbar />

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-purple-700 to-indigo-800 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200"
            >
              Stand Up Evening 🎭
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 text-purple-100"
            >
              Join us for an unforgettable night of laughter! ✨
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {session ? (
                <Link
                  href="/book-tickets"
                  className="inline-block bg-white text-purple-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Book Your Tickets Now 🎟️
                </Link>
              ) : (
                <Link
                  href="/auth/login"
                  className="inline-block bg-white text-purple-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Sign in to Book Tickets 🎫
                </Link>
              )}

              {/* WhatsApp Button */}
              <div className="mt-4">
                <a
                  href="https://chat.whatsapp.com/JrExMaZiT6F2LmylOuU8NL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <FaWhatsapp className="inline-block text-2xl mr-2" /> Join WA Community
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Event Details Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Other Content */}
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
