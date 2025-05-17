import { FaUser, FaCogs, FaFileAlt, FaProjectDiagram, FaTrophy, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const navLinks = [
  { name: 'About', icon: <FaUser />, href: '#about' },
  { name: 'Resume', icon: <FaFileAlt />, href: '#resume' },
  { name: 'Tech Stack', icon: <FaCogs />, href: '#techstack' },
  { name: 'Projects', icon: <FaProjectDiagram />, href: '#projects' },
  { name: 'Achievements', icon: <FaTrophy />, href: '#achievements' },
  { name: 'Contact', icon: <FaEnvelope />, href: '#contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('About');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = navLinks.map(link => {
        const el = document.querySelector(link.href);
        return el ? el.getBoundingClientRect().top : Infinity;
      });
      const idx = offsets.findIndex(offset => offset > 0) - 1;
      setActive(navLinks[Math.max(idx, 0)].name);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close sidebar on navigation
  const handleNavClick = () => setSidebarOpen(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="w-full py-3 px-2 justify-center sticky top-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-xl hidden md:flex">
        <ul className="flex gap-6 md:gap-10">
          {navLinks.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`flex items-center gap-2 text-lg font-semibold relative group transition-colors duration-200 px-3 py-1 rounded-lg
                  ${active === link.name ? 'bg-gradient-to-r from-blue-500 to-pink-400 text-white shadow-lg shadow-pink-200/30' : 'hover:text-blue-400'}`}
              >
                {link.icon}
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center justify-between w-full py-3 px-4 bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
        <span className="text-xl font-bold tracking-wide text-blue-300">Portfolio</span>
        <button onClick={() => setSidebarOpen(true)} className="text-2xl text-white focus:outline-none">
          <FaBars />
        </button>
      </div>
      {/* Sidebar for Mobile */}
      <div className={`fixed inset-0 z-50 transition-transform duration-300 md:hidden ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} bg-black/60`}
        style={{ pointerEvents: sidebarOpen ? 'auto' : 'none' }}
        onClick={handleNavClick}
      >
        <nav
          className={`absolute left-0 top-0 h-full w-64 bg-gray-900 shadow-2xl flex flex-col py-8 px-6 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
          onClick={e => e.stopPropagation()}
        >
          <button onClick={() => setSidebarOpen(false)} className="self-end mb-8 text-2xl text-white">
            <FaTimes />
          </button>
          <ul className="flex flex-col gap-6">
            {navLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className={`flex items-center gap-3 text-lg font-semibold relative group transition-colors duration-200 px-3 py-2 rounded-lg
                    ${active === link.name ? 'bg-gradient-to-r from-blue-500 to-pink-400 text-white shadow-lg shadow-pink-200/30' : 'hover:text-blue-400'}`}
                >
                  {link.icon}
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
} 