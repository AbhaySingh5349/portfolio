import React from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { Toaster } from 'react-hot-toast';

import { Navbar, Footer, ThemeSwitch } from '@/components';
import { ActiveSectionContextProvider, ThemeContextProvider } from '@/context';

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
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} w-screen h-screen relative bg-gradient-to-r from-blue-50 to-red-100  text-gray-500 pt-32 sm:pt-24 dark:bg-none dark:bg-gradient-none dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Navbar />
            {children}
            <Footer />
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
