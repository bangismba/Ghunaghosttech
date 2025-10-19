// src/components/Projects.tsx
import { motion } from "framer-motion";

// Project data with images
const projects = [
  {
    title: "E-commerce Store (Afrah Collections)",
    description:
      "A modern e-commerce store UI built with reusable components and responsive design.",
    tech: ["React", "Tailwind", "Vite"],
    link: "https://www.afrahcollections.com.ng",
    image: "afrah.png",
  },
  {
    title: "Trade Connect",
    description:
      "A platform connecting traders and buyers, built with a focus on user experience and performance.",
    tech: ["PHP", "Bootstrap"],
    link: "#",
    image: "tradeconnect.png",
  },
  {
    title: "Senator AA Yari",
    description:
      "A profile and campaign website for a Nigerian politician, optimized for speed and engagement.",
    tech: ["React", "Tailwind", "Vite"],
    link: "https://www.senatoraayari.com",
    image: "aayari.png",
  },
  {
    title: "Endoexo Website",
    description:
      "A clean and modern profile campaign website built with React and Vite.",
    tech: ["React", "Tailwind", "Vite"],
    link: "https://endoexo.vercel.app",
    image: "endoexo.png",
  },
  {
    title: "Orphans Website",
    description:
      "A clean and modern website for a non-profit organization supporting orphans with donation features.",
    tech: ["html", "bootstrap", "php", "mysql", "paystack"],
    link: "https://orphanseducationfoundation2025.org",
    image: "orphans.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full bg-white text-gray-900 px-6 py-20 relative"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Featured <span className="text-blue-600">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
            >
              {/* Project Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-600 px-3 py-1 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  className="inline-block text-blue-600 font-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
