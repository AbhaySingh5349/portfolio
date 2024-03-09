'use client';

import React from 'react';

import { motion } from 'framer-motion'; // uses useEfeect under the hood

import { links } from '@/lib';
import Link from 'next/link';

// relative class for z index to work
// -translate to pull back navbar to exact center of page

const Navbar = () => {
  return (
    <header className="z-10 relative bg-slate-400">
      <motion.div
        className="fixed top-2 left-1/2 -translate-x-1/2 h-[6.5rem] w-11/12 rounded-none border 
                    border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] 
                      backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: '-50%', opacity: 0 }} // since we are over-riding other animations, so to add effect same as -translate-x-1/2, we added x:'-50%'
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      />

      <nav className="flex fixed top-[0.15rem] left-1/2 h-24 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul
          className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 
                    sm:w-[initial] sm:flex-nowrap sm:gap-5"
        >
          {links.map((link: any) => (
            <motion.li
              key={link.hash}
              className="flex items-center justify-center p-3 hover:text-gray-950"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link href={link.hash}>{link.name}</Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
