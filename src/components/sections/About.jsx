import SectionHeading from '../common/SectionHeading';

const About = () => {
  return (
    <section id="about" className="scroll-mt-20 py-20">
      <SectionHeading
        eyebrow="PROFESSIONAL PROFILE"
        title="Engineering reliable, scalable software across complex domains"
        description="A senior full-stack software engineer with 8 years and 9 months of professional experience transforming intricate business, financial, and engineering requirements into high-quality, production-grade solutions."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 text-base leading-relaxed text-slate-300">
          <p>
            I am a <strong className="text-white">Software Developer 2</strong> with over 8 years and 9 months of hands-on experience architecting and building scalable enterprise web applications, high-throughput backend services, and domain-specific engineering platforms using <strong className="text-white">Node.js, React.js, JavaScript (ES6+), TypeScript, AWS, System Design, Three.js (3JS), and PostgreSQL / MySQL</strong>.
          </p>

          <p>
            Throughout my career I have worked across diverse and technically demanding industries. At <strong className="text-white">Tagrem India</strong>, I engineered a multi-provider transportation dispatch platform processing high-volume ride bookings through Uber, Lyft, and Google Maps API integrations. At <strong className="text-white">Quality Horizon</strong>, I delivered a fully bespoke multi-module ERP system for UAE-based commercial enterprises covering HR, Financial Accounting, Sales, and Inventory. At <strong className="text-white">Knoxed Infotech</strong>, I led the design and delivery of an agile task management platform with deep Slack API collaboration automation.
          </p>

          <p>
            Currently at <strong className="text-white">Eiris Innovation India</strong>, I contribute to mission-critical electrical engineering software products — <strong className="text-white">PoleXpert</strong> for utility pole structural analysis, regulatory compliance, and interactive 3D model visualisation using <strong className="text-white">Three.js (3JS)</strong>, and <strong className="text-white">SimXpert</strong> for electrical power system simulation studies including Power Flow Analysis, Short-Circuit fault simulation, Motor Starting transient evaluation, and Single-Line Diagram (SLD) modelling.
          </p>

          <p>
            I take pride in writing clean, maintainable code guided by proven System Design principles and design patterns (MVC, Factory, Observer), designing optimal relational database schemas, and leveraging Agentic Coding workflows with GitHub Copilot to accelerate feature delivery while maintaining enterprise-grade engineering standards.
          </p>
        </div>

        <div className="space-y-6">
          {/* Key Competencies Card */}
          <div className="rounded-2xl border border-slate-700/80 bg-slate-900/60 p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white">
              Core Competencies
            </h3>

            <ul className="mt-5 space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-sky-400 font-bold mt-0.5">✓</span>
                <span><strong className="text-white">8 Years 9 Months</strong> of full-lifecycle SDLC software engineering across enterprise, product, and consulting environments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sky-400 font-bold mt-0.5">✓</span>
                <span><strong className="text-white">System Design & Architecture:</strong> Scalable high-concurrency systems, SOLID principles, design patterns (MVC, Factory, Observer, Singleton), and clean architecture</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sky-400 font-bold mt-0.5">✓</span>
                <span><strong className="text-white">Engineering Domain & 3D:</strong> Interactive 3D structural rendering with Three.js (3JS), electrical power system simulation, and SLD network modelling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sky-400 font-bold mt-0.5">✓</span>
                <span><strong className="text-white">Enterprise API Integrations:</strong> Uber, Lyft, Google Maps, Slack, Zoho CRM, QuickBooks, and REST webhook pipelines</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sky-400 font-bold mt-0.5">✓</span>
                <span><strong className="text-white">Database Engineering:</strong> PostgreSQL and MySQL schema design, Sequelize ORM, query optimisation, and performance tuning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sky-400 font-bold mt-0.5">✓</span>
                <span><strong className="text-white">Cloud, DevOps & Agentic AI:</strong> AWS (EC2, S3, RDS), Azure DevOps, CI/CD pipelines, Terraform, and Agentic Coding with GitHub Copilot</span>
              </li>
            </ul>
          </div>

          {/* Education & Professional Details */}
          <div className="rounded-2xl border border-slate-700/80 bg-slate-900/60 p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white">
              Academic Background & Details
            </h3>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 text-sm">
              <div>
                <p className="font-medium text-white">Master of Computer Applications</p>
                <p className="text-xs font-semibold text-sky-400 mt-0.5">MCA · 2017</p>
                <p className="text-xs text-slate-400">North Maharashtra University (NMU)</p>
              </div>

              <div>
                <p className="font-medium text-white">Bachelor of Computer Applications</p>
                <p className="text-xs font-semibold text-sky-400 mt-0.5">BCA · 2014</p>
                <p className="text-xs text-slate-400">North Maharashtra University (NMU)</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Location</p>
                <p className="text-sm font-medium text-slate-200 mt-0.5">Pune, Maharashtra, India</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Notice Period</p>
                <p className="text-sm font-medium text-emerald-400 mt-0.5">1 Month · Immediate Discussion Welcome</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;