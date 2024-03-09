'use client';

import React from 'react';

import Image from 'next/image';
import { motion } from 'framer-motion'; // uses useEffect, so client component
import { TypeAnimation } from 'react-type-animation';

import abhay_singh from '@/public/abhay_singh.jpeg';

const Intro = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
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
              priority={true}
              className="h-48 w-48 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
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
        <h1 className="mt-2 text-2xl sm:text-4xl sm:font-semibold flex flex-col justify-center items-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-red-400">
            Hello, I'm{' '}
          </span>
          <TypeAnimation
            sequence={[
              'Abhay Singh',
              1000,
              'Backend Developer',
              1000,
              'Web Dev Enthusiast',
              1000,
              'Problem-Solver',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
      </div>
    </section>
  );
};

export default Intro;
