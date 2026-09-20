const ProjectDetails = ({ project, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/95 px-4 py-10 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-details-title"
    >
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-700 px-6 py-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
                {project.category}
              </p>

              <h2
                id="project-details-title"
                className="mt-2 text-2xl font-bold text-white sm:text-3xl"
              >
                {project.title}
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="rounded-lg border border-slate-700 px-3 py-2 text-slate-300 transition hover:border-sky-400 hover:text-sky-400"
            >
              ✕
            </button>
          </div>

          <div className="p-6 sm:p-8">
            {project.screenshots?.length > 0 && (
              <div className="mb-10 grid gap-4 sm:grid-cols-2">
                {project.screenshots.map((screenshot) => (
                  <img
                    key={screenshot}
                    src={screenshot}
                    alt={`${project.title} screenshot`}
                    className="rounded-xl border border-slate-700"
                  />
                ))}
              </div>
            )}

            <section>
              <h3 className="text-xl font-semibold text-white">
                Overview
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                {project.description}
              </p>
            </section>

            <section className="mt-10">
              <h3 className="text-xl font-semibold text-white">
                Key areas
              </h3>

              <ul className="mt-5 space-y-3">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-slate-300"
                  >
                    <span className="text-sky-400">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10">
              <h3 className="text-xl font-semibold text-white">
                My contribution
              </h3>

              <ul className="mt-5 space-y-3">
                {project.responsibilities.map((responsibility) => (
                  <li
                    key={responsibility}
                    className="flex gap-3 text-slate-300"
                  >
                    <span className="text-sky-400">→</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10">
              <h3 className="text-xl font-semibold text-white">
                Technologies
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-sm text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </section>

            {(project.links?.live || project.links?.github) && (
              <section className="mt-10 flex flex-wrap gap-4 border-t border-slate-800 pt-8">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
                  >
                    View Live Project ↗
                  </a>
                )}

                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-400"
                  >
                    View GitHub ↗
                  </a>
                )}
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;