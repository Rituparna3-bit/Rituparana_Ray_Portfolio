import { motion } from "framer-motion";
import profile from "../assets/Hero.jpg";

export default function Hero() {
  return (
    <section
  id="home"
  className="w-full min-h-screen
             bg-gradient-to-b from-[#190019] to-[#2B124C]
             text-[#FBE4D8]"
>
  {/* INNER CONTAINER — aligned with navbar */}
  <div className="w-full max-w-[90rem] mx-auto px-4 md:px-8 pt-24
                  grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
        Hi, I’m <span className="text-[#DFB6B2]">Rituparna</span>
      </h1>

      <p className="text-lg text-[#FBE4D8]/80 max-w-xl mb-8">
        Full Stack Developer crafting modern, responsive and user-focused web
        applications with clean code and elegant design.
      </p>

      <div className="flex gap-4">
        <a
          href="/Rituparna_Ray_CV.pdf"
          download
          className="px-6 py-3 rounded-full bg-[#DFB6B2] text-[#190019]
                     font-medium hover:scale-105 transition"
        >
          Download CV
        </a>
      </div>
    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -18, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative flex justify-center md:justify-end"
    >
      {/* Glow */}
      <div className="absolute w-72 h-72
                      bg-gradient-to-br from-[#854F6C] to-[#2B124C]
                      blur-3xl opacity-40" />

      {/* Glass frame */}
      <div
        className="relative w-64 h-64 md:w-72 md:h-72
                   rounded-[32px]
                   p-[3px]
                   bg-gradient-to-br from-[#DFB6B2] to-[#854F6C]
                   shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
      >
        <div
          className="w-full h-full
                     rounded-[28px]
                     overflow-hidden
                     backdrop-blur-xl
                     bg-white/5"
        >
          <img
            src={profile}
            alt="Rituparna"
            className="w-full h-full object-cover
                       hover:scale-110 transition duration-700"
          />
        </div>
      </div>
    </motion.div>

  </div>
</section>

  );
}
