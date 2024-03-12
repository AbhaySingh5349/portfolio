import React from 'react';

import {
  ContactLinks,
  SectionDivider,
  Intro,
  Projects,
  Proficiencies,
  Experience,
  Contact,
} from '@/components';

const Home = () => {
  return (
    <div className="flex flex-col items-center px-4">
      <ContactLinks />
      <SectionDivider />
      <Intro />
      <Proficiencies />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
