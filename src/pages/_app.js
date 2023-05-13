import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';

import { Open_Sans } from 'next/font/google';
import Head from 'next/head';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main
        className={`${openSans.variable} font-open-sans bg-light dark:bg-dark w-full min-h-screen`}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
