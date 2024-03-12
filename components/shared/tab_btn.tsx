'use client';

import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  default: { width: 0 },
  active: { width: 'calc(100% - 0.75rem)' },
};

const TabBtn = ({ active, selectTab, children }: any) => {
  const buttonClasses = active
    ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-red-400'
    : 'text-black/80';

  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 text-3xl font-medium hover:font-bold ${buttonClasses}`}
      >
        {children}
      </p>
      <motion.div
        animate={active ? 'active' : 'default'}
        variants={variants}
        className="h-1 bg-gradient-to-r from-blue-300 to-red-400 mb-4 mr-3 rounded-full"
      ></motion.div>
    </button>
  );
};

export default TabBtn;
