import { motion } from 'framer-motion';

const stats = [
  { label: 'IIT-JEE Rank', value: 'Top 0.01%' },
  { label: 'DSA Problems Solved', value: '300+' },
];

const achievements = [
  'Secured Top 0.01% in the IIT-JEE exam (Rank among 1.2 million candidates) in 2022.',
  'Solved 300+ DSA problems on LeetCode/GeeksforGeeks.',
];

export default function Achievements() {
  return (
    <section id="achievements" className="mb-16 text-center">
      <h2 className="text-3xl font-bold mb-8">Achievements</h2>
      <div className="flex flex-wrap justify-center gap-8 mb-8">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-gray-800 px-8 py-6 rounded-lg shadow-lg text-2xl font-bold text-blue-400"
          >
            {stat.value}
            <div className="text-base text-gray-300 font-medium mt-2">{stat.label}</div>
          </motion.div>
        ))}
      </div>
      <ul className="text-lg text-gray-200 space-y-3 max-w-2xl mx-auto">
        {achievements.map((ach, idx) => (
          <motion.li
            key={ach}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-gray-700 rounded px-4 py-2 shadow"
          >
            {ach}
          </motion.li>
        ))}
      </ul>
    </section>
  );
} 