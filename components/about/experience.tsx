'use client';

import React from 'react';

import { VerticalTimeline } from 'react-vertical-timeline-component';

import { SectionHeading, TimelineElement } from '@/components';
import { experiencesData } from '@/lib';
import { useSectionInView } from '@/hooks';

const Experience = () => {
  const { ref } = useSectionInView('Experience', 0.5);

  return (
    <section
      ref={ref}
      id="experience"
      className="mb-28 scroll-mt-28 text-center sm:mb-28"
    >
      <SectionHeading>Experience</SectionHeading>
      <h3 className="italic text-blue-300">
        (At Reliance Jio July 22 - Present)
      </h3>
      <VerticalTimeline lineColor="#e5e7eb">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <TimelineElement
              icon={item?.icon}
              date={item?.date}
              description={item?.description}
              title={item?.title}
            />
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
