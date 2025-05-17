import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'MDrive: Secure Cloud Storage Web Application',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Tailwind CSS', 'Flowbite', 'Cloudinary API', 'Render'],
    desc: 'Full-stack cloud storage platform with secure file uploads, management, and downloads. Responsive frontend, drag-and-drop uploads, dark mode, JWT-based authentication.',
    code: 'https://github.com/mohit-pareek09/MDRIVE',
    site: 'https://mdrive-5.onrender.com/',
  },
  {
    name: 'Calling Assistant Bot',
    tech: ['Python', 'AssemblyAI', 'ElevenLabs API', 'Gemini AI', 'PyPDF2', 'Pyaudio', 'Pygame'],
    desc: 'AI-powered voice assistant for cultural fest. 95%+ response accuracy, 70% manual effort reduction, automated query handling from PDFs.',
    code: 'https://github.com/mohit-pareek09/VoiceBot',
    site: '',
  },
  {
    name: 'IITJ Chatbot',
    tech: ['LLM', 'Flask', 'Python', 'React', 'LlamaIndex', 'LangChain'],
    desc: 'AI-powered interactive assistant using RAG, Google PaLM, GPT4All, 85% query accuracy, document indexing for college info.',
    code: 'https://github.com/mohit-pareek09/IITJ-ChatBot',
    site: '',
  },
];

const badgeVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
};

export default function Projects() {
  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 hover:scale-105 hover:shadow-pink-400/40 transition-transform relative group border border-white/20"
          >
            <h3 className="text-2xl font-semibold mb-2 text-blue-400 drop-shadow">{proj.name}</h3>
            <div className="flex flex-wrap gap-2 mb-2">
              {proj.tech.map((t, i) => (
                <motion.span
                  key={t}
                  variants={badgeVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.1 * i }}
                  className="bg-gradient-to-r from-blue-500 to-pink-400 text-xs px-3 py-1 rounded-full text-white shadow-md font-semibold border border-white/20"
                >
                  {t}
                </motion.span>
              ))}
            </div>
            <p className="text-gray-200 mb-4 min-h-[60px]">{proj.desc}</p>
            <div className="flex gap-4 mt-4">
              <a href={proj.code} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-white bg-black/40 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition shadow">
                <FaGithub /> Code
              </a>
              {proj.site && (
                <a href={proj.site} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-white bg-black/40 px-4 py-2 rounded-lg hover:bg-pink-500 hover:text-white transition shadow">
                  <FaExternalLinkAlt /> Website
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 