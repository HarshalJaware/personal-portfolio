import { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import { skills } from '../../data/skills';

const categoryIcons = {
  'Frontend Development': (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  'Backend & API Engineering': (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
    </svg>
  ),
  'Database & Data Modeling': (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125m16.5 4.5c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  ),
  'Third-Party & Enterprise APIs': (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
  ),
  'Cloud, DevOps & Tooling': (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    </svg>
  ),
  'Engineering Domain & Methods': (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
    </svg>
  ),
  'AI-Assisted Development': (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  ),
  'AI-Assisted Development & Agentic Coding': (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  ),
};

const getTechData = (item) => {
  if (typeof item === 'string') {
    return { name: item, percentage: null };
  }
  return item;
};

const Skills = () => {
  const [viewMode, setViewMode] = useState('bars'); // 'bars' | 'badges'

  return (
    <section id="skills" className="scroll-mt-20 py-20">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="TECHNICAL COMPETENCIES"
          title="A full-stack engineering toolkit built over 8 years and 9 months"
          description="A curated set of technologies, architectural patterns, and engineering practices developed through delivering production systems across transportation, ERP, simulation, and enterprise software domains."
        />

        {/* View Toggle */}
        <div className="mb-12 flex items-center gap-1.5 self-start rounded-xl border border-slate-700/80 bg-slate-900/80 p-1 backdrop-blur-sm md:self-end">
          <button
            type="button"
            onClick={() => setViewMode('bars')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition ${
              viewMode === 'bars'
                ? 'bg-sky-500 font-semibold text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            aria-pressed={viewMode === 'bars'}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
            Proficiency Bars
          </button>
          <button
            type="button"
            onClick={() => setViewMode('badges')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition ${
              viewMode === 'badges'
                ? 'bg-sky-500 font-semibold text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            aria-pressed={viewMode === 'badges'}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
            </svg>
            Compact Badges
          </button>
        </div>
      </div>

      <div className="mt-2 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          const techItems = skill.technologies.map(getTechData);
          const validPercentages = techItems
            .map((t) => t.percentage)
            .filter((p) => typeof p === 'number');
          const avgPercentage = validPercentages.length
            ? Math.round(validPercentages.reduce((a, b) => a + b, 0) / validPercentages.length)
            : null;

          return (
            <article
              key={skill.category}
              className="group flex flex-col justify-between rounded-2xl border border-slate-700/80 bg-slate-900/60 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-sky-500/50 hover:bg-slate-900 hover:shadow-lg hover:shadow-sky-950/50"
            >
              <div>
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-400 transition group-hover:border-sky-400/60 group-hover:bg-sky-500/15">
                      {categoryIcons[skill.category] || (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                        </svg>
                      )}
                    </div>

                    <h3 className="text-base font-semibold text-white">
                      {skill.category}
                    </h3>
                  </div>

                  {avgPercentage !== null && (
                    <span
                      title={`Average Category Proficiency: ${avgPercentage}%`}
                      className="shrink-0 rounded-full border border-sky-500/30 bg-sky-500/10 px-2 py-0.5 font-mono text-[11px] font-semibold text-sky-300"
                    >
                      {avgPercentage}%
                    </span>
                  )}
                </div>

                <p className="mb-5 text-xs leading-relaxed text-slate-400">
                  {skill.description}
                </p>
              </div>

              {viewMode === 'bars' ? (
                <div className="space-y-2.5 pt-2">
                  {techItems.map((tech) => (
                    <div key={tech.name} className="group/item">
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-200 transition-colors group-hover/item:text-sky-300">
                          {tech.name}
                        </span>
                        {tech.percentage !== null && (
                          <span className="font-mono text-[11px] font-semibold text-sky-400">
                            {tech.percentage}%
                          </span>
                        )}
                      </div>
                      {tech.percentage !== null && (
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800/80">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-teal-300 transition-all duration-500 group-hover/item:brightness-125"
                            style={{ width: `${tech.percentage}%` }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {techItems.map((tech) => (
                    <span
                      key={tech.name}
                      className="inline-flex items-center gap-1.5 rounded-md border border-slate-700/80 bg-slate-950/60 px-2.5 py-1 text-xs font-medium text-slate-300 transition hover:border-sky-500/50 hover:text-white"
                    >
                      <span>{tech.name}</span>
                      {tech.percentage !== null && (
                        <span className="rounded bg-sky-500/15 px-1 py-0.5 font-mono text-[10px] font-semibold text-sky-400">
                          {tech.percentage}%
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;