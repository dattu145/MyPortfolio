import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Briefcase } from 'lucide-react';
import { projects } from '../data/projects';

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-8 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-400 hover:text-pink-600 transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-gray-400">{project.description}</p>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 border border-zinc-800">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <Calendar className="text-pink-600 mb-3" size={24} />
              <div className="text-sm text-gray-500 mb-1">Created</div>
              <div className="font-semibold">{project.created}</div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <Briefcase className="text-pink-600 mb-3" size={24} />
              <div className="text-sm text-gray-500 mb-1">Role</div>
              <div className="font-semibold">{project.role}</div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="flex gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg flex items-center justify-center gap-2 hover:from-pink-700 hover:to-rose-700 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-zinc-800 rounded-lg flex items-center justify-center gap-2 hover:bg-zinc-700 transition-colors"
                  >
                    <Github size={18} />
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">About This Project</h2>
            <p className="text-gray-400 leading-relaxed text-lg">{project.detailedDescription}</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-zinc-800 rounded-lg text-gray-300 hover:bg-pink-600 hover:text-white transition-colors"
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
            className="mt-12 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
            <button
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="px-8 py-3 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 rounded-lg transition-all"
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
