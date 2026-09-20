import { useEffect, useRef } from 'react';

const ProjectDetails = ({ project, onClose }) => {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    // Auto focus close button on open
    closeButtonRef.current?.focus();

    // Escape key handler
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Prevent background scroll
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  // Click on backdrop to close
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/85 p-4 sm:p-6 backdrop-blur-md transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-details-title"
    >
      <div className="relative my-8 w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl shadow-sky-950/60 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5 bg-slate-900/90 backdrop-blur-sm">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-sky-400">
              {project.category}
            </span>
            <h2
              id="project-details-title"
              className="mt-1 text-2xl font-bold text-white sm:text-3xl"
            >
              {project.title}
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-lg border border-slate-700 bg-slate-800/80 p-2 text-slate-300 transition hover:border-sky-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400 cursor-pointer"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Screenshots if available */}
          {project.screenshots?.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-2">
              {project.screenshots.map((screenshot, index) => (
                <img
                  key={index}
                  src={screenshot}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="rounded-xl border border-slate-700 w-full object-cover"
                />
              ))}
            </div>
          )}

          {/* Overview */}
          <section>
            <h3 className="text-lg font-semibold text-white">
              Project Overview
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-300">
              {project.description}
            </p>
          </section>

          {/* Architecture if available */}
          {project.architecture && (
            <section className="rounded-xl border border-sky-500/20 bg-sky-500/5 p-4 sm:p-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                Technical Architecture
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                {project.architecture}
              </p>
            </section>
          )}

          {/* Key Highlights */}
          <section>
            <h3 className="text-lg font-semibold text-white">
              Key Highlights & Deliverables
            </h3>
            <ul className="mt-4 space-y-3">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                  <span className="text-sky-400 font-bold">✓</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* My Responsibilities */}
          <section>
            <h3 className="text-lg font-semibold text-white">
              Key Engineering Responsibilities
            </h3>
            <ul className="mt-4 space-y-3">
              {project.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                  <span className="text-sky-400 font-bold">▹</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Technologies */}
          <section>
            <h3 className="text-lg font-semibold text-white">
              Tech Stack & Libraries
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* External Links if available */}
          {(project.links?.live || project.links?.github) && (
            <section className="flex flex-wrap gap-4 border-t border-slate-800 pt-6">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
                >
                  View Live Platform ↗
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-lg border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-400"
                >
                  View Repository ↗
                </a>
              )}
            </section>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end border-t border-slate-800 px-6 py-4 bg-slate-900/90">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-slate-800 hover:text-white cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;