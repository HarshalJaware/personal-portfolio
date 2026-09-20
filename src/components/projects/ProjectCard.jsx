const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/60 transition duration-300 hover:-translate-y-1 hover:border-sky-500/50 hover:bg-slate-900">
      <div className="flex h-48 items-center justify-center border-b border-slate-800 bg-slate-950">
        {project.screenshots?.[0] ? (
          <img
            src={project.screenshots[0]}
            alt={`${project.title} screenshot`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-400">
              {project.category}
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white">
              {project.title}
            </h3>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-sky-400">
              {project.category}
            </p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              {project.title}
            </h3>
          </div>

          {project.featured && (
            <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-1 text-xs text-sky-400">
              Featured
            </span>
          )}
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-400">
          {project.shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-300"
            >
              {technology}
            </span>
          ))}

          {project.technologies.length > 5 && (
            <span className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-500">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => onViewDetails(project)}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-400 transition hover:text-sky-300"
        >
          View case study
          <span>→</span>
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;