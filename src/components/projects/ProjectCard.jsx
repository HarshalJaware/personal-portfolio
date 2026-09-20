const getCategoryIcon = (category) => {
  if (category.toLowerCase().includes('transportation')) {
    return (
      <svg className="h-8 w-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    );
  }
  if (category.toLowerCase().includes('engineering') || category.toLowerCase().includes('simulation')) {
    return (
      <svg className="h-8 w-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    );
  }
  if (category.toLowerCase().includes('erp')) {
    return (
      <svg className="h-8 w-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18m-9-4v8m-7 4h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    );
  }
  return (
    <svg className="h-8 w-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
    </svg>
  );
};

const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/60 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-sky-500/50 hover:bg-slate-900/90 shadow-xl shadow-slate-950/50">
      {/* Visual Header */}
      <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
        
        {project.screenshots?.[0] ? (
          <img
            src={project.screenshots[0]}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="rounded-xl border border-sky-500/30 bg-slate-900/90 p-3 shadow-lg shadow-sky-950/50 group-hover:border-sky-400/60 group-hover:scale-110 transition duration-300">
              {getCategoryIcon(project.category)}
            </div>
            <span className="mt-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
              {project.category}
            </span>
          </div>
        )}

        {project.featured && (
          <span className="absolute top-3 right-3 rounded-full border border-sky-500/40 bg-sky-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-sky-400 backdrop-blur-md">
            Featured
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-sky-400 transition-colors">
          {project.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Technology Tags */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-slate-700/80 bg-slate-950/70 px-2 py-0.5 text-xs text-slate-300"
            >
              {technology}
            </span>
          ))}

          {project.technologies.length > 5 && (
            <span className="rounded-md border border-slate-800 bg-slate-950/50 px-2 py-0.5 text-xs text-slate-400">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Action button */}
        <div className="mt-6 pt-4 border-t border-slate-800/80">
          <button
            type="button"
            onClick={() => onViewDetails(project)}
            aria-label={`View case study and architecture for ${project.title}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 transition hover:text-sky-300 group/btn cursor-pointer focus:outline-none focus:underline"
          >
            <span>View Technical Case Study</span>
            <span className="transition-transform duration-200 group-hover/btn:translate-x-1" aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;