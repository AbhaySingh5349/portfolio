'use client';

import { useActiveSectionContext } from '@/context';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import type { SectionName } from '@/lib';

export const useSectionInView = (
  sectionName: SectionName,
  threshold = 0.75
) => {
  const { ref, inView } = useInView({
    threshold, // % of certain section to appear in view, to set new section as active
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
};
