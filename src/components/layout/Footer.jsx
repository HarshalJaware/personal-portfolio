import Container from './Container';

function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 text-center text-sm text-slate-400 sm:flex-row sm:text-left">
          <div>
            <p className="font-semibold text-white">
              Harshal Arun Jaware
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Senior Software Developer · Node.js, React.js & PostgreSQL
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="https://github.com/HarshalJaware"
              target="_blank"
              rel="noreferrer noopener"
              className="text-slate-400 transition hover:text-sky-400"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/harshal-jaware-7714b4135/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-slate-400 transition hover:text-sky-400"
            >
              LinkedIn
            </a>
            <a
              href="./Harshal_Jaware_Senior_Full_Stack_Developer_Resume.pdf"
              download="Harshal_Jaware_Senior_Full_Stack_Developer_Resume.pdf"
              className="text-sky-400 transition hover:underline"
            >
              Professional CV
            </a>
          </div>

          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Harshal Jaware. Built with React & Tailwind CSS.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;