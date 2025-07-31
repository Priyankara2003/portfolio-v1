import { motion } from "framer-motion";
import { ArrowLeft, Instagram, Mail, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";
import SplineViewer from "./spline-viewer";

function ContactForm({ onBack }: { onBack: () => void }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <div className="flex items-center gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 transition-all duration-300"
          >
            <ArrowLeft className="w-3 h-3" />
          </motion.button>
          <h1 className="text-xl md:text-2xl font-bold text-white">Say Hii👋</h1>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <form className="max-w-2xl space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
  
            <div>
              <label className="block text-white font-medium mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-all duration-300"
                placeholder="Message subject"
              />
            </div>
  
            <div>
              <label className="block text-white font-medium mb-2">Message</label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-all duration-300 resize-none"
                placeholder="Your message here..."
              />
            </div>
  
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-5 py-2 bg-[rgba(255,255,255,0.7)] hover:bg-white text-black rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </motion.button>
  
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={onBack}
                className="px-5 py-2 bg-transparent hover:bg-white/5 text-white rounded-full font-semibold transition-all duration-300 border border-white/40 hover:border-white/60"
              >
                Cancel
              </motion.button>
            </div>
          </form>
          <div className="w-full h-[500px]">
            <SplineViewer />
          </div>
        </div>
      </motion.div>
    );
  }
  
export default function ContactContent() {
    const [showForm, setShowForm] = useState(false);
  
    if (showForm) {
      return <ContactForm onBack={() => setShowForm(false)} />;
    }
  
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Contact Me
        </h1>
  
        <div className="max-w-4xl space-y-8">
          <p className="text-gray-300 text-md leading-relaxed">
            I'm always interested in new opportunities and exciting projects.
            Let's connect and discuss how we can work together!
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
              <Mail className="w-6 h-6 text-white" />
              <div>
                <h3 className="text-white font-medium">Email</h3>
                <p className="text-gray-400">srinathpriyankara77@gmail.com</p>
              </div>
            </div>
  
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
              <Phone className="w-6 h-6 text-white" />
              <div>
                <h3 className="text-white font-medium">Phone</h3>
                <p className="text-gray-400">+94 70 328 4362</p>
              </div>
            </div>
  
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
              <MessageCircle className="w-6 h-6 text-white" />
              <div>
                <h3 className="text-white font-medium">LinkedIn</h3>
                <p className="text-gray-400">
                  linkedin.com/in/srinath-priyankara
                </p>
              </div>
            </div>
  
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
              <Instagram className="w-6 h-6 text-white" />
              <div>
                <h3 className="text-white font-medium">Instagram</h3>
                <p className="text-gray-400">@mk_sr1nath</p>
              </div>
            </div>
          </div>
  
          <div className="pt-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowForm(true)}
              className="px-5 py-2 bg-[rgba(255,255,255,0.7)] hover:bg-white text-black rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Send Message
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  }