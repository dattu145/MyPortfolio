import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

function QualificationsSection() {
  const education = [
    {
      school: 'Sri Chaitanya Techno School',
      degree: '10th Grade',
      period: '2012 - 2020',
    },
    {
      school: 'Career Point College',
      degree: '11th and 12th Grade',
      period: '2020 - 2022',
    },
    {
      school: 'Mahendra College Of Engineering',
      degree: 'Bachelor of Technology in AI & DS',
      period: '2022 - 2026',
    },
  ];

  return (
    <section id="qualifications" className="min-h-screen flex items-center justify-center px-8 py-24">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-pink-600 text-sm font-semibold tracking-wider uppercase">My Journey</span>
          <h2 className="text-5xl font-bold mt-4">Qualifications</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-pink-600" size={32} />
              <h3 className="text-3xl font-bold">Education</h3>
            </div>

            <div className="relative pl-8 space-y-8">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-600 to-transparent"></div>

              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute -left-10 top-0 w-4 h-4 bg-pink-600 rounded-full border-4 border-black group-hover:scale-125 transition-transform"></div>

                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-pink-600 transition-colors">
                    <h4 className="text-xl font-bold mb-2">{item.school}</h4>
                    <p className="text-gray-400 mb-3">{item.degree}</p>
                    <div className="flex items-center gap-2 text-sm text-pink-600">
                      <Calendar size={16} />
                      {item.period}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-pink-600" size={32} />
              <h3 className="text-3xl font-bold">Experience</h3>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-600 to-transparent"></div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -left-10 top-0 w-4 h-4 bg-pink-600 rounded-full border-4 border-black group-hover:scale-125 transition-transform"></div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-pink-600 transition-colors">
                  <h4 className="text-xl font-bold mb-2">No experience yet</h4>
                  <p className="text-gray-400">Currently focusing on building strong foundational projects and learning industry-standard technologies.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default QualificationsSection;
