import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, User, MessageCircle, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personal';
import { useState, useEffect } from 'react';

function HeroSection() {
  const [showHighlight, setShowHighlight] = useState(false);
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Trigger highlight effect after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHighlight(true);
      
      // Remove highlight after 3 seconds
      const removeTimer = setTimeout(() => {
        setShowHighlight(false);
      }, 3000);

      return () => clearTimeout(removeTimer);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center bg-gray-100 justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative overflow-hidden dark:bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-150 via-white to-zinc-100 dark:from-zinc-900 dark:via-black dark:to-zinc-900"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-pink-600/10 dark:bg-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-rose-600/10 dark:bg-rose-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-4 sm:mb-6"
          >
            <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-300">Follow Me</span>
            <div className="h-px w-4 sm:w-6 bg-zinc-800 dark:bg-zinc-600"></div>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-600 dark:hover:text-pink-500 transition-colors p-1 sm:p-0"
            >
              <Github size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-600 dark:hover:text-pink-500 transition-colors p-1 sm:p-0"
            >
              <Linkedin size={18} className="sm:w-5 sm:h-5" />
            </a>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl font-poppins sm:text-5xl lg:text-6xl text-gray-800 font-bold mb-4 sm:mb-6 dark:text-white"
          >
            Hi, I'm{' '}
            <span className="text-transparent font-poppins bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-500 dark:to-rose-500">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-2xl lg:text-3xl font-medium font-poppins text-gray-700 dark:text-gray-200 mb-4 sm:mb-6 h-12 sm:h-16 flex items-center justify-center lg:justify-start"
          >
            <TypeAnimation
              sequence={personalInfo.typingSequences}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-center lg:text-left"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-xl leading-relaxed mx-auto lg:mx-0"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            onClick={scrollToAbout}
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 dark:from-pink-500 dark:to-rose-500 dark:hover:from-pink-600 dark:hover:to-rose-600 rounded-lg flex items-center gap-2 transition-all group mx-auto lg:mx-0 text-sm sm:text-base text-white"
          >
            <User size={18} className="sm:w-5 sm:h-5" />
            More About Me
          </motion.button>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mt-8 sm:mt-12 max-w-md mx-auto lg:mx-0"
          >
            {/* Messenger */}
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-lg border border-zinc-800 dark:border-zinc-700 hover:border-pink-600 hover:dark:bg-zinc-700/50 transition-colors">
                <MessageCircle size={16} className="sm:w-5 sm:h-5 text-pink-600 dark:text-pink-500 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-gray-500 dark:text-gray-400 truncate">Messenger</div>
                  <div className="text-xs sm:text-sm text-gray-900 dark:text-gray-200 truncate">{personalInfo.messenger}</div>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="group cursor-pointer">
              <a href={`https://wa.me/${personalInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="block">
                <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-lg border border-zinc-800 dark:border-zinc-700 hover:border-pink-600 hover:dark:bg-zinc-700/50 transition-colors">
                  <Phone size={16} className="sm:w-5 sm:h-5 text-pink-600 dark:text-pink-500 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-gray-500 dark:text-gray-400 truncate">Whatsapp</div>
                    <div className="text-xs sm:text-sm text-gray-900 dark:text-gray-200 truncate">{personalInfo.phone}</div>
                  </div>
                </div>
              </a>
            </div>

            {/* Email */}
            <div className="group cursor-pointer xs:col-span-2 lg:col-span-1">
              <a href={`mailto:${personalInfo.email}`} className="block">
                <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-lg border border-zinc-800 dark:border-zinc-700 hover:border-pink-600 hover:dark:bg-zinc-700/50 transition-colors">
                  <Mail size={16} className="sm:w-5 sm:h-5 text-pink-600 dark:text-pink-500 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-gray-500 dark:text-gray-400 truncate">Email</div>
                    <div className="text-xs sm:text-sm text-gray-900 dark:text-gray-200 truncate">{personalInfo.email}</div>
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Media (Video or Image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative order-1 lg:order-2 mb-8 lg:mb-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-rose-600/20 rounded-2xl lg:rounded-3xl blur-2xl lg:blur-3xl"></div>
          <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl lg:rounded-3xl overflow-hidden border border-zinc-800 dark:border-zinc-700">
            {personalInfo.profileVideo ? (
              // Video Player
              <video
                src={personalInfo.profileVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : personalInfo.profileImage ? (
              // Image Fallback
              <img
                src={personalInfo.profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              // Fallback if no media is provided
              <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">No media provided</span>
              </div>
            )}
            
            {/* GitHub Contributions Button with Highlight Effect */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 lg:bottom-6 lg:right-6">
              <motion.a
                href={personalInfo.gssoctracker}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3 py-2 sm:px-4 sm:py-2.5 lg:px-6 lg:py-3 bg-white dark:bg-gray-100 text-black dark:text-gray-900 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-white transition-all duration-300 inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm relative overflow-hidden ${
                  showHighlight ? 'ring-4 ring-pink-500/50 scale-105 shadow-2xl' : ''
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Pulsing background effect */}
                {showHighlight && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-rose-500/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ duration: 2, repeat: 1 }}
                  />
                )}
                
                {/* Floating animation */}
                <motion.div
                  animate={showHighlight ? { y: [0, -2, 0] } : { y: 0 }}
                  transition={{ duration: 1, repeat: 2 }}
                  className="flex items-center gap-1 sm:gap-2 relative z-10"
                >
                  <Github size={14} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  <span className="hidden xs:inline">See my Contributions</span>
                  <span className="xs:hidden">Contributions</span>
                </motion.div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;