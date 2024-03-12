'use client';

import React from 'react';

import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';

import Image from 'next/image';
import { motion } from 'framer-motion'; // uses useEffect, so client component
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

import { useSectionInView } from '@/hooks';
import { useActiveSectionContext } from '@/context';

import abhay_singh from '@/public/abhay_singh.jpeg';

const ContactLinks = () => {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className="scroll-mt-[50rem]">
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
              // quality={90}
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

        <motion.h1
          className="mt-2 text-2xl sm:text-4xl sm:font-semibold flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
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
        </motion.h1>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-3"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-4 py-3 flex items-center justify-center gap-0.5 rounded-full outline-none focus:scale-[1.10] hover:scale-[1.10] active:scale-105 transition cursor-pointer"
            onClick={() => {
              setActiveSection('Contact');
              setTimeOfLastClick(Date.now());
            }}
          >
            Get In Touch{' '}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />{' '}
          </Link>

          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-[1.10] hover:scale-[1.10] active:scale-105 transition cursor-pointer border border-black/20 dark:bg-white/10 dark:text-white/60"
            href="/Abhay_Singh_CV.pdf"
            download
          >
            Download CV{' '}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>

          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center justify-center gap-2 rounded-full focus:scale-[1.10] hover:scale-[1.10] active:scale-105 transition cursor-pointer border border-black/20 dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/abhay5349singh/"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center justify-center gap-2 rounded-full focus:scale-[1.10] hover:scale-[1.10] active:scale-105 transition cursor-pointer border border-black/20 dark:bg-white/10 dark:text-white/60"
            href="https://github.com/AbhaySingh5349"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactLinks;
