import { FaPython, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt, FaCogs } from 'react-icons/fa';
import { motion } from 'framer-motion';

const stacks = [
  {
    title: 'Languages',
    items: [
      { name: 'Python', icon: <FaPython className="text-blue-400" /> },
      { name: 'C/C++', icon: <FaCogs className="text-gray-300" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'Matlab', icon: null },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    items: [
      { name: 'React', icon: <FaReact className="text-blue-300" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-400" /> },
      { name: 'Express', icon: <FaNodeJs className="text-green-600" /> },
      { name: 'Bootstrap', icon: null },
      { name: 'jQuery', icon: null },
    ],
  },
  {
    title: 'Web & Database',
    items: [
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-400" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'MongoDB', icon: <FaDatabase className="text-green-500" /> },
      { name: 'PostgreSQL', icon: <FaDatabase className="text-indigo-400" /> },
    ],
  },
  {
    title: 'Developer Tools',
    items: [
      { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
      { name: 'VS Code', icon: null },
      { name: 'Windows', icon: null },
      { name: 'Google DialogFlow', icon: null },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.2, duration: 0.7 } }),
};

export default function TechStack() {
  return (
    <motion.section
      id="techstack"
      className="mb-16 text-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2 className="text-3xl font-bold mb-8 text-blue-200">Tech Stack</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {stacks.map((stack, i) => (
          <motion.div
            key={stack.title}
            className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-white/20"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-pink-300">{stack.title}</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {stack.items.map(item => (
                <div key={item.name} className="flex flex-col items-center gap-2">
                  <span className="text-3xl">{item.icon ? item.icon : <span className="text-gray-400">•</span>}</span>
                  <span className="text-sm text-gray-200">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 