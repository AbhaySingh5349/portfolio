import React from 'react';

import { SectionHeading, ProjectCard } from '@/components';
import { projectsData } from '@/lib';

// title, description, tags, imageUrl

const Projects = () => {
  return (
    <section>
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
