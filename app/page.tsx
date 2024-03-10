import React from 'react';

import { ContactLinks, SectionDivider, Intro, Projects } from '@/components';

const Home = () => {
  return (
    <div className="flex flex-col items-center px-4">
      <ContactLinks />
      <SectionDivider />
      <Intro />
      <Projects />
    </div>
  );
};

export default Home;
