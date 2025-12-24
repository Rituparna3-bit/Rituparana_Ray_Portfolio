import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiSass,
  SiNpm,
  SiPostman,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "SASS", icon: <SiSass /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "NPM", icon: <SiNpm /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "MERN Stack", icon: <FaReact /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24
                 bg-gradient-to-b from-[#190019] via-[#2B124C] to-[#190019]
                 text-[#FBE4D8]"
    >
      {/* Top merge fade */}
      <div
        className="absolute top-0 left-0 w-full h-24
                   bg-gradient-to-b from-[#190019] to-transparent"
      />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold text-center mb-4"
      >
        Skills & Technologies
      </motion.h2>

      <div className="w-20 h-[2px] bg-[#DFB6B2] mx-auto mb-14"></div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="
              group bg-[#522B5B]/70
              border border-[#DFB6B2]/20
              rounded-2xl
              p-6
              flex flex-col items-center justify-center
              gap-3
              cursor-pointer
              shadow-md

              transition-all duration-300 ease-out
              hover:-translate-y-3
              hover:shadow-[0_0_30px_#854F6C]
              hover:bg-gradient-to-br
              hover:from-[#854F6C]
              hover:to-[#2B124C]
            "
          >
            <div className="text-3xl text-[#FBE4D8] group-hover:scale-110 transition">
              {skill.icon}
            </div>
            <p className="text-sm font-medium text-center">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
