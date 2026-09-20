
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import VideoProfile from './components/sections/VideoProfile';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import QuickApply from './components/sections/QuickApply';
import Contact from './components/sections/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main>
        <Container>
          <Hero />
          <About />
          <VideoProfile />
          <Skills />
          <Experience />
          <Projects />
          <QuickApply />
          <Contact />
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default App;