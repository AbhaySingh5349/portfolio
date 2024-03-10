import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { Navbar } from '@/components';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abhay Singh | Software Engineer',
  description: `Abhay is Software professional working on cutting-edge technologies like Golang, 
                Recommendation systems, Generative AI and 
                Web Development using Javascript, Typescript, React.js, Next.js`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        id="gradient"
        className={`${inter.className} w-screen h-[5000px] bg-gradient-to-r from-blue-50 to-red-100 relative text-gray-500 pt-32 sm:pt-24`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
