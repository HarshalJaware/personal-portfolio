import { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import ProjectCard from '../projects/ProjectCard';
import ProjectDetails from '../projects/ProjectDetails';
import { projects } from '../../data/projects';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20">
      <SectionHeading
        eyebrow="PROJECTS"
        title="Projects I've worked on"
        description="A selection of enterprise, engineering, and full-stack applications built throughout my professional experience."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onViewDetails={setSelectedProject}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;