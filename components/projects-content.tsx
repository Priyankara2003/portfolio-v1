import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";


export default function ProjectsContent() {
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 2;
  
    const allProjects = [
      {
        title: "AI-Powered Web Application",
        description:
          "Full-stack application with AI integration for automated data processing and analysis.",
        tech: ["React", "Node.js", "Python", "AI/ML"],
      },
      {
        title: "E-Commerce Platform",
        description:
          "Scalable e-commerce solution with real-time inventory management and payment integration.",
        tech: ["Next.js", "PostgreSQL", "Stripe", "Redis"],
      },
      {
        title: "Real-Time Chat Application",
        description:
          "Modern chat application with real-time messaging, file sharing, and video calls.",
        tech: ["React", "Socket.io", "WebRTC", "MongoDB"],
      },
      {
        title: "Portfolio Management System",
        description:
          "Investment portfolio tracking system with real-time market data and analytics.",
        tech: ["Vue.js", "Express", "MySQL", "Chart.js"],
      },
      {
        title: "Task Management App",
        description:
          "Collaborative task management application with team features and project tracking.",
        tech: ["React Native", "Firebase", "Redux", "TypeScript"],
      },
      {
        title: "Weather Prediction API",
        description:
          "Machine learning-based weather prediction service with RESTful API endpoints.",
        tech: ["Python", "FastAPI", "TensorFlow", "Docker"],
      },
    ];
  
    const totalPages = Math.ceil(allProjects.length / projectsPerPage);
    const startIndex = (currentPage - 1) * projectsPerPage;
    const currentProjects = allProjects.slice(
      startIndex,
      startIndex + projectsPerPage
    );
  
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Projects
        </h1>
  
        <div className="space-y-8 max-w-4xl">
          {currentProjects.map((project, index) => (
            <motion.div
              key={startIndex + index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
  
        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
  
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <motion.button
                key={page}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full font-medium transition-all duration-300 ${
                  currentPage === page
                    ? "bg-white/20 text-white border border-white/30"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {page}
              </motion.button>
            ))}
          </div>
  
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
  
        <div className="text-center mt-4 text-gray-400 text-sm">
          Page {currentPage} of {totalPages} • {allProjects.length} total projects
        </div>
      </motion.div>
    );
  }