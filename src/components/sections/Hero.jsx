
import Button from '../common/Button';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-sky-500/5" />

      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            Full-Stack Developer · 8+ Years Experience
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building reliable and scalable web applications.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Software Developer 2 specializing in React.js, Node.js,
            JavaScript, and PostgreSQL. I build enterprise applications,
            backend APIs, and engineering software that translate complex
            requirements into practical solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#projects">
              View Projects
            </Button>

            <Button href="#contact" variant="secondary">
              Let's Connect
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-5 text-sm">
            <a
              href="https://github.com/HarshalJaware"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 transition hover:text-sky-400"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/harshal-jaware-7714b4135/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 transition hover:text-sky-400"
            >
              LinkedIn ↗
            </a>

            <a
              href="mailto:jawareharshal93@gmail.com"
              className="text-slate-300 transition hover:text-sky-400"
            >
              Email ↗
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-6 shadow-2xl shadow-sky-950/30">
          <p className="text-sm font-medium text-sky-400">
            CURRENT FOCUS
          </p>

          <h2 className="mt-4 text-2xl font-semibold text-white">
            Engineering software and full-stack development
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            Contributing to engineering applications involving structural
            analysis, power-system simulation, and reusable platform
            functionality.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              'React.js',
              'Node.js',
              'PostgreSQL',
              'REST APIs',
              'Azure DevOps',
              'TypeScript',
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;