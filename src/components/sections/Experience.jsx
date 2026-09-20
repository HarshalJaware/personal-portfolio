import SectionHeading from '../common/SectionHeading';
import { experience } from '../../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <SectionHeading
        eyebrow="EXPERIENCE"
        title="Professional experience"
        description="More than 8 years of experience developing web applications, enterprise software, APIs, and engineering solutions."
      />

      <div className="relative mt-12">
        <div className="absolute left-[7px] top-2 hidden h-[calc(100%-8px)] w-px bg-slate-700 sm:block" />

        <div className="space-y-10">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="relative sm:pl-10"
            >
              <span className="absolute left-0 top-2 hidden h-4 w-4 rounded-full border-4 border-slate-950 bg-sky-400 sm:block" />

              <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6 transition duration-300 hover:border-sky-500/50">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-sky-400">
                      {item.period}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold text-white">
                      {item.role}
                    </h3>

                    <p className="mt-1 text-slate-400">
                      {item.company}
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-7 text-slate-300">
                  {item.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {item.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex gap-3 text-sm leading-6 text-slate-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
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