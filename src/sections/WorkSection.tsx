import { motion } from 'framer-motion';
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

  return (
    <section id="work" className="min-h-screen flex items-center justify-center px-8 py-24">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-pink-600 text-sm font-semibold tracking-wider uppercase">My Portfolio</span>
          <h2 className="text-5xl font-bold mt-4">Recent Works</h2>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['all', 'mern', 'extra'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-lg transition-all ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white'
                  : 'bg-zinc-900 border border-zinc-800 text-gray-400 hover:border-pink-600'
              }`}
            >
              {filter === 'all' ? 'All' : filter === 'mern' ? 'MERN' : 'Extra'}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-pink-600 transition-all group"
            >
              <div className="relative overflow-hidden aspect-video bg-zinc-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-pink-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-zinc-800 text-xs rounded-md text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-zinc-800 text-xs rounded-md text-gray-300">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="text-pink-600 hover:text-pink-700 flex items-center gap-2 group/btn"
                >
                  View Details
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default WorkSection;
