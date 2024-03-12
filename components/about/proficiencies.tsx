'use client';

import React, { useTransition, useState } from 'react';
import { motion } from 'framer-motion';

import { TabBtn } from '@/components';
import { useSectionInView } from '@/hooks';
import { skillsData, CertificationsData, ProficienciesTab } from '@/lib';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Proficiencies = () => {
  const { ref } = useSectionInView('Proficiencies', 0.5);

  const [tab, setTab] = useState<ProficienciesTab>('Skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: ProficienciesTab) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      ref={ref}
      id="proficiencies"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-28"
    >
      <div className="mt-4 flex flex-row justify-center gap-2">
        <TabBtn
          selectTab={() => handleTabChange('Skills')}
          active={tab === 'Skills'}
        >
          Skills
        </TabBtn>
        <TabBtn
          selectTab={() => handleTabChange('Certifications')}
          active={tab === 'Certifications'}
        >
          Certifications
        </TabBtn>
      </div>
      <div className="mt-8">
        {tab === 'Skills' && (
          <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {skillsData.map((skill, index) => (
              <motion.li
                className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        )}
        {tab === 'Certifications' && (
          <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {CertificationsData.map((certificate, index) => (
              <motion.a
                className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
                href={certificate.link}
                target="_blank"
              >
                {certificate.title}
              </motion.a>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Proficiencies;
