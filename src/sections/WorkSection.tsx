import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

function WorkSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.category === activeFilter
  );

  const handleProjectClick = (projectId: string) => {
    // Save current scroll position before navigating
    const scrollPosition = window.scrollY;
    navigate(`/project/${projectId}`, { state: { scrollPosition } });
  };

  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="work" className="min-h-screen flex items-center bg-gray-100 justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative overflow-hidden dark:bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-150 via-white to-zinc-100 dark:from-zinc-900 dark:via-black dark:to-zinc-950"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-pink-600/10 dark:bg-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-rose-600/10 dark:bg-rose-400/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="text-pink-600 dark:text-pink-500 text-sm font-semibold tracking-wider uppercase">My Portfolio</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 dark:text-white font-bold mt-2">Recent Works</h2>
        </motion.div>

        <div className="flex justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap">
          {['all', 'mern', 'extra'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all text-sm sm:text-base ${activeFilter === filter
                  ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white'
                  : 'bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:border-pink-600 dark:hover:border-pink-500'
                }`}
            >
              {filter === 'all' ? 'All' : filter === 'mern' ? 'MERN' : 'Extra'}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 transition-all"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                onClick={() => handleProjectClick(project.id)}
                className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl overflow-hidden hover:border-pink-600 dark:hover:border-pink-500 transition-all group cursor-pointer shadow-sm"
              >
                <div className="relative overflow-hidden aspect-video bg-gray-100 dark:bg-zinc-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      {project.github && (
                        <button
                          onClick={(e) => handleLinkClick(e, project.github!)}
                          className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors text-white"
                        >
                          <Github size={20} />
                        </button>
                      )}
                      {project.demo && (
                        <button
                          onClick={(e) => handleLinkClick(e, project.demo!)}
                          className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors text-white"
                        >
                          <ExternalLink size={20} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-100 transition-colors text-gray-800 dark:text-gray-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 sm:mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-zinc-700 text-xs rounded-md text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-700 text-xs rounded-md text-gray-700 dark:text-gray-300">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="text-pink-600 dark:text-pink-500 hover:text-pink-700 dark:hover:text-pink-400 flex items-center gap-2 group/btn text-sm sm:text-base">
                    View Details
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default WorkSection;