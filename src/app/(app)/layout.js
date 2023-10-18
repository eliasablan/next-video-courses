import { Poppins } from 'next/font/google';
import '@/styles/globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Video Courses Web Application',
  description: 'Find your taliored course',
};

export default async function RootLayout({ children }) {
  return (
    <>
      <Header />
      <div className="max-w-5xl m-auto w-full p-4">
        {children}
        <Footer />
      </div>
    </>
  );
}
