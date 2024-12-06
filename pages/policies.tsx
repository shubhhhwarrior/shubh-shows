/**
 * @copyright (c) 2024 - Present
 * @author github.com/KunalG932
 * @license MIT
 */

import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Policies() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100">
      <Navbar />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 py-12"
      >
        <div className="bg-white rounded-lg shadow-lg p-8">
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-3xl font-bold text-center text-purple-800 mb-8"
          >
            Terms and Policies
          </motion.h1>

          <div className="space-y-8">
            {/* Terms of Service Section */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">Terms of Service</h2>
              <div className="prose prose-purple max-w-none text-gray-700 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">Overview</h3>
                  <p>
                    This website is operated by The Humors Hub. Throughout the site, the terms "we", "us" and "our" refer to The Humors Hub. 
                    The Humors Hub offers this website, including all information, tools and services available from this site to you, the user, 
                    conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
                  </p>
                </div>

                {/* Section 1 */}
                <div>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">1. Online Store Terms</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>By agreeing to these Terms of Service, you represent that you are at least 18 years of age.</li>
                    <li>You may not use our products for any illegal or unauthorized purpose.</li>
                    <li>You must not transmit any malicious code or viruses.</li>
                    <li>A breach of any of the Terms will result in immediate termination of your Services.</li>
                  </ul>
                </div>

                {/* Section 2 */}
                <div>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">2. General Conditions</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>We reserve the right to refuse service to anyone for any reason.</li>
                    <li>Your content may be transferred unencrypted and may be altered to conform to technical requirements.</li>
                    <li>You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service.</li>
                  </ul>
                </div>

                {/* Additional sections - add more as needed */}
                <div>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">3. Pricing and Payment</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>All prices are subject to change without notice.</li>
                    <li>Payments are processed securely through our payment providers.</li>
                    <li>We reserve the right to refuse or cancel any orders at our discretion.</li>
                </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">4. Governing Law</h3>
                  <p>
                    These Terms of Service shall be governed by and construed in accordance with the laws of India, 
                    and jurisdiction of Gujarat, India.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">5. Changes to Terms</h3>
                  <p>
                    We reserve the right to update, change or replace any part of these Terms of Service at any time. 
                    It is your responsibility to check this page periodically for changes.
                  </p>
                </div>
              </div>
            </section>

            {/* Privacy Policy Section */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">Privacy Policy</h2>
              <div className="prose prose-purple max-w-none">
                <p className="text-gray-700">
                  We are committed to protecting your privacy. Here's how we handle your information:
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700">
                  <li>We collect only necessary personal information for bookings and account management.</li>
                  <li>Your data is securely stored and never shared with unauthorized third parties.</li>
                  <li>We use cookies to enhance your browsing experience.</li>
                  <li>You can request access to or deletion of your personal data at any time.</li>
                  <li>We maintain industry-standard security measures to protect your information.</li>
                </ul>
              </div>
            </section>

            {/* Refund Policy Section */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">Refund Policy</h2>
              <div className="prose prose-purple max-w-none text-gray-700 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">Event Ticket Refunds</h3>
                  <p>
                    We understand that plans can change. Here's our detailed refund policy for event tickets:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Full refund available if cancelled 48 hours or more before the event start time</li>
                    <li>50% refund if cancelled between 24-48 hours before the event</li>
                    <li>No refund for cancellations less than 24 hours before the event</li>
                    <li>No refund for no-shows or late arrivals</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">Refund Process</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Refunds are processed back to the original payment method</li>
                    <li>Processing time is typically 5-7 business days</li>
                    <li>You will receive an email confirmation when your refund is processed</li>
                    <li>Bank processing times may vary for the refund to appear in your account</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">Special Circumstances</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Full refunds are provided if an event is cancelled by The Humors Hub</li>
                    <li>In case of event rescheduling, tickets will remain valid for the new date</li>
                    <li>If you cannot attend the rescheduled date, a full refund will be provided</li>
                    <li>Force majeure events will be handled on a case-by-case basis</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">How to Request a Refund</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Log in to your account and navigate to your bookings</li>
                    <li>Select the booking you wish to cancel</li>
                    <li>Click the "Cancel Booking" button (available if within refund policy timeframe)</li>
                    <li>For special circumstances, contact us through:
                      <ul className="list-disc pl-5 mt-2">
                        <li>Email: shubhammvaghela999@gmail.com</li>
                        <li>WhatsApp: Join our community group</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">Non-Refundable Items</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Convenience fees and service charges are non-refundable</li>
                    <li>Special event tickets marked as "Non-Refundable"</li>
                    <li>Group bookings may have different cancellation terms</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg mt-4">
                  <p className="font-semibold">Note:</p>
                  <p>
                    We reserve the right to modify these refund policies at any time. Any changes will be 
                    effective immediately upon posting on this page. Your continued use of our services 
                    following such modifications constitutes your acceptance of the modified refund policy.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">Contact Information</h2>
              <div className="bg-purple-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  For any questions about these Terms of Service or any other policies, please contact us:
                </p>
                <div className="mt-4 space-y-2 text-gray-700">
                  <p><strong>Business Name:</strong> The Humors Hub</p>
                  <p><strong>Address:</strong> Junagadh , Gujrat, India</p>
                  <p><strong>Email:</strong> <a href="mailto:shubhammvaghela999@gmail.com" className="text-purple-600 hover:text-purple-800">shubhammvaghela999@gmail.com</a></p>
                  <p><strong>WhatsApp:</strong> <a href="https://chat.whatsapp.com/JrExMaZiT6F2LmylOuU8NL" className="text-purple-600 hover:text-purple-800" target="_blank" rel="noopener noreferrer">Join our Community</a></p>
                </div>
              </div>
            </section>

            {/* Back Button */}
            <div className="flex justify-center mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.back()}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
              >
                Back
              </motion.button>
            </div>
          </div>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
} 
