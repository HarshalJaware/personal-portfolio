import Container from './Container';

function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-400 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Harshal. All rights reserved.
          </p>

          <p>Built with React and Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;