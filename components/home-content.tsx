"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import router from "next/router";

interface HomeContentProps {
  setActiveSection: (section: string) => void
}

export default function HomeContent({ setActiveSection }: HomeContentProps) {
    return (
      <div className="relative z-10 flex flex-column items-center md:items-start">
        <div className="text-center md:text-left">
        {/* Name - Large Typography matching reference */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-start text-center md:text-5xl lg:text-6xl font-bold text-white mb-10 leading-tight tracking-wide"
          style={{ fontFamily: "Lexend Zetta" }}
        >
          Srinath
          <br />
          Priyankara
        </motion.h1>
  
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-gray-300 text-sm font-thin tracking-wider md:text-sm leading-relaxed mb-10 max-w-2xl"
        >
          {
            "I'm a passionate Software Engineer specializing in full-stack development,AI integration, and "
          }
          <br />
          {
            "scalable web applications. Explore my projects, skills, and experiences"
          }
          <br />
          {" that bridge real-world problems with innovative tech solutions."}
        </motion.p>
  
        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 md:gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveSection("contact")}
            className="py-2 px-4 lg:bg-[rgba(255,255,255,0.7)] bg-white hover:bg-white text-black rounded-full font-semibold transition-all duration-300 flex items-center gap-2 justify-center min-w-[140px]"
          >
            <Mail className="w-4 h-4 text-black" />
            Catch Me
          </motion.button>
  
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="py-2 px-4 bg-transparent hover:bg-white/5 text-white rounded-full font-semibold transition-all duration-300 border border-white/40 hover:border-white/60 flex items-center gap-2 justify-center min-w-[140px]"
          >
            <Download className="w-4 h-4" />
            Download My CV
          </motion.button>
        </motion.div>
        </div>

        <div className="mt-[-7vh] hidden lg:block">
          <img src="/hero.png" alt="" className="grayscale absolute w-250 h-auto" />
        </div>
      </div>
    );
  }