import { motion } from 'framer-motion';
import { useState } from 'react';
import { skillCategories } from '../data/skills';

function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="min-h-screen flex items-center bg-gray-100 justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative overflow-hidden dark:bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-zinc-150 via-white to-zinc-100 dark:from-zinc-900 dark:via-black dark:to-zinc-900"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/5 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-pink-600/10 dark:bg-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-rose-600/10 dark:bg-rose-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 xs:mb-10 sm:mb-12 lg:mb-16"
        >
          <span className="text-pink-600 dark:text-pink-500 text-xs xs:text-sm font-semibold tracking-wider uppercase">My Abilities</span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mt-1 xs:mt-2 sm:mt-4 text-gray-800 dark:text-white">My Experience</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-4 xs:gap-6 sm:gap-8 lg:gap-12">
          {/* Left Side - Category Tabs */}
          <div className="lg:w-1/3 mb-6">
            <div className="flex flex-wrap lg:flex-col gap-2 xs:gap-3 sm:gap-4">
              {skillCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 xs:px-5 sm:px-6 py-3 xs:py-4 rounded-lg xs:rounded-xl text-left border-2 w-full sm:w-auto lg:w-full ${
                    activeTab === index
                      ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white border-transparent'
                      : 'bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <div className="font-bold text-sm xs:text-base sm:text-lg mb-1">{category.category}</div>
                  <div className="text-xs xs:text-sm opacity-75">{category.subtitle}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Skills List */}
          <div className="lg:w-2/3">
            <div className="space-y-4 xs:space-y-6 sm:space-y-8">
              {skillCategories[activeTab].skills.map((skill, index) => (
                <div key={skill.name} className="mb-4 xs:mb-6">
                  <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-1 xs:gap-2 mb-2">
                    <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-gray-800 dark:text-white break-words">
                      {skill.name}
                    </h3>
                    <span className="text-pink-600 dark:text-rose-400 font-bold text-xs xs:text-sm sm:text-base">
                      {skill.percentage}%
                    </span>
                  </div>

                  {/* Progress Bar with Animation */}
                  <div className="w-full bg-gray-100 dark:bg-zinc-700 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 xs:mt-10 sm:mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 text-xs xs:text-sm sm:text-base max-w-2xl mx-auto">
            Continuously learning and expanding my skill set to build better, more efficient solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ExperienceSection;