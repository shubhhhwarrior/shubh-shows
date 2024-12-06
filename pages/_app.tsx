/**
 * @copyright (c) 2024 - Present
 * @license MIT
 */

import { SessionProvider } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';
import { Analytics } from '@vercel/analytics/react'; // Import Vercel Analytics
import ErrorBoundary from '@/components/ErrorBoundary';
import type { AppProps } from 'next/app';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.css';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ErrorBoundary>
      <SessionProvider session={session}>
        <Component {...pageProps} />
        <Analytics /> {/* Add Vercel Analytics */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Add Policies Page Link */}
        <footer style={{ textAlign: 'center', marginTop: '20px' }}>
          <a href="/policies" style={{ textDecoration: 'none', color: '#0070f3' }}>
            Policies
          </a>
        </footer>
      </SessionProvider>
    </ErrorBoundary>
  );
}
