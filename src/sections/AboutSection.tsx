import { motion } from 'framer-motion';
import { Award, Briefcase, Headphones, Link as LinkIcon, FileText } from 'lucide-react';
import { aboutData } from '../data/about';
import { useNavigate } from 'react-router-dom';

function AboutSection() {
  const navigate = useNavigate();
  const statsData = aboutData.stats.map(stat => ({
    ...stat,
    icon: stat.icon === 'Award' ? Award : stat.icon === 'Briefcase' ? Briefcase : Headphones
  }));

  const handlePingMe = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleResume = () => {
    const link = document.createElement('a');
    link.href = aboutData.resumeUrl;
    link.download = 'DattaVigneshResume.pdf';
    link.click();
  };

  return (
    <section id="about" className="min-h-screen flex items-center bg-gray-100 justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative overflow-hidden dark:bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-zinc-150 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-900"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-pink-600/10 dark:bg-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-rose-600/10 dark:bg-rose-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-pink-600 dark:text-pink-500 text-sm font-semibold tracking-wider uppercase">{aboutData.intro}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 dark:text-white font-bold mt-2 sm:mt-4">{aboutData.title}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-rose-600/20 rounded-2xl lg:rounded-3xl blur-2xl lg:blur-3xl"></div>
            <div className="relative flex items-center justify-center aspect-square rounded-2xl lg:rounded-3xl overflow-hidden dark:border-zinc-700">
              <img
                src={aboutData.aboutImage}
                alt="About"
                className="w-120 h-full rounded-xl object-cover grayscale-100 hover:grayscale transition-all duration-500"
              />
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-lg text-sm">
                <span className="text-pink-600 dark:text-pink-500 font-mono text-xs sm:text-sm">{aboutData.tagline}</span>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 dark:text-white font-bold mb-4 sm:mb-6">
                Hi, I'm {aboutData.name}, a {aboutData.role}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                {aboutData.description}
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {statsData.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="bg-zinc-200/50 dark:bg-zinc-800/50 border border-zinc-800 dark:border-zinc-700 rounded-xl p-4 sm:p-6 text-center transition-colors group"
                  >
                    <Icon size={28} className="mx-auto mb-2 sm:mb-3 text-pink-600 dark:text-pink-500 group-hover:scale-110 transition-transform" />
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{stat.label}</div>
                    <div className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white">{stat.value}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <button
                onClick={handlePingMe}
                className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 dark:from-pink-500 dark:to-rose-500 dark:hover:from-pink-600 dark:hover:to-rose-600 rounded-lg flex items-center justify-center gap-2 transition-all group text-sm sm:text-base text-white"
              >
                <LinkIcon size={18} className="sm:w-5 sm:h-5" />
                Ping Me
              </button>
              <button
                onClick={handleResume}
                className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-zinc-200/50 dark:bg-zinc-800/50 border border-zinc-800 dark:border-zinc-700 hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50 rounded-lg flex items-center justify-center gap-2 transition-all group text-sm sm:text-base text-gray-800 dark:text-white"
              >
                <FileText size={18} className="sm:w-5 sm:h-5" />
                My Resume
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;