import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Education } from '@/components/Education';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
    <div className="min-h-screen bg-ink-50 text-ink-800 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
    </LanguageProvider>
  );
}

export default App;
