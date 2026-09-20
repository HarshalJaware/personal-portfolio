import { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import ProjectCard from '../projects/ProjectCard';
import ProjectDetails from '../projects/ProjectDetails';
import { projects } from '../../data/projects';

const filterTabs = [
  { label: 'All Work', value: 'All' },
  { label: 'Featured Deliverables', value: 'Featured' },
  { label: 'Engineering & Simulation', value: 'Engineering' },
  { label: 'Enterprise & Logistics', value: 'Enterprise' },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Featured') return project.featured;
    if (activeFilter === 'Engineering') {
      return (
        project.category.includes('Engineering') ||
        project.category.includes('Simulation')
      );
    }
    if (activeFilter === 'Enterprise') {
      return (
        project.category.includes('Transportation') ||
        project.category.includes('ERP') ||
        project.category.includes('Enterprise') ||
        project.category.includes('Productivity')
      );
    }
    return true;
  });

  return (
    <section id="projects" className="scroll-mt-20 py-20">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="PORTFOLIO OF WORK"
          title="Enterprise systems & engineering platforms"
          description="A professional track record spanning high-concurrency transportation dispatch, electrical power simulation, multi-module ERP, and agile collaboration systems — built across 8 years and 9 months at 5 companies."
        />

        {/* Category Filter Tabs */}
        <div className="mb-12 flex flex-wrap gap-2 shrink-0">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActiveFilter(tab.value)}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition cursor-pointer ${
                activeFilter === tab.value
                  ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/25'
                  : 'border border-slate-700/80 bg-slate-900/60 text-slate-300 hover:border-slate-600 hover:text-white hover:bg-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onViewDetails={setSelectedProject}
          />
        ))}
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 py-16 text-center">
          <p className="text-slate-400 text-sm">No projects match the selected filter.</p>
        </div>
      )}

      {/* Case Study Modal */}
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