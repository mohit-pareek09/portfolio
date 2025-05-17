import { motion } from 'framer-motion';

const eduCardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.3 + i * 0.2, duration: 0.7 } }),
};

const educationList = [
  {
    school: 'Indian Institute of Technology, Jodhpur',
    degree: 'B.Tech in Mechanical Engineering',
    cgpa: 'CGPA: 7.43',
    date: 'Oct 2022 – Present',
    color: 'blue-400',
    text: 'blue-200',
  },
  {
    school: 'Bagaria Bal Vidya Niketan, Laxmangarh',
    degree: 'Class 12 - PCM',
    cgpa: 'Percentage: 92.40%',
    date: '2021',
    color: 'pink-400',
    text: 'pink-200',
  },
  {
    school: 'Bagaria Bal Vidya Niketan, Laxmangarh',
    degree: 'Class 10',
    cgpa: 'Percentage: 92.20%',
    date: '2019',
    color: 'green-400',
    text: 'green-200',
  },
];

export default function About() {
  return (
    <motion.section
      id="about"
      className="mb-16 relative flex items-center justify-center min-h-[60vh] overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Animated Gradient Blob */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0.7 }}
        animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        className="absolute -z-10 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
      />
      <div className="text-center w-full">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-2 font-['Poppins',_sans-serif] tracking-tight drop-shadow-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Mohit Pareek
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-200 mb-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Welcome folks! I'm Mohit Pareek, a mechanical Engineering student at IIT Jodhpur with a GPA of 7.43. I specialize in data structures, algorithms, and full-stack development using frameworks like React, node.js, alongside databases like MongoDB and PostgreSQL. My projects include: Feel free to connect if you share similar interests or have opportunities to collaborate!
        </motion.p>
        <motion.p
          className="text-2xl md:text-3xl text-blue-300 mb-4 font-semibold drop-shadow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Aspiring Software Engineer & Full Stack Developer
        </motion.p>
        {/* Redesigned Education Section */}
        <div className="mt-8 flex flex-col items-center gap-6">
          {educationList.map((edu, i) => (
            <motion.div
              key={edu.school + edu.degree + edu.date}
              className={`w-full max-w-xl bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-white/20`}
              custom={i}
              variants={eduCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-2">
                <span className={`inline-block w-3 h-3 bg-${edu.color} rounded-full`}></span>
                <h3 className={`text-xl font-bold text-${edu.text}`}>{edu.school}</h3>
              </div>
              <div className="text-left ml-7">
                <div className="text-gray-200 font-semibold">{edu.degree}</div>
                <div className="text-gray-400 text-sm">{edu.cgpa}</div>
                <div className="text-gray-400 text-sm">{edu.date}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-8 text-lg italic text-pink-200 drop-shadow"
        >
          "Turning ideas into reality, one line of code at a time."
        </motion.div>
      </div>
    </motion.section>
  );
} 