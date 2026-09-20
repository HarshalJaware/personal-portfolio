import SectionHeading from '../common/SectionHeading';
import { skills } from '../../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <SectionHeading
        eyebrow="SKILLS"
        title="Technologies I use to build practical software"
        description="A collection of technologies and engineering practices developed through professional full-stack development experience."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <article
            key={skill.category}
            className="group rounded-2xl border border-slate-700 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-500/50 hover:bg-slate-900"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">
                {skill.category}
              </h3>

              <span className="text-sky-400 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>

            <p className="mb-6 text-sm leading-6 text-slate-400">
              {skill.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {skill.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-sky-500/50 hover:text-sky-400"
                >
                  {technology}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;