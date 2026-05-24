import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BeachDecorations from './components/layout/BeachDecorations';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-transparent text-accent selection:bg-brandMint/30 selection:text-accent font-sans relative">
      <BeachDecorations />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
