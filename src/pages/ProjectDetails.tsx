import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Briefcase } from 'lucide-react';
import { projects } from '../data/projects';

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const project = projects.find((p) => p.id === id);

  // Get the saved scroll position from navigation state
  const savedScrollPosition = location.state?.scrollPosition || 0;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 xs:px-6 sm:px-8 bg-white dark:bg-zinc-900">
        <div className="text-center">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-4 xs:px-6 py-2 xs:py-3 bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg text-white text-sm xs:text-base"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleBackToProjects = () => {
    navigate('/', { state: { scrollPosition: savedScrollPosition } });
  };

  const handleGetInTouch = () => {
    navigate('/', { state: { scrollToContact: true } });
  };

  return (
    <div className="min-h-screen px-3 xs:px-4 sm:px-6 lg:px-8 py-16 xs:py-20 sm:py-24 bg-white dark:bg-zinc-900">
      <div className="max-w-5xl mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={handleBackToProjects}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-500 transition-colors mb-6 xs:mb-8 group text-sm xs:text-base"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 xs:mb-8">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 xs:mb-4 text-gray-900 dark:text-white">{project.title}</h1>
            <p className="text-base xs:text-lg sm:text-xl text-gray-600 dark:text-gray-400">{project.description}</p>
          </div>

          <div className="relative aspect-video rounded-xl xs:rounded-2xl overflow-hidden mb-6 xs:mb-8 border border-gray-200 dark:border-zinc-800">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 mb-6 xs:mb-8">
            <div className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg xs:rounded-xl p-4 xs:p-6">
              <Calendar className="text-pink-600 dark:text-pink-500 mb-2 xs:mb-3" size={20} xs:size={24} />
              <div className="text-xs xs:text-sm text-gray-500 dark:text-gray-400 mb-1">Created</div>
              <div className="font-semibold text-sm xs:text-base text-gray-900 dark:text-white">{project.created}</div>
            </div>

            <div className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg xs:rounded-xl p-4 xs:p-6">
              <Briefcase className="text-pink-600 dark:text-pink-500 mb-2 xs:mb-3" size={20} xs:size={24} />
              <div className="text-xs xs:text-sm text-gray-500 dark:text-gray-400 mb-1">Role</div>
              <div className="font-semibold text-sm xs:text-base text-gray-900 dark:text-white">{project.role}</div>
            </div>

            <div className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg xs:rounded-xl p-4 xs:p-6 sm:col-span-2 lg:col-span-1">
              <div className="flex flex-col xs:flex-row gap-2 xs:gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 xs:px-4 py-2 bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg flex items-center justify-center gap-2 hover:from-pink-700 hover:to-rose-700 transition-colors text-white text-sm xs:text-base"
                  >
                    <ExternalLink size={16} xs:size={18} />
                    Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 xs:px-4 py-2 bg-gray-200 dark:bg-zinc-800 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-300 dark:hover:bg-zinc-700 transition-colors text-gray-900 dark:text-white text-sm xs:text-base"
                  >
                    <Github size={16} xs:size={18} />
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-4 xs:p-6 sm:p-8 mb-6 xs:mb-8">
            <h2 className="text-xl xs:text-2xl font-bold mb-3 xs:mb-4 text-gray-900 dark:text-white">About This Project</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm xs:text-base sm:text-lg">{project.detailedDescription}</p>
          </div>

          <div className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-4 xs:p-6 sm:p-8">
            <h2 className="text-xl xs:text-2xl font-bold mb-4 xs:mb-6 text-gray-900 dark:text-white">Technologies Used</h2>
            <div className="flex flex-wrap gap-2 xs:gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 xs:px-4 py-1 xs:py-2 bg-gray-200 dark:bg-zinc-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-pink-600 hover:text-white transition-colors text-xs xs:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 xs:mt-10 sm:mt-12 text-center"
          >
            <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-3 xs:mb-4 text-gray-900 dark:text-white">Interested in working together?</h3>
            <button
              onClick={handleGetInTouch}
              className="px-6 xs:px-8 py-2 xs:py-3 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 rounded-lg transition-all text-white text-sm xs:text-base"
            >
              Get in Touch
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectDetails;