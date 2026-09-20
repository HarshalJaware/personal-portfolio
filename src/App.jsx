import Button from './components/common/Button';
import SectionHeading from './components/common/SectionHeading';
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <main>
        <section id="home" className="py-24 sm:py-32">
          <Container>
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-400">
                Full-Stack Developer
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-6xl">
                Building software with thoughtful engineering.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Welcome to my personal portfolio. Explore my technical
                experience, projects, and development journey.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="#projects">
                  View Projects
                </Button>

                <Button href="#contact" variant="secondary">
                  Contact Me
                </Button>
              </div>
            </div>
          </Container>
        </section>

        <section id="about" className="py-24">
          <Container>
            <SectionHeading
              eyebrow="About"
              title="Designing the foundation"
              description="This section will be replaced with your real professional information in Milestone 3."
            />
          </Container>
        </section>

        <section id="skills" className="py-24">
          <Container>
            <SectionHeading
              eyebrow="Skills"
              title="Technologies I work with"
              description="Skills and technology categories will be added in Milestone 4."
            />
          </Container>
        </section>

        <section id="projects" className="py-24">
          <Container>
            <SectionHeading
              eyebrow="Projects"
              title="Selected work"
              description="Project case studies will be added in Milestone 5."
            />
          </Container>
        </section>

        <section id="contact" className="py-24">
          <Container>
            <SectionHeading
              eyebrow="Contact"
              title="Let's connect"
              description="The contact section will be implemented in Milestone 6."
            />
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;