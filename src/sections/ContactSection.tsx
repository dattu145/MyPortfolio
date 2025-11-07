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
    <section id="contact" className="min-h-screen flex items-center justify-center px-8 py-24">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-pink-600 text-sm font-semibold tracking-wider uppercase">Get in touch</span>
          <h2 className="text-5xl font-bold mt-4">Contact Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <a href="mailto:dattavignesh001@gmail.com" className="block">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-pink-600 transition-colors group">
                <Mail className="text-pink-600 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-400">dattavignesh001@gmail.com</p>
              </div>
            </a>

            <a href="https://wa.me/918008998312" target="_blank" rel="noopener noreferrer" className="block">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-pink-600 transition-colors group">
                <Phone className="text-pink-600 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold mb-2">Whatsapp</h3>
                <p className="text-gray-400">+91 80089-98312</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/datta-vignesh-b09437223/" target="_blank" rel="noopener noreferrer" className="block">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-pink-600 transition-colors group">
                <Linkedin className="text-pink-600 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
                <p className="text-gray-400">Datta Vignesh</p>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-8"
          >
            <form onSubmit={handleSubmit} action="https://formspree.io/f/mvgprgzy" method="POST" className="space-y-6">
              {formStatus && (
                <div className={`p-4 rounded-lg ${formStatus.includes('success') ? 'bg-green-900/20 text-green-400' : 'bg-red-900/20 text-red-400'}`}>
                  {formStatus}
                </div>
              )}

              <div className="relative">
                <input
                  type="text"
                  name="username"
                  required
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-600 transition-colors peer placeholder-transparent"
                  placeholder="Username"
                />
                <label className="absolute left-4 -top-2.5 bg-zinc-900 px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-pink-600">
                  Username
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-600 transition-colors peer placeholder-transparent"
                  placeholder="Email"
                />
                <label className="absolute left-4 -top-2.5 bg-zinc-900 px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-pink-600">
                  Email
                </label>
              </div>

              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-600 transition-colors peer placeholder-transparent"
                  placeholder="Phone"
                />
                <label className="absolute left-4 -top-2.5 bg-zinc-900 px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-pink-600">
                  Phone
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-600 transition-colors peer placeholder-transparent resize-none"
                  placeholder="Message"
                ></textarea>
                <label className="absolute left-4 -top-2.5 bg-zinc-900 px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-pink-600">
                  Message
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 rounded-lg flex items-center justify-center gap-2 transition-all group"
              >
                <Send size={20} />
                Hit Me Up
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 text-gray-500 text-sm"
        >
          <p>© 2025 Dattu. Built with React, TypeScript & Tailwind CSS</p>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
