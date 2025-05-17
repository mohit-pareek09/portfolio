import { useState } from 'react';
import { FaFilePdf, FaEye, FaDownload, FaCertificate } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};
const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Resume() {
  const [showModal, setShowModal] = useState(false);
  return (
    <section id="resume" className="mb-16 flex flex-col items-center relative">
      {/* Background Accent */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.5, 0.7, 0.5] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        className="absolute -z-10 w-[350px] h-[350px] bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 rounded-full blur-3xl opacity-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-stretch z-10">
        {/* Resume Card */}
        <motion.div
          className="w-full max-w-lg bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20 flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-4 flex items-center gap-2 text-blue-200"
            variants={childVariants}
          >
            <FaFilePdf className="text-pink-400 text-2xl" /> Resume
          </motion.h2>
          {/* Remove preview, only show buttons */}
          <motion.div className="flex flex-col md:flex-row gap-4 justify-center items-center my-6" variants={childVariants}>
            <a
              href="/Mohit_Pareek_resume.pdf"
              download
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-pink-400 hover:from-pink-400 hover:to-blue-500 text-white px-6 py-2 rounded shadow transition font-semibold text-lg"
            >
              <FaDownload /> Download Resume
            </a>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 bg-gray-800 hover:bg-blue-600 text-white px-6 py-2 rounded shadow transition font-semibold text-lg"
            >
              <FaEye /> View Resume
            </button>
          </motion.div>
          <motion.div className="mt-4 text-gray-400 text-sm" variants={childVariants}>
            If the download doesn't work, contact me for the latest resume.
          </motion.div>
        </motion.div>
        {/* Certificate Card */}
        <motion.div
          className="w-full max-w-xs bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20 flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-pink-200">
            <FaCertificate className="text-yellow-300 text-2xl" /> Certificate
          </h3>
          <div className="mb-4 text-gray-200 font-semibold text-center">Full-Stack Web Development Bootcamp</div>
          <a
            href="https://www.udemy.com/certificate/UC-66d4786e-9827-47d2-a112-da9369e3f24b/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-500 to-pink-400 hover:from-pink-400 hover:to-blue-500 text-white px-4 py-2 rounded shadow transition font-semibold text-base"
          >
            View Certificate
          </a>
        </motion.div>
      </div>
      {/* Animated Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 40 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg p-4 max-w-2xl w-full relative shadow-2xl"
            >
              <button
                className="absolute top-2 right-2 text-black text-xl font-bold hover:text-pink-500"
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
              <iframe
                src="/Mohit_Pareek_resume.pdf"
                title="Resume"
                className="w-full h-[70vh] border-none rounded"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 