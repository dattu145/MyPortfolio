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
      <div className="min-h-screen flex items-center justify-center px-4 xs:px-6 sm:px-8 bg-gray-100 dark:bg-black relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-150 via-white to-zinc-100 dark:from-zinc-900 dark:via-black dark:to-zinc-900"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-pink-600/10 dark:bg-pink-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-rose-600/10 dark:bg-rose-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="text-center relative z-10">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Project Not Found</h1>
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
    <div className="min-h-screen flex items-center bg-gray-100 justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative overflow-hidden dark:bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-zinc-150 via-white to-zinc-100 dark:from-zinc-900 dark:via-black dark:to-zinc-900"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-pink-600/10 dark:bg-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-rose-600/10 dark:bg-rose-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl w-full relative z-10">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
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
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 xs:mb-4 text-gray-800 dark:text-white">{project.title}</h1>
            <p className="text-base xs:text-lg sm:text-xl text-gray-600 dark:text-gray-400">{project.description}</p>
          </div>

          <div className="relative aspect-video rounded-xl xs:rounded-2xl overflow-hidden mb-6 xs:mb-8 border border-gray-200 dark:border-zinc-700">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 mb-6 xs:mb-8">
            <div className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg xs:rounded-xl p-4 xs:p-6">
              <Calendar className="text-pink-600 dark:text-pink-500 mb-2 xs:mb-3" size={20} xs:size={24} />
              <div className="text-xs xs:text-sm text-gray-500 dark:text-gray-400 mb-1">Created</div>
              <div className="font-semibold text-sm xs:text-base text-gray-800 dark:text-white">{project.created}</div>
            </div>

            <div className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg xs:rounded-xl p-4 xs:p-6">
              <Briefcase className="text-pink-600 dark:text-pink-500 mb-2 xs:mb-3" size={20} xs:size={24} />
              <div className="text-xs xs:text-sm text-gray-500 dark:text-gray-400 mb-1">Role</div>
              <div className="font-semibold text-sm xs:text-base text-gray-800 dark:text-white">{project.role}</div>
            </div>

            <div className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg xs:rounded-xl p-4 xs:p-6 sm:col-span-2 lg:col-span-1">
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
                    className="flex-1 px-3 xs:px-4 py-2 bg-gray-200 dark:bg-zinc-700 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-300 dark:hover:bg-zinc-600 transition-colors text-gray-800 dark:text-white text-sm xs:text-base"
                  >
                    <Github size={16} xs:size={18} />
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl p-4 xs:p-6 sm:p-8 mb-6 xs:mb-8">
            <h2 className="text-xl xs:text-2xl font-bold mb-3 xs:mb-4 text-gray-800 dark:text-white">About This Project</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm xs:text-base sm:text-lg">{project.detailedDescription}</p>
          </div>

          <div className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl p-4 xs:p-6 sm:p-8">
            <h2 className="text-xl xs:text-2xl font-bold mb-4 xs:mb-6 text-gray-800 dark:text-white">Technologies Used</h2>
            <div className="flex flex-wrap gap-2 xs:gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 xs:px-4 py-1 xs:py-2 bg-gray-200 dark:bg-zinc-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-pink-600 hover:text-white transition-colors text-xs xs:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 xs:mt-10 sm:mt-12 text-center">
            <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-3 xs:mb-4 text-gray-800 dark:text-white">Interested in working together?</h3>
            <button
              onClick={handleGetInTouch}
              className="px-6 xs:px-8 py-2 xs:py-3 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 rounded-lg transition-all text-white text-sm xs:text-base"
            >
              Get in Touch
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectDetails;