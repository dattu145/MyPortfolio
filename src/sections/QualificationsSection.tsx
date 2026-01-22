import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';
import { qualificationsData } from '../data/qualifications';

function QualificationsSection() {
  return (
    <section id="qualifications" className="min-h-screen flex items-center bg-gray-100 justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative overflow-hidden dark:bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-150 via-white to-zinc-100 dark:from-zinc-900 dark:via-black dark:to-zinc-900"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-pink-600/10 dark:bg-pink-400/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-rose-600/10 dark:bg-rose-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="text-pink-600 dark:text-pink-500 text-sm font-semibold tracking-wider uppercase">{qualificationsData.intro}</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 dark:text-white font-bold mt-2">{qualificationsData.title}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <GraduationCap className="text-pink-600 dark:text-pink-500" size={24} />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">Education</h3>
            </div>

            <div className="relative pl-6 sm:pl-8 space-y-4 sm:space-y-6">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-600 dark:from-pink-500 to-transparent"></div>

              {qualificationsData.education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute -left-7 sm:-left-10 top-0 w-3 h-3 sm:w-4 sm:h-4 bg-pink-600 dark:bg-pink-500 rounded-full border-2 sm:border-4 border-white dark:border-black group-hover:scale-125 transition-transform"></div>

                  <div className="bg-zinc-200/50 dark:bg-zinc-800/50 border border-zinc-800 dark:border-zinc-700 rounded-xl p-4 sm:p-6 transition-colors">
                    <h4 className="text-base sm:text-lg font-bold text-gray-800 dark:text-white mb-1 sm:mb-2">{item.school}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-2 sm:mb-3">{item.degree}</p>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-pink-600 dark:text-pink-500">
                      <Calendar size={14} />
                      {item.period}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <Briefcase className="text-pink-600 dark:text-pink-500" size={24} />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">Experience</h3>
            </div>

            <div className="relative pl-6 sm:pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-600 dark:from-pink-500 to-transparent"></div>

              {qualificationsData.experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute -left-7 sm:-left-10 top-0 w-3 h-3 sm:w-4 sm:h-4 bg-pink-600 dark:bg-pink-500 rounded-full border-2 sm:border-4 border-white dark:border-black group-hover:scale-125 transition-transform"></div>

                  <div className="bg-zinc-200/50 dark:bg-zinc-800/50 border border-zinc-800 dark:border-zinc-700 rounded-xl p-4 sm:p-6 hover:border-pink-600 dark:hover:border-pink-500 transition-colors">
                    <h4 className="text-base sm:text-lg font-bold text-gray-800 dark:text-white mb-1 sm:mb-2">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                      {item.description}
                    </p>
                    {item.period && (
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-pink-600 dark:text-pink-500 mt-2">
                        <Calendar size={14} />
                        {item.period}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default QualificationsSection;