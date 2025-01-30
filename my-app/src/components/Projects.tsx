// src/components/Projects.tsx
import React from 'react';

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  { title: 'Project 1', description: 'Description of Project 1', link: '#' },
  { title: 'Project 2', description: 'Description of Project 2', link: '#' },
  { title: 'Project 3', description: 'Description of Project 3', link: '#' },
  { title: 'Project 4', description: 'Description of Project 3', link: '#' },

];

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
