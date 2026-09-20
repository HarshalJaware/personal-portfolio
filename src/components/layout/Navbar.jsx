import Container from './Container';

function Navbar() {
  const navigationItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <a
            href="#home"
            className="text-xl font-bold text-slate-100"
          >
            Harshal<span className="text-sky-400">.</span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 transition-colors hover:text-sky-400"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;