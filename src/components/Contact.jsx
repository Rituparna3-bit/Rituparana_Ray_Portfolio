import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 text-center bg-[#190019] text-[#FBE4D8]"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl mb-4"
      >
        Get in Touch
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-16 h-[2px] bg-[#DFB6B2] mx-auto mb-12 origin-left"
      />

      {/* Social / Contact Icons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex justify-center gap-10 text-2xl text-[#DFB6B2]"
      >
        {/* Email */}
        <a
          href="mailto:rayrituparna78@gmail.com"
          className="hover:text-white transition transform hover:scale-110"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Rituparna3-bit"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition transform hover:scale-110"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/rituparna-ray"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition transform hover:scale-110"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </motion.div>
    </section>
  );
}
