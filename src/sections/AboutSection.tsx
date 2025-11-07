import { motion } from 'framer-motion';
import { Award, Briefcase, Headphones, Link as LinkIcon, FileText } from 'lucide-react';

function AboutSection() {
  const stats = [
    { icon: Award, label: 'Experience', value: 'Fresher' },
    { icon: Briefcase, label: 'Completed', value: '3+ Projects' },
    { icon: Headphones, label: 'Support', value: 'Online 24/7' },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-8 py-24">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-pink-600 text-sm font-semibold tracking-wider uppercase">My Intro</span>
          <h2 className="text-5xl font-bold mt-4">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-rose-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-6 right-6 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-lg text-sm">
                <span className="text-pink-600 font-mono">datHuperFolic</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">Hi, I'm Dattu, a SDE Aspirant</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Driving innovation by building scalable, interactive systems with MERN Stack technologies.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:border-pink-600 transition-colors group"
                  >
                    <Icon size={32} className="mx-auto mb-3 text-pink-600 group-hover:scale-110 transition-transform" />
                    <div className="text-sm text-gray-500 mb-1">{stat.label}</div>
                    <div className="font-semibold">{stat.value}</div>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/datta-vignesh-b09437223/" target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 rounded-lg flex items-center gap-2 transition-all group">
                  <LinkIcon size={20} />
                  Ping Me
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </a>
              <button className="px-6 py-3 bg-zinc-900 border border-zinc-800 hover:border-pink-600 rounded-lg flex items-center gap-2 transition-all group">
                <FileText size={20} />
                My Resume
                <span className="group-hover:translate-y-[-2px] transition-transform">↓</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
