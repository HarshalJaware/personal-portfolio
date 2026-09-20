
import SectionHeading from '../common/SectionHeading';

const About = () => {
  return (
    <section id="about" className="py-20">
      <SectionHeading
        eyebrow="ABOUT ME"
        title="Experience across products, platforms, and engineering domains"
        description="A practical full-stack developer focused on building maintainable software and solving real business problems."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-5 text-base leading-8 text-slate-300">
          <p>
            I am a Software Developer 2 with more than 8 years of experience
            developing web applications and enterprise software solutions.
          </p>

          <p>
            My experience includes full-stack development, backend API
            design, third-party API integrations, database optimization,
            and responsive frontend development.
          </p>

          <p>
            Currently, I contribute to engineering software products at
            Eiris Innovation India Pvt. Ltd., including PoleXpert,
            SimXpert, and the Eiris Platform.
          </p>

          <p>
            I enjoy converting business and engineering requirements into
            reliable, maintainable, and user-focused software functionality.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
          <h3 className="text-xl font-semibold text-white">
            Professional highlights
          </h3>

          <ul className="mt-6 space-y-4 text-slate-300">
            <li className="flex gap-3">
              <span className="text-sky-400">✓</span>
              8+ years of professional software development experience
            </li>

            <li className="flex gap-3">
              <span className="text-sky-400">✓</span>
              Full-stack development using React.js and Node.js
            </li>

            <li className="flex gap-3">
              <span className="text-sky-400">✓</span>
              REST API development and third-party API integrations
            </li>

            <li className="flex gap-3">
              <span className="text-sky-400">✓</span>
              Experience with PostgreSQL, MySQL, and database optimization
            </li>

            <li className="flex gap-3">
              <span className="text-sky-400">✓</span>
              Engineering applications and simulation workflows
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;