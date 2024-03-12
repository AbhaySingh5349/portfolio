import React from 'react';

import { SiCoronaengine } from 'react-icons/si';
import { LuBrainCircuit } from 'react-icons/lu';
import { MdOutlineCloudUpload } from 'react-icons/md';
import { TbBinaryTree } from 'react-icons/tb';

import dev_overflow from '@/public/dev_overflow.png';
import airbnb from '@/public/airbnb.png';
import messenger_app from '@/public/messenger_app.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#intro',
  },
  {
    name: 'Proficiencies',
    hash: '#proficiencies',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'AgriCare Fertlizer Recommendation System',
    description: `Implemented Golang based Grule Engine with structured Protocol Buffers schemas utilizing gRPC for building communication channels 
      to generate dynamic advisories for farmers from diverse datasets of soil health, crop types and geographic locations.
      `,
    icon: React.createElement(SiCoronaengine), // since we are in .ts file & not in .tsx, so we need cannot use like <SiCoronaengine />
    date: '2019',
  },
  {
    title: 'Satellite Imagery Resolution Enhancement',
    description: `Implemented Generative Adversarial Network(ESRGAN) model using Python TensorFlow 
                  for enhancing image resolution to 4 times.`,
    icon: React.createElement(LuBrainCircuit),
    date: '2019 - 2021',
  },
  {
    title: 'Automated Image Download and Cloud Storage Integration',
    description: `Developed a backend service using Python automating downloads of image tiles from QGIS(Quantum Geographic Information System) at a particular resolution for given diagonal Lat/Lng 
       and stored in Azure Blob.`,
    icon: React.createElement(MdOutlineCloudUpload),
    date: '2021 - present',
  },
  ,
  {
    title: 'Lightening Fast Geospatial Queries',
    description: `Implemented R-tree Data Structure for accelerating Nearest Neighbor Searches based on Lat/Lng 
       reducing search time from 7.5 secs to 0.5 sec.`,
    icon: React.createElement(TbBinaryTree),
    date: '2021 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'Developers OverFlow',
    description: `Developed responsive Question and Answers platform where users can post queries with associated tags, receive
      community-driven responses, personalized recommendations and integrated state-of-art Open AI API's to generate AI answers.
      `,
    tags: [
      'Typescript',
      'React.js',
      'Next.js',
      'Open AI',
      'MongoDB',
      'Tailwind',
    ],
    imageUrl: dev_overflow,
  },
  {
    title: 'Booking WebApp',
    description: `Developed a places listing web app where user can browse and book places with intuitive calendars based on there
      availability for that particular time period and integrated Amozon S3 as cloud storage solution`,
    tags: [
      'Typescript',
      'React.js',
      'Next.js',
      'Amazon S3',
      'MongoDB',
      'Tailwind',
    ],
    imageUrl: airbnb,
  },
  {
    title: 'Messenger App',
    description: `Developed an Android application where users can find friends, send requests, chat and exchanges multi-media messages`,
    tags: ['Java', 'Android SDK'],
    imageUrl: messenger_app,
  },
] as const;

export const skillsData = [
  'Data Structures and Algorithms',
  'C++',
  'Golang',
  'JavaScript',
  'TypeScript',
  'Python',
  'React.js',
  'Next.js',
  'Node.js',
  'Express.js',
  'Protocol Buffers',
  'gRPC',
  'Rules Engine',
  'TensorFlow',
  'Android SDK',
  'Git',
  'Tailwind',
  'MongoDB',
  'Framer Motion',
] as const;

export const CertificationsData = [
  {
    title: 'Machine Learning Specialization',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/8JGFBT2626S3',
  },
  {
    title: 'Deep Learning Specialization',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/MWZF2A8693JR',
  },
] as const;
