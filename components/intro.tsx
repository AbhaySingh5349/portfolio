'use client';

import React from 'react';

import Image from 'next/image';
import { motion } from 'framer-motion'; // uses useEffect, so client component

import abhay_singh from '@/public/abhay_singh.jpeg';

const Intro = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            // smooth bouncing
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src={abhay_singh}
              alt="Abhay Singh"
              width="192"
              height="192"
              // priority={true}
              className="h-48 w-48 rounded-full object-cover border-[0.35rem] border-white shadow-xl mt-24"
            />
          </motion.div>

          <motion.span
            className="text-3xl absolute bottom-2 right-2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            🎯
          </motion.span>
        </div>
      </div>
      <p></p>
    </section>
  );
};

export default Intro;
