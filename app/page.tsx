"use client";

import { motion } from "framer-motion";
import HomeContent from '@/components/home-content';
import AboutContent from '@/components/about-content';
import ProjectsContent from '@/components/projects-content';
import ContactContent from '@/components/contact-content';
import {
  User,
  Briefcase,
  MessageCircle,
  Home
} from "lucide-react";
import { useState } from "react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About Me", icon: User },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "contact", label: "Contact Me", icon: MessageCircle },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return <AboutContent />;
      case "projects":
        return <ProjectsContent />;
      case "contact":
        return <ContactContent />;
      default:
        return <HomeContent />;
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Circles */}
        <motion.div
          className="absolute w-64 h-64 bg-white/5 rounded-full blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{ top: "10%", left: "10%" }}
        />

        <motion.div
          className="absolute w-96 h-96 bg-white/3 rounded-full blur-2xl"
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{ top: "60%", right: "10%" }}
        />

        <motion.div
          className="absolute w-48 h-48 bg-white/8 rounded-full blur-xl"
          animate={{
            x: [0, 80, 0],
            y: [0, -80, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{ bottom: "20%", left: "20%" }}
        />

        {/* Geometric Shapes */}
        <motion.div
          className="absolute w-32 h-32 bg-white/10 blur-sm"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            top: "30%",
            right: "30%",
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute w-24 h-24 bg-white/6 blur-sm"
          style={{
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            bottom: "40%",
            right: "15%",
          }}
          animate={{
            rotate: [360, 0],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 22,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Floating Dots */}
        {Array.from({ length: 150 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Vertical Navigation Bar - Right Side */}
      <motion.nav
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed right-22 top-1/2 -translate-y-1/2 z-50"
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 flex flex-col gap-5 w-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center justify-center p-2 rounded-xl transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-white/20 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
              </motion.button>
            );
          })}
        </div>
      </motion.nav>

      {/* Glass Container - Same design, different content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-5xl w-full mx-auto lg:overflow-hidden"
      >
        <div className="relative bg-gradient-to-t from-white/5 to-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-12 md:p-16 lg:p-20 shadow-2xl min-h-[600px]">
          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-2xl border border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.02)]" />

          {/* Dynamic Content */}
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-content-center h-[60vh]"
          >
            {renderContent()}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
