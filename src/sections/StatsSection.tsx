import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

function StatsSection() {
  return (
    <section id="stats" className="min-h-screen flex items-center bg-gray-100 justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative overflow-hidden dark:bg-black">
      <div className="absolute inset-0 bg-gradient-to-tr from-zinc-150 via-white to-zinc-100 dark:from-zinc-900 dark:via-black dark:to-zinc-950"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-pink-600/10 dark:bg-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-rose-600/10 dark:bg-rose-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="text-pink-600 dark:text-pink-500 text-sm font-semibold tracking-wider uppercase">Coding Activity</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 dark:text-white font-bold mt-2">My Developer Stats</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* LeetCode Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-zinc-200/50 dark:bg-zinc-800/50 border border-zinc-800 dark:border-zinc-700 rounded-xl p-3 sm:p-4 lg:p-6 transition-colors"
          >
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">LeetCode Stats</h3>
              <a
                href="https://leetcode.com/dattu145233"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 dark:text-pink-500 hover:text-pink-700 dark:hover:text-pink-400 transition-colors"
              >
                <ExternalLink size={16} className="sm:w-4 sm:h-4" />
              </a>
            </div>
            <div className="rounded-lg overflow-hidden bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700">
              <img
                src="https://leetcard.jacoblin.cool/dattu145233?theme=dark&ext=activity"
                alt="LeetCode Stats"
                className="w-full"
              />
            </div>
          </motion.div>

          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-zinc-200/50 dark:bg-zinc-800/50 border border-zinc-800 dark:border-zinc-700 rounded-xl p-3 sm:p-4 lg:p-6 transition-colors"
          >
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">GitHub Stats</h3>
              <a
                href="https://github.com/dattu145"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 dark:text-pink-500 hover:text-pink-700 dark:hover:text-pink-400 transition-colors"
              >
                <ExternalLink size={16} className="sm:w-4 sm:h-4" />
              </a>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <div className="rounded-lg overflow-hidden bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=dattu145&show_icons=true&theme=dark&bg_color=000000&border_color=27272a"
                  alt="GitHub Stats"
                  className="w-full"
                />
              </div>
              <div className="rounded-lg overflow-hidden bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700">
                <img
                  src="https://github-readme-streak-stats.herokuapp.com/?user=dattu145&theme=dark&background=000000&border=27272a"
                  alt="GitHub Streak"
                  className="w-full"
                />
              </div>
              <div className="rounded-lg overflow-hidden bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700">
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=dattu145&layout=compact&theme=dark&bg_color=000000&border_color=27272a"
                  alt="Top Languages"
                  className="w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-4 sm:mt-6 bg-zinc-200/50 dark:bg-zinc-800/50 border border-zinc-800 dark:border-zinc-700 rounded-xl p-3 sm:p-4 lg:p-6 transition-colors"
        >
          <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-white">Contribution Graph</h3>
          <div className="rounded-lg overflow-hidden bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700">
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=dattu145&theme=github-compact&bg_color=000000&color=ec4899&line=ec4899&point=ffffff&area=true&hide_border=false&border_color=27272a"
              alt="GitHub Activity Graph"
              className="w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default StatsSection;