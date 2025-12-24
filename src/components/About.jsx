import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24
                 bg-gradient-to-b from-[#2B124C] via-[#190019] to-[#190019]
                 text-[#FBE4D8] overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Side Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 p-8 rounded-2xl
                            bg-gradient-to-br from-[#2B124C] to-[#190019]
                            border border-[#DFB6B2]/20 shadow-2xl">

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full
                                bg-[#854F6C]/30
                                flex items-center justify-center">
                  <span className="text-[#FBE4D8] font-bold text-xl">R</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Rituparna Ray</h4>
                  <p className="text-[#DFB6B2] text-xs tracking-widest uppercase">
                    Full Stack Developer
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="h-2 w-full bg-[#2B124C] rounded-full overflow-hidden">
                  <motion.div className="h-full bg-[#DFB6B2]" style={{ width: "90%" }} />
                </div>
                <div className="h-2 w-3/4 bg-[#2B124C] rounded-full overflow-hidden">
                  <motion.div className="h-full bg-[#854F6C]" style={{ width: "85%" }} />
                </div>
                <div className="h-2 w-1/2 bg-[#2B124C] rounded-full overflow-hidden">
                  <motion.div className="h-full bg-[#522B5B]" style={{ width: "70%" }} />
                </div>
              </div>

              <p className="mt-8 text-[#DFB6B2] text-sm italic">
                "Code is like humor. When you have to explain it, it’s bad."
              </p>
            </div>

            {/* Glow */}
            <div className="absolute -inset-4 bg-[#854F6C]/20 blur-3xl rounded-full -z-10" />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#DFB6B2] font-medium tracking-widest uppercase text-sm mb-2">
              My Biography
            </h2>

            <h3 className="text-4xl font-bold mb-6">
              Turning Ideas into <span className="text-[#FBE4D8]">Interactive</span> Reality
            </h3>

            <p className="text-[#DFB6B2] text-lg leading-relaxed mb-8">
              I am a passionate Full Stack Developer with a drive for creating
              wonderful, interactive websites. I specialize in crafting clean
              interfaces and pushing modern web design boundaries.
            </p>

            <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-t border-[#DFB6B2]/20 pt-8">
              {[
                ["Status", "Open to Work"],
                ["Education", "Tech Enthusiast"],
                ["Location", "India"],
                ["Interests", "UI/UX & Backend"],
              ].map(([label, value]) => (
                <div key={label}>
                  <span className="block text-[#DFB6B2] text-xs uppercase tracking-wider mb-1">
                    {label}
                  </span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
