import SectionHeading from '../common/SectionHeading';
import { experience } from '../../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-20 py-20">
      <SectionHeading
        eyebrow="CAREER HISTORY"
        title="8 years 9 months delivering enterprise software at scale"
        description="A progressive engineering career spanning transportation dispatch, business ERP, agile collaboration tools, electrical engineering simulation, and full-stack enterprise platform development."
      />

      <div className="relative mt-12">
        {/* Timeline vertical connector */}
        <div
          className="absolute left-[7px] top-4 hidden h-[calc(100%-20px)] w-0.5 bg-gradient-to-b from-sky-400/80 via-slate-700 to-slate-800 sm:block"
          aria-hidden="true"
        />

        <div className="space-y-10">
          {experience.map((item, index) => (
            <article
              key={`${item.company}-${item.role}-${index}`}
              className="relative sm:pl-10"
            >
              {/* Timeline node */}
              <span
                className="absolute left-0 top-6 hidden h-4 w-4 rounded-full border-4 border-slate-950 bg-sky-400 shadow-lg shadow-sky-400/30 sm:block"
                aria-hidden="true"
              />

              <div className="rounded-2xl border border-slate-700/80 bg-slate-900/60 p-6 sm:p-7 backdrop-blur-sm transition duration-300 hover:border-sky-500/40 hover:bg-slate-900/80 hover:shadow-lg hover:shadow-sky-950/40">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-white">
                        {item.role}
                      </h3>
                    </div>

                    <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span className="text-base font-semibold text-sky-400">
                        {item.company}
                      </span>
                      <span className="text-slate-600" aria-hidden="true">·</span>
                      <span className="text-xs font-medium text-slate-400">
                        {item.period}
                      </span>
                      {item.duration && item.duration !== 'Current Role' && (
                        <>
                          <span className="text-slate-600" aria-hidden="true">·</span>
                          <span className="text-xs font-medium text-slate-500">
                            {item.duration}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {item.duration === 'Current Role' && (
                    <span className="self-start rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                      Current Role
                    </span>
                  )}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-300 border-l-2 border-sky-500/30 pl-4 italic">
                  {item.description}
                </p>

                {/* Responsibilities */}
                <div className="mt-6">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Key Responsibilities & Engineering Contributions
                  </p>
                  <ul className="space-y-2.5">
                    {item.responsibilities.map((responsibility, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm leading-relaxed text-slate-300"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" aria-hidden="true" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Stack */}
                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-slate-800/80 pt-4">
                  {item.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-slate-700/80 bg-slate-950/80 px-2.5 py-1 text-xs font-medium text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;