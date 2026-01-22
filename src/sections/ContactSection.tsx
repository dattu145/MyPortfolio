import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

function ContactSection() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setFormStatus('Message sent successfully!');
        form.reset();
        setTimeout(() => setFormStatus(''), 3000);
      } else {
        setFormStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setFormStatus('An error occurred. Please try again.');
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center bg-gray-100 justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative overflow-hidden dark:bg-black">
      <div className="absolute inset-0 bg-gradient-to-tr from-zinc-150 via-white to-zinc-100 dark:from-zinc-900 dark:via-black dark:to-zinc-950"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-pink-600/10 dark:bg-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-rose-600/10 dark:bg-rose-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="text-pink-600 dark:text-pink-500 text-sm font-semibold tracking-wider uppercase">Get in touch</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 dark:text-white font-bold mt-2">Contact Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <a href="mailto:dattavignesh001@gmail.com" className="block">
              <div className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl p-4 sm:p-6 hover:border-pink-600 dark:hover:border-pink-500 transition-colors group">
                <Mail className="text-pink-600 dark:text-pink-500 mb-3 sm:mb-4 group-hover:scale-110 transition-transform" size={28} />
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-gray-800 dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">dattavignesh001@gmail.com</p>
              </div>
            </a>

            <a href="https://wa.me/918008998312" target="_blank" rel="noopener noreferrer" className="block">
              <div className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl p-4 sm:p-6 hover:border-pink-600 dark:hover:border-pink-500 transition-colors group">
                <Phone className="text-pink-600 dark:text-pink-500 mb-3 sm:mb-4 group-hover:scale-110 transition-transform" size={28} />
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-gray-800 dark:text-white">Whatsapp</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">+91 80089-98312</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/datta-vignesh-b09437223/" target="_blank" rel="noopener noreferrer" className="block">
              <div className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl p-4 sm:p-6 hover:border-pink-600 dark:hover:border-pink-500 transition-colors group">
                <Linkedin className="text-pink-600 dark:text-pink-500 mb-3 sm:mb-4 group-hover:scale-110 transition-transform" size={28} />
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-gray-800 dark:text-white">LinkedIn</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Datta Vignesh</p>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl p-6 sm:p-8"
          >
            <form onSubmit={handleSubmit} action="https://formspree.io/f/mgvwyyak" method="POST" className="space-y-4 sm:space-y-6">
              {formStatus && (
                <div className={`p-3 sm:p-4 rounded-lg text-sm sm:text-base ${formStatus.includes('success')
                  ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                  : 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                  }`}>
                  {formStatus}
                </div>
              )}

              <div className="relative">
                <input
                  type="text"
                  name="username"
                  required
                  className="w-full bg-white dark:bg-zinc-700 border border-gray-300 dark:border-zinc-600 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-pink-600 dark:focus:border-pink-500 transition-colors peer placeholder-transparent text-gray-800 dark:text-white"
                  placeholder="Username"
                />
                <label className="absolute left-4 -top-2.5 bg-white dark:bg-zinc-700 px-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-pink-600 dark:peer-focus:bg-zinc-800 dark:peer-focus:text-pink-500">
                  Username
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-white dark:bg-zinc-700 border border-gray-300 dark:border-zinc-600 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-pink-600 dark:focus:border-pink-500 transition-colors peer placeholder-transparent text-gray-800 dark:text-white"
                  placeholder="Email"
                />
                <label className="absolute left-4 -top-2.5 bg-white dark:bg-zinc-700 px-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-pink-600 dark:peer-focus:bg-zinc-800 dark:peer-focus:text-pink-500">
                  Email
                </label>
              </div>

              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  className="w-full bg-white dark:bg-zinc-700 border border-gray-300 dark:border-zinc-600 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-pink-600 dark:focus:border-pink-500 transition-colors peer placeholder-transparent text-gray-800 dark:text-white"
                  placeholder="Phone"
                />
                <label className="absolute left-4 -top-2.5 bg-white dark:bg-zinc-700 dark:peer-focus:bg-zinc-800 px-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-pink-600 dark:peer-focus:text-pink-500">
                  Phone
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-white dark:bg-zinc-700 border border-gray-300 dark:border-zinc-600 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-pink-600 dark:focus:border-pink-500 transition-colors peer placeholder-transparent resize-none text-gray-800 dark:text-white"
                  placeholder="Message"
                ></textarea>
                <label className="absolute left-4 -top-2.5 bg-white dark:bg-zinc-700 dark:peer-focus:bg-zinc-800 px-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-pink-600 dark:peer-focus:text-pink-500">
                  Message
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 rounded-lg flex items-center justify-center gap-2 transition-all group text-sm sm:text-base text-white"
              >
                <Send size={18} />
                Hit Me Up
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12 text-gray-500 dark:text-gray-400 text-xs sm:text-sm"
        >
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;