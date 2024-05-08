'use client';

import React from 'react';

import { motion } from 'framer-motion';
import { LuGraduationCap } from 'react-icons/lu';

import { SectionHeading } from '@/components';

import { useSectionInView } from '@/hooks';

// <span className="font-medium">full-stack web development</span>

const Intro = () => {
  const { ref } = useSectionInView('About', 0.75);
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-6 sm:mb-20 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="intro"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I embarked on my programming journey during my academic years at{' '}
        <LuGraduationCap className="inline" />{' '}
        <span className="font-medium">IIT (ISM), Dhanbad.</span>{' '}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect.
      </p>

      <p className="mb-3">
        With almost 2 years of current experience as a Software Engineer, I
        started my professional journey as a{' '}
        <span className="font-medium">Backend Developer</span> where I got
        extensive experience in cutting-edge technologies like{' '}
        <span className="font-medium">Golang</span> ,{' '}
        <span className="font-medium">gRPC</span> ,{' '}
        <span className="font-medium">Protocol Buffers</span> and{' '}
        <span className="font-medium">Grule engine</span> which I&apos;ve
        leveraged to build a{' '}
        <span className="font-medium">recommendation system</span> to generate
        dynamic advisories. Additionally, ventured into{' '}
        <span className="font-medium">AI</span>, particularly{' '}
        <span className="font-medium">Image Super-Resolution</span>, where
        I&apos;ve honed my skills with{' '}
        <span className="font-medium">Generative Adversarial Network</span>{' '}
        models using <span className="font-medium">TensorFlow</span> and{' '}
        <span className="font-medium">Python</span>.
      </p>

      <p>
        <span className="italic">Beyond my professional endeavors</span>,
        I&apos;ve undertaken personal projects utilizing{' '}
        <span className="font-medium">TypeScript</span>,{' '}
        <span className="font-medium">Node.js</span>,{' '}
        <span className="font-medium">Next.js</span>,{' '}
        <span className="font-medium">React.js</span> and{' '}
        <span className="font-medium">MongoDB</span> for{' '}
        <span className="font-medium">Web Dev</span> and leveraged{' '}
        <span className="font-medium">OpenAI API</span>, further solidifying my
        versatility and dedication to mastering new technologies. Also,{' '}
        <span className="italic">during my college years</span>, I dedicated
        some time to <span className="font-medium">Android Dev</span>, utilizing{' '}
        <span className="font-medium">Java</span> to build basic applications.
      </p>
    </motion.section>
  );
};

export default Intro;
