import { useState, useEffect } from 'react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

const ROLE_PRESETS = [
  'Senior Full-Stack Developer',
  'Software Developer 2',
  'Lead Node.js / React Engineer',
  'Senior Frontend & 3D WebGL Developer',
  'Backend & Systems Architect',
];

const TEMPLATES = [
  { id: 'fullstack', label: 'Full-Stack Senior (Default)' },
  { id: 'frontend', label: 'Frontend & 3D WebGL' },
  { id: 'backend', label: 'Backend & API Architecture' },
  { id: 'agentic', label: 'AI-Assisted & Agentic Engineering' },
];

const STORAGE_KEY = 'harshal_portfolio_job_applications';

const generateDefaultPitch = ({ company, role, template, includeResume, includePortfolio }) => {
  const companyClean = company.trim();
  const roleClean = role.trim() || 'Senior Full-Stack Developer';
  const compPhrase = companyClean ? ` at ${companyClean}` : '';

  const origin = typeof window !== 'undefined' && window.location.origin
    ? window.location.origin
    : 'https://harshaljaware.github.io/personal-portfolio';

  const resumeUrl = `${origin}/Harshal_Jaware_Senior_Full_Stack_Developer_Resume.pdf`;
  const portfolioUrl = `${origin}/#skills`;

  let roleSummary = '';
  if (template === 'frontend') {
    roleSummary = `With over 8 years and 9 months of engineering experience, I specialize in building performant, responsive web applications with React.js, TypeScript, Next.js, and interactive 3D WebGL / Three.js visual systems (including spatial structural inspection tools and interactive diagrams).`;
  } else if (template === 'backend') {
    roleSummary = `With over 8 years and 9 months of backend and API engineering experience, I specialize in architecting high-throughput Node.js/Express services, distributed PostgreSQL/MySQL schemas, micro-integrations, and resilient cloud infrastructure on AWS.`;
  } else if (template === 'agentic') {
    roleSummary = `With over 8 years and 9 months of full-stack engineering experience, I specialize in high-velocity product engineering combining modern React, Node.js, and Agentic Coding workflows (GitHub Copilot, autonomous AI agent tooling) to build reliable, production-tested software.`;
  } else {
    roleSummary = `With over 8 years and 9 months of comprehensive software engineering experience, I specialize in full-stack architecture with React.js, Node.js, PostgreSQL, AWS, and complex engineering domain applications (real-time mobility platforms, electrical simulation, and enterprise ERPs).`;
  }

  return `Dear Hiring Team${compPhrase ? ` at ${companyClean}` : ''},

I am writing to express my strong interest in the ${roleClean} position${compPhrase}.

${roleSummary}

Key Highlights of My Experience:
• 8.9+ Years of Enterprise Software Delivery: Currently Software Developer 2 at Eiris Innovation (interactive 3D structural modeling with Three.js & electrical simulation SLDs) and previously 4 years at Tagrem India architecting the On-The-Go multi-provider mobility platform.
• Production Technical Stack: React.js (95%), Node.js (95%), TypeScript (88%), Express.js (94%), PostgreSQL (94%), Three.js/WebGL (85%), AWS, RESTful APIs, and System Design.
• Scalable Architecture & Clean Code: Proven track record applying MVC, Factory, and Observer patterns, optimizing high-volume SQL queries, and integrating enterprise third-party APIs (Google Maps, Uber/Lyft, Zoho CRM, QuickBooks).
• High Development Velocity: Active practitioner of Agentic Coding and AI-augmented software workflows to deliver robust features with speed and clean test coverage.

${includeResume ? `📄 Direct Resume PDF: ${resumeUrl}\n` : ''}${includePortfolio ? `🌐 Live Portfolio & Tech Stack: ${portfolioUrl}\n` : ''}
Key Information:
• Current Location: Pune, Maharashtra, India
• Notice Period: 1 Month
• Email: jawareharshal93@gmail.com
• Phone: (+91) 9860451556
• LinkedIn: https://www.linkedin.com/in/harshal-jaware-7714b4135/
• GitHub: https://github.com/HarshalJaware

I would welcome the opportunity to discuss how my technical expertise and problem-solving mindset can contribute to your engineering goals${compPhrase}.

Thank you for your time and consideration.

Warm regards,
Harshal Jaware
Senior Software Developer`;
};

const QuickApply = () => {
  const [recipientEmail, setRecipientEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobRole, setJobRole] = useState('Senior Full-Stack Developer');
  const [template, setTemplate] = useState('fullstack');
  const [includeResume, setIncludeResume] = useState(true);
  const [includePortfolio, setIncludePortfolio] = useState(true);
  const [customSubject, setCustomSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isManualEdit, setIsManualEdit] = useState(false);
  const [error, setError] = useState('');
  const [copyStatus, setCopyStatus] = useState(false);
  const [recentApplications, setRecentApplications] = useState([]);
  const [dispatchStatus, setDispatchStatus] = useState('');

  // Load past applications from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setRecentApplications(JSON.parse(stored));
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  // Update auto-generated message when inputs change (unless manually edited)
  useEffect(() => {
    const defaultSubject = `Job Application: ${jobRole.trim() || 'Senior Full-Stack Developer'} — Harshal Jaware${
      companyName.trim() ? ` (${companyName.trim()})` : ''
    }`;

    if (!isManualEdit) {
      setCustomSubject(defaultSubject);
      setMessage(
        generateDefaultPitch({
          company: companyName,
          role: jobRole,
          template,
          includeResume,
          includePortfolio,
        })
      );
    }
  }, [companyName, jobRole, template, includeResume, includePortfolio, isManualEdit]);

  const handleResetToAuto = () => {
    setIsManualEdit(false);
    const defaultSubject = `Job Application: ${jobRole.trim() || 'Senior Full-Stack Developer'} — Harshal Jaware${
      companyName.trim() ? ` (${companyName.trim()})` : ''
    }`;
    setCustomSubject(defaultSubject);
    setMessage(
      generateDefaultPitch({
        company: companyName,
        role: jobRole,
        template,
        includeResume,
        includePortfolio,
      })
    );
  };

  const validateForm = () => {
    if (!recipientEmail.trim()) {
      setError('Please enter the recipient email address (e.g. recruiter@company.com).');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipientEmail.trim())) {
      setError('Please enter a valid email address.');
      return false;
    }
    if (!message.trim()) {
      setError('Message body cannot be empty.');
      return false;
    }
    setError('');
    return true;
  };

  const saveToHistory = (channel) => {
    const newEntry = {
      id: Date.now(),
      email: recipientEmail.trim(),
      company: companyName.trim() || 'Undisclosed Company',
      role: jobRole.trim() || 'Senior Full-Stack Developer',
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      channel,
    };

    const updated = [newEntry, ...recentApplications.slice(0, 9)];
    setRecentApplications(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const handleSendGmail = () => {
    if (!validateForm()) return;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      recipientEmail.trim()
    )}&su=${encodeURIComponent(customSubject)}&body=${encodeURIComponent(message)}`;

    saveToHistory('Gmail Web');
    setDispatchStatus('Opening Gmail Web Composer with your pitch and resume link...');
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSendDefaultMail = () => {
    if (!validateForm()) return;

    const mailtoUrl = `mailto:${encodeURIComponent(
      recipientEmail.trim()
    )}?subject=${encodeURIComponent(customSubject)}&body=${encodeURIComponent(message)}`;

    saveToHistory('Mail Client');
    setDispatchStatus('Launching your default mail client with your pitch and resume link...');
    window.location.href = mailtoUrl;
  };

  const handleCopyPitch = async () => {
    if (!validateForm()) return;

    try {
      const fullText = `Subject: ${customSubject}\n\n${message}`;
      await navigator.clipboard.writeText(fullText);
      setCopyStatus(true);
      setDispatchStatus('Full pitch and resume link copied to clipboard!');
      saveToHistory('Clipboard');
      setTimeout(() => setCopyStatus(false), 3500);
    } catch {
      setError('Failed to copy text. Please select and copy manually from the preview.');
    }
  };

  const handleClearHistory = () => {
    setRecentApplications([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  return (
    <section id="quick-apply" className="scroll-mt-24 py-20">
      <SectionHeading
        eyebrow="DIRECT JOB APPLICATION OUTREACH"
        title="Apply directly to any opening in seconds"
        description="Spot an open engineering role on LinkedIn, Wellfound, or a company careers page? Enter the hiring email below to auto-generate a tailored pitch with Harshal's resume, core technical stack, and verified experience."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-12">
        {/* Left Column: Form Controls (5 Cols) */}
        <div className="space-y-6 lg:col-span-5">
          <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6 backdrop-blur-sm">
            <h3 className="text-base font-semibold text-white">
              Target Opening Details
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              Fill in the opening specifics to tailor the application pitch.
            </p>

            <div className="mt-5 space-y-4">
              {/* Recipient Email */}
              <div>
                <label
                  htmlFor="quick-apply-email"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-sky-400"
                >
                  Recruiter / Hiring Email *
                </label>
                <input
                  id="quick-apply-email"
                  type="email"
                  value={recipientEmail}
                  onChange={(e) => {
                    setRecipientEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="e.g. jobs@stripe.com or recruiter@google.com"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                />
              </div>

              {/* Company Name */}
              <div>
                <label
                  htmlFor="quick-apply-company"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  Company Name (Optional)
                </label>
                <input
                  id="quick-apply-company"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Stripe, Innovaccer, Datadog"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                />
              </div>

              {/* Job Role Title */}
              <div>
                <label
                  htmlFor="quick-apply-role"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  Role / Position Title
                </label>
                <input
                  id="quick-apply-role"
                  type="text"
                  value={jobRole}
                  onChange={(e) => setJobRole(e.target.value)}
                  placeholder="e.g. Senior Full-Stack Developer"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                />

                {/* Quick Role Select Chips */}
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {ROLE_PRESETS.map((rolePreset) => (
                    <button
                      key={rolePreset}
                      type="button"
                      onClick={() => setJobRole(rolePreset)}
                      className={`rounded-md border px-2 py-0.5 text-[11px] font-medium transition ${
                        jobRole === rolePreset
                          ? 'border-sky-400 bg-sky-500/20 text-sky-300'
                          : 'border-slate-800 bg-slate-950/80 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      {rolePreset}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pitch Focus Template */}
              <div>
                <label
                  htmlFor="quick-apply-template"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  Technical Focus Template
                </label>
                <select
                  id="quick-apply-template"
                  value={template}
                  onChange={(e) => setTemplate(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white outline-none transition focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                >
                  {TEMPLATES.map((t) => (
                    <option key={t.id} value={t.id} className="bg-slate-950 text-white">
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Toggles */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <label className="flex items-center gap-2.5 text-xs text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeResume}
                    onChange={(e) => setIncludeResume(e.target.checked)}
                    className="h-4 w-4 rounded border-slate-700 bg-slate-950 text-sky-500 focus:ring-sky-400"
                  />
                  <span>Include direct link to verified Resume PDF</span>
                </label>

                <label className="flex items-center gap-2.5 text-xs text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includePortfolio}
                    onChange={(e) => setIncludePortfolio(e.target.checked)}
                    className="h-4 w-4 rounded border-slate-700 bg-slate-950 text-sky-500 focus:ring-sky-400"
                  />
                  <span>Include live portfolio URL & interactive tech showcase</span>
                </label>
              </div>

              {error && (
                <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-400">
                  {error}
                </div>
              )}
            </div>
          </div>

          {/* Verified Resume Card */}
          <div className="rounded-xl border border-sky-500/30 bg-sky-950/20 p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-sky-500/40 bg-sky-500/10 text-sky-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">
                    Harshal Jaware Resume (PDF)
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    Senior Full Stack Developer • ~101 KB
                  </p>
                </div>
              </div>

              <a
                href="./Harshal_Jaware_Senior_Full_Stack_Developer_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="shrink-0 rounded-lg border border-sky-500/40 bg-sky-500/10 px-3 py-1.5 text-xs font-semibold text-sky-400 transition hover:bg-sky-500 hover:text-slate-950"
              >
                View PDF ↗
              </a>
            </div>
          </div>

          {/* Recent Applications History */}
          {recentApplications.length > 0 && (
            <div className="rounded-xl border border-slate-700/80 bg-slate-900/60 p-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Recent Dispatches ({recentApplications.length})
                </h4>
                <button
                  type="button"
                  onClick={handleClearHistory}
                  className="text-[11px] text-slate-500 transition hover:text-red-400"
                >
                  Clear History
                </button>
              </div>

              <div className="mt-3 space-y-2 max-h-48 overflow-y-auto pr-1">
                {recentApplications.map((app) => (
                  <div
                    key={app.id}
                    className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/60 p-2.5 text-xs"
                  >
                    <div className="truncate pr-2">
                      <p className="font-medium text-slate-200 truncate">
                        {app.company} — <span className="text-slate-400">{app.role}</span>
                      </p>
                      <p className="text-[11px] text-sky-400 truncate">{app.email}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <span className="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[10px] text-slate-400">
                        {app.channel}
                      </span>
                      <p className="mt-0.5 text-[10px] text-slate-500">{app.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Live Message Preview & Actions (7 Cols) */}
        <div className="space-y-6 lg:col-span-7">
          <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6 backdrop-blur-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-base font-semibold text-white">
                  Generated Email Pitch
                </h3>
                <p className="text-xs text-slate-400">
                  {isManualEdit ? 'Customized (manual edit mode)' : 'Auto-tailored based on inputs'}
                </p>
              </div>

              {isManualEdit && (
                <button
                  type="button"
                  onClick={handleResetToAuto}
                  className="rounded-lg border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs text-slate-300 transition hover:border-sky-400 hover:text-white"
                >
                  ↺ Reset to Auto
                </button>
              )}
            </div>

            {/* Subject Line Field */}
            <div className="mt-4">
              <label
                htmlFor="quick-apply-subject"
                className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-400"
              >
                Subject Line
              </label>
              <input
                id="quick-apply-subject"
                type="text"
                value={customSubject}
                onChange={(e) => {
                  setCustomSubject(e.target.value);
                  setIsManualEdit(true);
                }}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs font-medium text-slate-200 outline-none transition focus:border-sky-400"
              />
            </div>

            {/* Message Body Field */}
            <div className="mt-4">
              <label
                htmlFor="quick-apply-message"
                className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-400"
              >
                Email Body & Pitch Description
              </label>
              <textarea
                id="quick-apply-message"
                rows={14}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setIsManualEdit(true);
                }}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3.5 font-mono text-xs leading-relaxed text-slate-200 outline-none transition focus:border-sky-400"
              />
            </div>

            {/* Dispatch Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleSendGmail}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-red-950/50 transition hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 cursor-pointer"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.573l8.073-6.08c1.618-1.214 3.927-.059 3.927 1.964z" />
                </svg>
                <span>Send via Gmail</span>
              </button>

              <Button type="button" onClick={handleSendDefaultMail}>
                ✉️ Send via Default Mail
              </Button>

              <button
                type="button"
                onClick={handleCopyPitch}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-xs font-semibold text-slate-200 transition hover:border-sky-400 hover:text-white cursor-pointer"
              >
                {copyStatus ? 'Copied to Clipboard! ✓' : '📋 Copy Pitch & Link'}
              </button>
            </div>

            {dispatchStatus && (
              <p role="status" className="mt-3 text-xs text-sky-400 animate-fade-in">
                {dispatchStatus}
              </p>
            )}

            <p className="mt-4 text-[11px] text-slate-500 leading-relaxed">
              💡 Clicking <strong className="text-slate-400">Send via Gmail</strong> or <strong className="text-slate-400">Default Mail</strong> immediately opens your mail composer with the recipient, subject line, cover description, and verified resume link pre-filled. You can review and dispatch directly from your genuine email address.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickApply;
