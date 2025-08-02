import { motion } from "framer-motion";
import { ArrowLeft, Instagram, Mail, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";
import SplineViewer from "./spline-viewer";
import { toast } from "sonner";

function ContactForm({ onBack }: { onBack: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        title: formData.subject,
        message: formData.message,
      };

      const serviceId = 'service_6mqceyn';
      const templateId = 'template_3dovjwb';
      const publicKey = 'YEsT9y2FIwdOFbqjs';

      const emailjs = await import('@emailjs/browser');

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast.success("Successfully sent message", {
        style: {
          backgroundColor: 'rgba(34, 197, 94, 0.1)',
          color: '#22C55E',
          border: '1px solid rgba(34, 197, 94, 0.3)',
          backdropFilter: 'blur(10px)',
        },
      });
      setFormData({ name: '', email: '', subject: '', message: '' });

    } catch (err) {
      console.error('EmailJS Error:', err);
      toast.error("Failed to send message", {
        style: {
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          color: '#EF4444',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          backdropFilter: 'blur(10px)',
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 w-full"
    >
      <div className="flex items-center gap-4 mb-6 lg:mb-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 transition-all duration-300"
        >
          <ArrowLeft className="w-3 h-3" />
        </motion.button>
        <h1 className="text-lg lg:text-xl md:text-2xl font-bold text-white">Say Hello 👋</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
        <form onSubmit={handleSubmit} className="max-w-2xl space-y-4 lg:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label className="block text-white font-medium mb-2 text-sm lg:text-base">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 lg:px-4 lg:py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-all duration-300 text-sm lg:text-base"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2 text-sm lg:text-base">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 lg:px-4 lg:py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-all duration-300 text-sm lg:text-base"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-white font-medium mb-2 text-sm lg:text-base">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 lg:px-4 lg:py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-all duration-300 text-sm lg:text-base"
              placeholder="Message subject"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2 text-sm lg:text-base">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-3 py-2 lg:px-4 lg:py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-all duration-300 resize-none text-sm lg:text-base"
              placeholder="Your message here..."
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
            <motion.button
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 lg:px-5 lg:py-2 lg:bg-[rgba(255,255,255,0.7)] bg-white hover:bg-white text-black rounded-full font-semibold transition-all duration-300 flex items-center gap-2 justify-center text-sm lg:text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={onBack}
              disabled={isLoading}
              className="px-4 py-2 lg:px-5 lg:py-2 bg-transparent hover:bg-white/5 text-white rounded-full font-semibold transition-all duration-300 border border-white/40 hover:border-white/60 text-sm lg:text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </motion.button>
          </div>
        </form>
        {/* 3D Model - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:block w-full h-[300px] lg:h-[500px]">
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
      className="relative z-10 w-full h-full overflow-y-auto md:overflow-visible"
    >
      <div className="p-2 md:p-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 lg:mb-8 text-center lg:text-left">
          Contact Me
        </h1>

        <div className="max-w-4xl space-y-6 lg:space-y-8 mx-auto lg:mx-0">
          {/* Mobile View Paragraph */}
          <p className="text-gray-300 text-sm lg:text-md leading-relaxed text-center lg:hidden">
            I'm always interested in new opportunities and exciting projects.
            Let's connect and discuss how we can work together!
          </p>

          {/* Desktop View Paragraph */}
          <p className="text-gray-300 text-sm lg:text-md leading-relaxed text-center lg:text-left hidden lg:block">
            I'm always interested in new opportunities and exciting projects.
            Let's connect and discuss how we can work together! Feel free to reach out
            if you'd like to collaborate on innovative solutions or discuss potential
            opportunities. I'm passionate about creating impactful technology solutions
            and would love to hear about your ideas.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-white/5 rounded-xl border border-white/10">
              <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-white flex-shrink-0" />
              <div className="min-w-0">
                <h3 className="text-white font-medium text-sm lg:text-base">Email</h3>
                <p className="text-gray-400 text-xs lg:text-sm truncate">srinathpriyankara77@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-white/5 rounded-xl border border-white/10">
              <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-white flex-shrink-0" />
              <div className="min-w-0">
                <h3 className="text-white font-medium text-sm lg:text-base">Phone</h3>
                <p className="text-gray-400 text-xs lg:text-sm">+94 70 328 4362</p>
              </div>
            </div>

            <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-white/5 rounded-xl border border-white/10">
              <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 text-white flex-shrink-0" />
              <div className="min-w-0">
                <h3 className="text-white font-medium text-sm lg:text-base">LinkedIn</h3>
                <p className="text-gray-400 text-xs lg:text-sm truncate">
                  linkedin.com/in/srinath-priyankara
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-white/5 rounded-xl border border-white/10">
              <Instagram className="w-5 h-5 lg:w-6 lg:h-6 text-white flex-shrink-0" />
              <div className="min-w-0">
                <h3 className="text-white font-medium text-sm lg:text-base">Instagram</h3>
                <p className="text-gray-400 text-xs lg:text-sm">@mk_sr1nath</p>
              </div>
            </div>
          </div>

          <div className="pt-4 lg:pt-6 text-center lg:text-left">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowForm(true)}
              className="px-4 py-2 lg:px-5 lg:py-2 lg:bg-[rgba(255,255,255,0.7)] bg-white hover:bg-white text-black rounded-full font-semibold transition-all duration-300 flex items-center gap-2 justify-center mx-auto lg:mx-0 w-fit text-sm lg:text-base"
            >
              <Mail className="w-4 h-4" />
              Send Message
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}