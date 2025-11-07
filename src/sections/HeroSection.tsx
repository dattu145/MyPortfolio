import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, User, MessageCircle, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-900"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm text-gray-400">Follow Me</span>
            <div className="h-px w-12 bg-zinc-700"></div>
            <a
              href="https://github.com/dattu145"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-600 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/datta-vignesh-b09437223/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-600 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>

          <h1 className="text-6xl font-bold mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">Dattu</span>
          </h1>

          <div className="text-2xl text-gray-300 mb-6 h-16">
            <TypeAnimation
              sequence={[
                'Tech Enthusiast',
                2000,
                'MERN Stack Developer',
                2000,
                'Problem Solver',
                2000,
                'SDE Aspirant',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-400 text-lg mb-8 max-w-xl leading-relaxed">
            MERN Stack Developer focused on SDE to build scalable and reliable systems.
          </p>

          <button
            onClick={scrollToAbout}
            className="px-8 py-3 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 rounded-lg flex items-center gap-2 transition-all group"
          >
            <User size={20} />
            More About Me
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>

          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="group cursor-pointer">
              <div className="flex items-center gap-3 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-pink-600 transition-colors">
                <MessageCircle size={20} className="text-pink-600" />
                <div>
                  <div className="text-xs text-gray-500">Messenger</div>
                  <div className="text-sm">dattu.vignesh.731</div>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer">
              <a href="https://wa.me/918008998312" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-3 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-pink-600 transition-colors">
                  <Phone size={20} className="text-pink-600" />
                  <div>
                    <div className="text-xs text-gray-500">Whatsapp</div>
                    <div className="text-sm">80089-98312</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="group cursor-pointer">
              <a href="mailto:dattavignesh001@gmail.com">
                <div className="flex items-center gap-3 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-pink-600 transition-colors">
                  <Mail size={20} className="text-pink-600" />
                  <div>
                    <div className="text-xs text-gray-500">Email</div>
                    <div className="text-sm text-xs">dattavignesh001@gmail.com</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-rose-600/20 rounded-3xl blur-3xl"></div>
          <div className="relative w-full aspect-square rounded-3xl overflow-hidden border border-zinc-800">
            <img
              src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 right-6">
              <a
                href="https://github.com/dattu145"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                <Github size={20} />
                See my Contributions
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
