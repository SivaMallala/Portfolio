import React from 'react'
import projects from '@/data/projects';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start">
    {projects.map((item) => {
      return (
        <ProjectCard key={item.id} project={item} />
      );
    })}
  </div>
  )
}

export default Projects