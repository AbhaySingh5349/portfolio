'use client';

import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const TimelineElement = ({ icon, description, title }: any) => {
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{
        // background: theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
        boxShadow: 'none',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        textAlign: 'left',
        padding: '1.3rem 2rem',
      }}
      contentArrowStyle={{
        borderRight: '0.4rem solid #9ca3af',
        // theme === 'light'
        //   ? '0.4rem solid #9ca3af'
        //   : '0.4rem solid rgba(255, 255, 255, 0.5)',
      }}
      date={title}
      icon={icon}
      iconStyle={{
        background: 'white',
        // theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
        fontSize: '1.5rem',
      }}
    >
      <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
        {description}
      </p>
    </VerticalTimelineElement>
  );
};

export default TimelineElement;
