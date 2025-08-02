import { motion } from "framer-motion";
import { link } from "fs";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState } from "react";


export default function ProjectsContent() {
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 2;
  
    const allProjects = [
      {
        title: "Business Chat Assistant (WhatsApp Chatbot Platform)",
        description:
          "Developed a conversational chatbot to enable businesses to manage product browsing, customer inquiries, and orders directly via WhatsApp.Implemented user authentication for the frontend, and in the frontend implemented product management and an order management dashboard for sellers to manage their business easier. Connected the chatbot with DeepSeek LLM to provide intelligent assistant features such as natural language responses and smart query handling.",
        tech: ["Python", "PostgreSQL", "FastAPI", "LangChain", "Express.js", "Next.js", "Prisma", "WhatsApp business API"],
        link: "https://github.com/bitazoft/business-chat-assistent"
      },
      {
        title: "Document Management System For Law Firm",
        description:
          "Contributed to a Laravel-based platform tailored for legal firms to manage sensitive documents and streamline internal workflows securely.Built RESTful APIs, role-based access controll, and performed unit testing and test case implementation to ensure functional stability.\" This project is Team Project associated with SyiGen \"",
        tech: ["Laravel", "MySQL", "Blade", "Breeze", "Github Actions"],
        link: "https://www.linkedin.com/posts/syigen-ltd_projectshowcase-lawfirm-lawyer-activity-7298895489251348480-SW3w?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFA6g94BqkGkNhB5bV82PdvHVWg3GdHbS40"
      },
      {
        title: "BizNow (Business News Analytics Platform)",
        description:
          "Led the development of core features for BizNow,a real-time business news analytics platform, delivering end-to end solutions across frontend, backend, caching, data-processing and testing.Developed an AI-powered web scraper integrated with a Large Language Model (LLM - Groq) to extract and analyze business-related news in real time.\" This project is Team Project associated with SyiGen \"",
        tech: [" Next.js", "Redis", "PostgreSQL", "node-schedule", "Prisma", "Groq API"],
        link: ""
      },
      {
        title: "Local Farming Support System",
        description:
          "Connects farmers with wholesale buyers to streamline order management, track inventory, and enhance local produce distribution efficiency. The application features a built-in wholesale marketplace, enabling buyers to order fresh produce from local farms. This project addresses real-world challenges in the agricultural supply chain.",
        tech: ["Angular", "SpringBoot", "MySQL"],
        link: "https://github.com/Priyankara2003/Local-Farmer-Support-System-FrontEnd"
      },
      {
        title: "TeaTrack",
        description:
          "A mobile app for Sri Lankan tea smallholders and transporters to digitally track monthly tea harvest volumes, factory bills, and income. It imports monthly supplier bills issued by tea factories, automates report generation, and helps farmers analyze income trends, fertilizer usage, and loan deductions over time. Future updates will provide deeper analytics and farm insights based on historical data",
        tech: ["Flutter", "Dart", "Firebase", "Firbase_Auth", "Feature-Based Architecture"],
        link: "https://github.com/Priyankara2003/TeaTrack"
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
        className="relative z-10 h-full sm:h-auto overflow-y-auto md:overflow-visible"
      >
        <div className="p-2 md:p-0">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4 lg:mb-6 lg:text-left mb-8">
            Projects
          </h1>
    
          <div className="space-y-3 lg:space-y-4 w-full">
            {currentProjects.map((project, index) => (
              <motion.div
                key={startIndex + index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white/5 border border-white/10 rounded-xl p-4 lg:p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-row sm:flex-row sm:items-start gap-2 sm:gap-0 sm:mb-0 mb-4">
                  <h3 className="text-lg lg:text-xl font-semibold text-white lg:mb-3 flex-1">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start sm:self-auto sm:ml-auto inline-flex items-center gap-1 px-2 py-1 lg:px-3 lg:py-1.5 text-white text-xs lg:text-sm transition"
                  >
                    <ExternalLink className="w-4 h-4 lg:w-5 lg:h-5" />
                  </a>
                </div>
                <p className="text-gray-300 mb-3 lg:mb-4 text-xs lg:text-[0.8rem] font-extralight tracking-wide leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 lg:gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 lg:px-3 lg:py-1 bg-white/10 text-gray-300 rounded-full text-xs lg:text-sm border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Pagination - Fixed at bottom for mobile, normal for desktop */}
        <div className="flex items-center justify-center gap-2 lg:gap-4 mt-4 lg:mt-4 p-2 md:p-0">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-1.5 lg:p-2 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
          </motion.button>
    
          <div className="flex gap-1 lg:gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <motion.button
                key={page}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full font-medium transition-all duration-300 text-sm lg:text-base ${
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
            className="p-1.5 lg:p-2 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
          </motion.button>
        </div>
      </motion.div>
    );
  }