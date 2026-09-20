import { useState, useEffect } from 'react';
import Container from './Container';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Video', href: '#video-profile' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <Container>
        <nav
          aria-label="Main Navigation"
          className="flex h-20 items-center justify-between"
        >
          <a
            href="#home"
            className="group flex flex-col focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-lg p-1"
          >
            <span className="text-xl font-bold tracking-tight text-white transition group-hover:text-sky-400">
              Harshal Jaware
            </span>
            <span className="text-[11px] font-medium tracking-wide text-slate-400">
              Senior Software Developer
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-7 md:flex">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-sky-400 focus:outline-none focus:text-sky-400"
              >
                {item.label}
              </a>
            ))}

            <a
              href="./Harshal_Jaware_Senior_Full_Stack_Developer_Resume.pdf"
              download="Harshal_Jaware_Senior_Full_Stack_Developer_Resume.pdf"
              className="inline-flex items-center gap-1.5 rounded-lg border border-sky-500/40 bg-sky-500/10 px-3.5 py-1.5 text-xs font-semibold text-sky-400 transition hover:bg-sky-500 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <span>Resume</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="./Harshal_Jaware_Senior_Full_Stack_Developer_Resume.pdf"
              download="Harshal_Jaware_Senior_Full_Stack_Developer_Resume.pdf"
              className="inline-flex items-center rounded-lg border border-sky-500/40 bg-sky-500/10 px-2.5 py-1.5 text-xs font-semibold text-sky-400"
            >
              CV ↓
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900 p-2 text-slate-300 transition hover:border-sky-400 hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-x-0 top-20 bottom-0 z-50 bg-slate-950/98 px-6 py-8 backdrop-blur-xl md:hidden overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="flex flex-col space-y-4">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="rounded-xl border border-slate-800/80 bg-slate-900/50 px-4 py-3 text-base font-medium text-slate-200 transition hover:border-sky-500/50 hover:bg-slate-900 hover:text-sky-400"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-4">
              <a
                href="./Harshal_Jaware_Senior_Full_Stack_Developer_Resume.pdf"
                download="Harshal_Jaware_Senior_Full_Stack_Developer_Resume.pdf"
                onClick={handleLinkClick}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-4 py-3 text-center text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 hover:bg-sky-400"
              >
                <span>Download CV</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;