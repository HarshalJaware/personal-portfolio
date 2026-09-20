
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main>
        <Container>
          <Hero />
          <About />

          <section id="skills" className="min-h-40 py-20">
            <h2 className="text-2xl font-bold">Skills</h2>
          </section>

          <section id="projects" className="min-h-40 py-20">
            <h2 className="text-2xl font-bold">Projects</h2>
          </section>

          <section id="contact" className="min-h-40 py-20">
            <h2 className="text-2xl font-bold">Contact</h2>
          </section>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default App;