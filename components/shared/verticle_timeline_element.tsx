'use client';

import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { useThemeContext } from '@/context';

const TimelineElement = ({ icon, description, title }: any) => {
  const { theme } = useThemeContext();
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{
        background: '#f3f4f6',
        boxShadow: 'none',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        textAlign: 'left',
        padding: '1.3rem 2rem',
      }}
      contentArrowStyle={{
        borderRight:
          theme === 'light'
            ? '0.4rem solid #9ca3af'
            : '0.4rem solid rgba(255, 255, 255, 0.5)',
      }}
      date={title}
      icon={icon}
      iconStyle={{
        background: theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
        fontSize: '1.5rem',
      }}
    >
      <p className="!mt-1 !font-normal text-gray-700 dark:text-black/75">
        {description}
      </p>
    </VerticalTimelineElement>
  );
};

export default TimelineElement;
