import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const socials = [
  { icon: <FaLinkedin />, href: 'https://linkedin.com/in/mohit-pareek-544759257', label: 'LinkedIn' },
  { icon: <FaGithub />, href: 'https://github.com/mohit-pareek09', label: 'GitHub' },
  { icon: <FaEnvelope />, href: 'mailto:prkmohit14@gmail.com', label: 'Email' },
];

export default function Contact() {
  return (
    <section id="contact" className="mb-16 text-center flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <div className="flex gap-8 justify-center text-3xl">
        {socials.map(s => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition flex flex-col items-center gap-2"
            aria-label={s.label}
          >
            {s.icon}
            <span className="text-base text-gray-300 font-medium mt-1">{s.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
} 