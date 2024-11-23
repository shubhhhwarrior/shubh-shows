/**
 * @copyright (c) 2024 - Present
 * @author ...
 * @license MIT
 */

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

type ComedianType = 'standup' | 'improv' | 'sketch' | 'musical' | 'other';

export default function BookTickets() {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [bookingType, setBookingType] = useState<'show' | 'joinAsComedian'>('show');
  const [formData, setFormData] = useState({
    fullName: '',
    email: session?.user?.email || '',
    phone: '',
    // Number of tickets is fixed at 1
    numberOfTickets: 1,
    comedianType: '' as ComedianType,
    bio: '',
    speciality: '',
    videoUrl: '',
    experience: '',
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    if (!session?.user?.email) {
      setError('Please sign in first');
      setIsLoading(false);
      return;
    }

    try {
      if (bookingType === 'joinAsComedian') {
        const res = await fetch('/api/comedians/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            username: formData.fullName,
            email: session.user.email,
            phone: formData.phone,
            isComedian: true,
            comedianProfile: {
              comedianType: formData.comedianType,
              bio: formData.bio,
              speciality: formData.speciality,
              videoUrl: formData.videoUrl,
              experience: formData.experience,
              status: 'pending',
            },
          }),
        });

        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.message || 'Failed to register as comedian');
        }

        const data = await res.json();
        setSuccess('Your comedian registration has been submitted! We will review and get back to you.');
      } else {
        // Regular ticket booking logic
        const res = await fetch('/api/bookings/create', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: session.user.email,
            phone: formData.phone,
            numberOfTickets: 1, // Always 1 ticket
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || 'Something went wrong');
        }

        setSuccess('Booking submitted successfully! Awaiting approval.');
      }

      // Reset form
      setFormData(prev => ({
        ...prev,
        fullName: '',
        phone: '',
        comedianType: '' as ComedianType,
        bio: '',
        speciality: '',
        videoUrl: '',
        experience: '',
      }));
    } catch (err) {
      console.error('Submission error:', err);
      setError(err instanceof Error ? err.message : 'Failed to submit');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-700 to-purple-900 flex flex-col">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow max-w-2xl mx-auto px-4 py-12"
      >
        <motion.div whileHover={{ scale: 1.01 }} className="bg-white rounded-lg shadow-2xl p-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-purple-100 rounded-full p-3">
              {bookingType === 'show' ? '🎟️' : '🎤'}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {bookingType === 'show' ? 'Book Show Tickets' : 'Join as Comedian'}
              </h2>
              <p className="text-gray-600">
                {bookingType === 'show' 
                  ? 'Secure your spot for an unforgettable night! 🎭' 
                  : 'Share your talent with our audience! 🌟'}
              </p>
            </div>
          </div>

          {error && (
            <div className="mb-4 bg-red-50 text-red-700 p-4 rounded-md">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 bg-green-50 text-green-700 p-4 rounded-md">
              {success}
            </div>
          )}

          {venueStatus.isFull && bookingType === 'show' && (
            <div className="mb-4 bg-yellow-50 text-yellow-800 p-4 rounded-md">
              Sorry, all seats are currently booked. Please check back later.
            </div>
          )}

          {!venueStatus.isFull && bookingType === 'show' && (
            <div className="mb-4 bg-blue-50 text-blue-800 p-4 rounded-md">
              Available seats: {50 - venueStatus.totalApproved}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            {bookingType === 'show' ? (
              <div>
                <label htmlFor="numberOfTickets" className="block text-sm font-medium text-gray-700">
                  Number of Tickets
                </label>
                <input
                  type="number"
                  id="numberOfTickets"
                  name="numberOfTickets"
                  value={1}
                  readOnly
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-gray-100 cursor-not-allowed"
                />
              </div>
            ) : (
              <>
                {/* Comedian-specific fields */}
              </>
            )}

            <button
              type="submit"
              disabled={isLoading || (bookingType === 'show' && venueStatus.isFull)}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:bg-purple-300"
            >
              {isLoading ? 'Processing...' : 
                venueStatus.isFull && bookingType === 'show' ? 'Fully Booked' :
                bookingType === 'show' ? 'Book Now' : 'Submit Application'}
            </button>
          </form>
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
}
