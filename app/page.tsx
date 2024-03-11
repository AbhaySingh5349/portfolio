import React from 'react';

import {
  ContactLinks,
  SectionDivider,
  Intro,
  Projects,
  Proficiencies,
} from '@/components';

const Home = () => {
  return (
    <div className="flex flex-col items-center px-4">
      <ContactLinks />
      <SectionDivider />
      <Intro />
      <Projects />
      <Proficiencies />
    </div>
  );
};

export default Home;
