'use client';

import React from 'react';

import { SectionHeading, ProjectCard } from '@/components';
import { projectsData } from '@/lib';
import { useSectionInView } from '@/hooks';

// scroll-mt-28: when we navigatw through links, it will help in not overlapping navbar with section but maintains a margin

const Projects = () => {
  const { ref } = useSectionInView('Projects', 0.3);
  return (
    <section ref={ref} id="projects" className="mb-14 sm:mb-20 scroll-mt-28">
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            {/* <ProjectCard {...project} /> */}
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={Array.from(project.tags)}
              imageUrl={project.imageUrl}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
