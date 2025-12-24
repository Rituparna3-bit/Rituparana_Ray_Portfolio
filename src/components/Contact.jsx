import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 text-center
             bg-[#190019]
             text-[#FBE4D8]"
    >
      {/* Heading Animation */}
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

      {/* Contact Items */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row justify-center gap-12 text-sm"
      >

        {/* Email */}
        <div className="space-y-3">
          <FaEnvelope className="mx-auto text-xl text-[#DFB6B2]" />
          <p className="uppercase tracking-wider text-[#DFB6B2] font-semibold">
            
          </p>
          <a
            href="mailto:ritu@gmail.com"
            className="hover:text-white transition"
          >
            ritu@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="space-y-3">
          <FaPhoneAlt className="mx-auto text-xl text-[#DFB6B2]" />
          <p className="uppercase tracking-wider text-[#DFB6B2] font-semibold">
            
          </p>
          <a
            href="tel:+919876543210"
            className="hover:text-white transition"
          >
            +91 98765 43210
          </a>
        </div>

        {/* Social */}
        <div className="space-y-3">
          <div className="flex justify-center gap-6 text-2xl text-[#DFB6B2]">
            <a
              href="https://github.com/Rituparna3-bit"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition transform hover:scale-110"
            >
              <FaGithub />
              
            </a>
            <a
              href="https://www.linkedin.com/in/rituparna-ray"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition transform hover:scale-110"
            >
              <FaLinkedin />
              
            </a>
          </div>
          <p className="uppercase tracking-wider text-[#DFB6B2] font-semibold">
            
          </p>
        </div>

      </motion.div>
    </section>
  );
}
