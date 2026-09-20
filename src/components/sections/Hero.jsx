import Button from '../common/Button';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
      {/* Ambient glow background */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        {/* ── Left: Identity & CTAs ── */}
        <div>
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-sky-400">
            <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
            <span>Available for Senior Full-Stack & Node.js Backend Roles · 8 Yrs 9 Months Experience</span>
          </div>

          {/* Name & title */}
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-300">
              Harshal Arun Jaware
            </span>
          </h1>

          <p className="mt-3 text-lg font-medium text-slate-300 sm:text-xl">
            Senior Software Developer & Full-Stack Engineer
          </p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Specialising in{' '}
            <span className="text-white font-medium">Node.js, React.js, PostgreSQL, AWS, System Design, Three.js (3JS), and Agentic Coding</span>.{' '}
            Over 8 years and 9 months designing and delivering production-grade enterprise software — from high-throughput transportation dispatch systems with Uber & Lyft integrations, to 3D electrical engineering simulation platforms and modular ERP solutions.
          </p>

          {/* Primary CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              href="./Harshal_Jaware_Senior_Full_Stack_Developer_Resume.pdf"
              download="Harshal_Jaware_Senior_Full_Stack_Developer_Resume.pdf"
              variant="primary"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Full CV</span>
            </Button>

            <Button href="#projects" variant="secondary">
              View Featured Work
            </Button>

            <Button href="#contact" variant="outline">
              Let's Connect →
            </Button>
          </div>

          {/* Social quick links */}
          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm">
            <a
              href="https://github.com/HarshalJaware"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-slate-300 transition hover:text-sky-400"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/harshal-jaware-7714b4135/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-slate-300 transition hover:text-sky-400"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
              </svg>
              <span>LinkedIn</span>
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="mailto:jawareharshal93@gmail.com"
              className="inline-flex items-center gap-1.5 text-slate-300 transition hover:text-sky-400"
            >
              <span>✉ jawareharshal93@gmail.com</span>
            </a>

            <span className="text-slate-500" aria-hidden="true">·</span>
            <span className="text-slate-400">Pune, India</span>
          </div>

          {/* Professional Metrics */}
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-800/80 pt-6">
            <div>
              <p className="text-2xl font-bold text-white sm:text-3xl">8.9 <span className="text-sky-400 text-lg sm:text-xl font-normal">Years</span></p>
              <p className="mt-1 text-xs text-slate-400 font-medium">Professional Engineering</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white sm:text-3xl">5 <span className="text-sky-400 text-lg sm:text-xl font-normal">Companies</span></p>
              <p className="mt-1 text-xs text-slate-400 font-medium">Enterprise & Product Firms</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white sm:text-3xl">10+ <span className="text-sky-400 text-lg sm:text-xl font-normal">APIs</span></p>
              <p className="mt-1 text-xs text-slate-400 font-medium">Production Integrations</p>
            </div>
          </div>
        </div>

        {/* ── Right: Profile Photo + Current Engagement Card ── */}
        <div className="flex flex-col gap-6">

          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-sky-400 via-indigo-400 to-sky-600 opacity-60 blur-sm" aria-hidden="true" />
              {/* Photo ring border */}
              <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-slate-950 shadow-2xl shadow-sky-500/20 sm:h-52 sm:w-52">
                <img
                  src="./profile.jpg"
                  alt="Harshal Arun Jaware — Senior Software Developer"
                  className="h-full w-full object-cover object-[center_20%]"
                  loading="eager"
                />
              </div>
              {/* Availability dot */}
              <span
                className="absolute bottom-3 right-3 flex h-5 w-5 items-center justify-center rounded-full border-2 border-slate-950 bg-emerald-400 shadow-lg"
                title="Open to opportunities"
                aria-label="Currently available"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-300 animate-ping" />
              </span>
            </div>
          </div>

          {/* Current Engagement Card */}
          <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-5 sm:p-6 shadow-2xl shadow-sky-950/40 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
                CURRENT ENGAGEMENT
              </p>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Active
              </span>
            </div>

            <h2 className="mt-3 text-base font-semibold text-white leading-snug">
              Electrical Engineering Software & Power Systems Simulation
            </h2>

            <div className="mt-4 space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <span className="text-sky-400 mt-0.5">▹</span>
                <span><strong className="text-white">PoleXpert:</strong> 3D utility pole structural analysis & Three.js (3JS) visualisation</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-sky-400 mt-0.5">▹</span>
                <span><strong className="text-white">SimXpert:</strong> Power Flow, Short-Circuit & Motor Starting Analysis</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-sky-400 mt-0.5">▹</span>
                <span><strong className="text-white">Eiris Platform:</strong> Shared micro-services, System Design & engineering libraries</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-sky-400 mt-0.5">▹</span>
                <span><strong className="text-white">Agentic Coding:</strong> GitHub Copilot & AI workflows for rapid, reliable delivery</span>
              </div>
            </div>

            <div className="mt-4 border-t border-slate-800 pt-4">
              <div className="flex flex-wrap gap-1.5">
                {['Node.js', 'React.js', 'Three.js (3JS)', 'System Design', 'PostgreSQL', 'AWS', 'Agentic Coding', 'GitHub Copilot'].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-slate-700/80 bg-slate-950/70 px-2 py-0.5 text-[11px] text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;