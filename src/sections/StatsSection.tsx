import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

function StatsSection() {
  return (
    <section id="stats" className="min-h-screen flex items-center justify-center px-8 py-24">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-pink-600 text-sm font-semibold tracking-wider uppercase">Coding Activity</span>
          <h2 className="text-5xl font-bold mt-4">My Developer Stats</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-pink-600 transition-colors"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">LeetCode Stats</h3>
              <a
                href="https://leetcode.com/dattu145233"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700 transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            </div>
            <div className="rounded-lg overflow-hidden bg-black">
              <img
                src="https://leetcard.jacoblin.cool/dattu145233?theme=dark&ext=activity"
                alt="LeetCode Stats"
                className="w-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-pink-600 transition-colors"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">GitHub Stats</h3>
              <a
                href="https://github.com/dattu145"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700 transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden bg-black">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=dattu145&show_icons=true&theme=dark&bg_color=000000&border_color=27272a"
                  alt="GitHub Stats"
                  className="w-full"
                />
              </div>
              <div className="rounded-lg overflow-hidden bg-black">
                <img
                  src="https://github-readme-streak-stats.herokuapp.com/?user=dattu145&theme=dark&background=000000&border=27272a"
                  alt="GitHub Streak"
                  className="w-full"
                />
              </div>
              <div className="rounded-lg overflow-hidden bg-black">
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=dattu145&layout=compact&theme=dark&bg_color=000000&border_color=27272a"
                  alt="Top Languages"
                  className="w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-pink-600 transition-colors"
        >
          <h3 className="text-2xl font-bold mb-6">Contribution Graph</h3>
          <div className="rounded-lg overflow-hidden bg-black">
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
