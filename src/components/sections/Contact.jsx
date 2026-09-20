import { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!form.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    return newErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: '',
    }));

    setStatus('');
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('jawareharshal93@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus('');
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio Contact - ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href =
      `mailto:jawareharshal93@gmail.com?subject=${subject}&body=${body}`;

    setStatus('Your email client should open shortly.');
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20">
      <SectionHeading
        eyebrow="CONTACT"
        title="Let's connect and build something meaningful"
        description="Have a project, opportunity, or technical discussion in mind? Feel free to reach out."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Get in touch
            </h3>

            <p className="mt-4 leading-relaxed text-slate-400">
              I am open to discussing senior full-stack engineering roles, Node.js backend architecture, enterprise platform development, and complex domain-specific software challenges.
            </p>
          </div>

          {/* Quick Copy Email Box */}
          <div className="rounded-xl border border-slate-700/80 bg-slate-900/60 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Direct Email
            </p>
            <div className="mt-2 flex items-center justify-between gap-3">
              <a
                href="mailto:jawareharshal93@gmail.com"
                className="text-sm font-medium text-sky-400 transition hover:underline truncate"
              >
                jawareharshal93@gmail.com
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="shrink-0 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:border-sky-400 hover:text-white cursor-pointer"
              >
                {copied ? 'Copied ✓' : 'Copy'}
              </button>
            </div>
          </div>

          <div className="space-y-3.5 text-sm">
            <div className="flex items-center gap-3 text-slate-300">
              <span className="text-sky-400 font-semibold">Phone:</span>
              <a href="tel:+919860451556" className="transition hover:text-sky-400">
                (+91) 9860451556
              </a>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <span className="text-sky-400 font-semibold">Location:</span>
              <span>Pune, Maharashtra, India</span>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <span className="text-sky-400 font-semibold">Notice:</span>
              <span className="text-emerald-400 font-medium">1 Month Notice Period</span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-4 text-sm">
            <a
              href="https://github.com/HarshalJaware"
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-2 text-slate-300 transition hover:border-sky-400 hover:text-sky-400"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/harshal-jaware-7714b4135/"
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-2 text-slate-300 transition hover:border-sky-400 hover:text-sky-400"
            >
              LinkedIn ↗
            </a>

            <a
              href="./Harshal_Jaware_Senior_Full_Stack_Developer_Resume.pdf"
              download="Harshal_Jaware_Senior_Full_Stack_Developer_Resume.pdf"
              className="rounded-lg border border-sky-500/40 bg-sky-500/10 px-4 py-2 text-sky-400 transition hover:bg-sky-500 hover:text-slate-950"
            >
              Download Resume ↓
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-sm"
        >
          <div className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400"
              />

              {errors.name && (
                <p id="name-error" className="mt-2 text-sm text-red-400">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400"
              />

              {errors.email && (
                <p id="email-error" className="mt-2 text-sm text-red-400">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your opportunity..."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className="w-full resize-y rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400"
              />

              {errors.message && (
                <p id="message-error" className="mt-2 text-sm text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            <Button type="submit">
              Send Message →
            </Button>

            {status && (
              <p role="status" className="text-sm text-sky-400">
                {status}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;