import { motion } from "framer-motion";


export default function AboutContent() {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full h-full overflow-y-auto md:overflow-visible"
      >
        <div className="p-4 md:p-0">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            About Me
          </h1>
    
          <div className="space-y-6 text-gray-300 text-md leading-relaxed max-w-3xl">
            <p>
              Hello! I'm Srinath Priyankara, a passionate Software Engineer with
              expertise in full-stack development, AI integration, and building
              scalable web applications that solve real-world problems.
            </p>
    
            <p>
              With a strong foundation in modern web technologies, I specialize in
              creating innovative solutions that bridge the gap between complex
              technical requirements and user-friendly experiences.
            </p>
    
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="col-span-2">
                <h3 className="text-xl font-semibold text-white mb-3">Skills</h3>
                <div className="flex flex-column">
                  <ul className="space-y-2 text-gray-400">
                    <li>• Full-Stack Development</li>
                    <li>• AI Integration</li>
                    <li>• React & Next.js</li>
                    <li>• Node.js & Python</li>
                    <li>• Database Design</li>
                    <li className="block sm:hidden">• Angular</li>
                  </ul>
                  <ul className="space-y-2 text-gray-400 sm:ml-10 ml-3">
                    <li>• Dart & Flutter</li>
                    <li>• Firebase</li>
                    <li className="hidden md:block">• PostgreSQL & MySQL</li>
                    <li className="block sm:hidden">• PostgreSQL</li>
                    <li className="block sm:hidden">• MySQL</li>
                    <li className="hidden md:block">• SpringBoot & Java EE</li>
                    <li className="block sm:hidden">• SpringBoot</li>
                    <li className="block sm:hidden">• Java EE</li>
                    <li className="hidden md:block">• Angular</li>
                  </ul>
                </div>
              </div>
    
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Experience
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• 1+ Years Development</li>
                  <li>• Multiple Projects Delivered</li>
                  <li>• Team Collaboration</li>
                  <li>• Problem Solving</li>
                  <li>• Continuous Learning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }