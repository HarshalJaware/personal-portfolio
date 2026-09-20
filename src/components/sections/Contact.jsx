
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

      <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Get in touch
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              I'm open to discussing software development,
              engineering applications, and professional opportunities.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="mailto:jawareharshal93@gmail.com"
              className="block text-slate-300 transition hover:text-sky-400"
            >
              ✉ jawareharshal93@gmail.com
            </a>

            <a
              href="https://github.com/HarshalJaware"
              target="_blank"
              rel="noreferrer"
              className="block text-slate-300 transition hover:text-sky-400"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/harshal-jaware-7714b4135/"
              target="_blank"
              rel="noreferrer"
              className="block text-slate-300 transition hover:text-sky-400"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6 sm:p-8"
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