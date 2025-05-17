import Navbar from './components/Navbar';
import About from './sections/About';
import Resume from './sections/Resume';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import './index.css';

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <About />
        <Resume />
        <TechStack />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;
