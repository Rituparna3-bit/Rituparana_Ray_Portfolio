import { motion } from "framer-motion";
import { Code2, Cpu, Layers, Github } from "lucide-react";

const projects = [
  {
    title: "Samsung clone",
    tech: "HTML • CSS • JavaScript",
    icon: Code2,
    description:
      "Web-based system to make a website clone .",
    github: "https://github.com/Rituparna3-bit/samsung-clone",
  },
  {
    title: "Restaurant  Website",
    tech: "HTML • CSS • JavaScript",
    icon: Cpu,
    description:
      "Responsive Website developed with Html, css and JavaScript, Fully Interactive.",
    github: "https://github.com/yourusername/smart-parking-system",
  },
  {
    title: "Smart PG Management System",
    tech: "MongoDB • Express • React • Node",
    icon: Layers,
    description:
      "Full-stack MERN application for PG and tenant management.",
    github: "https://github.com/yourusername/smart-pg-management",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-24 bg-gradient-to-b from-[#190019] to-[#2B124C] text-[#FBE4D8]"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          My <span className="text-[#DFB6B2]">Portfolio</span>
        </motion.h2>

        <div className="w-20 h-[3px] bg-[#854F6C] mx-auto mb-14 rounded-full"></div>

        {/* Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl p-8 text-left
                           bg-white/5 backdrop-blur-md
                           border border-white/10
                           shadow-lg hover:shadow-xl
                           transition-all"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 flex items-center justify-center
                                  rounded-xl bg-[#DFB6B2]/20 text-[#DFB6B2]">
                    <Icon size={28} />
                  </div>

                  {/* GitHub Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#DFB6B2] hover:text-white
                               transition-transform hover:scale-110"
                  >
                    <Github size={22} />
                  </a>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-[#DFB6B2] mb-3">
                  {project.tech}
                </p>

                <p className="text-sm text-[#FBE4D8]/80">
                  {project.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
