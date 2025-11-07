import { motion } from 'framer-motion';
import { useState } from 'react';

interface Skill {
  name: string;
  percentage: number;
}

interface SkillCategory {
  category: string;
  subtitle: string;
  skills: Skill[];
}

function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0);

  const skillCategories: SkillCategory[] = [
    {
      category: 'MERN Stack',
      subtitle: '(Primary)',
      skills: [
        { name: 'Frontend - React.js, TypeScript, JavaScript (ES6+), Tailwind CSS', percentage: 90 },
        { name: 'Backend - Node.js, Express.js, REST APIs, GraphQL', percentage: 85 },
        { name: 'Database - MongoDB, Mongoose ORM, Firebase, Supabase', percentage: 85 },
        { name: 'API Development - RESTful & GraphQL APIs, Postman, Swagger', percentage: 80 },
        { name: 'Authentication & Auth - JWT, OAuth2.0, Firebase Auth', percentage: 85 },
        { name: 'Dev Tools - Git, GitHub, VS Code, Postman, Vite', percentage: 90 },
        { name: 'Deployment - Render, Vercel, Netlify, Docker (Basics)', percentage: 80 },
      ],
    },
    {
      category: 'CS Core',
      subtitle: '(Strong Fundamentals)',
      skills: [
        { name: 'DSA in Java (Arrays → Trees → Graphs → DP, etc.)', percentage: 85 },
        { name: 'System Design - Scalable architecture, Design Patterns', percentage: 80 },
        { name: 'Networking - DNS, HTTP, TLS, NAT, Load Balancers', percentage: 90 },
        { name: 'OS Concepts - Threads, Memory Mgmt, Scheduling', percentage: 70 },
        { name: 'DBMS & SQL - ACID, Indexing, Normalization', percentage: 75 },
      ],
    },
    {
      category: 'Additional Exposure',
      subtitle: '(Basics)',
      skills: [
        { name: 'Version Control - Git, GitHub/GitLab', percentage: 85 },
        { name: 'Cloud - AWS basics (EC2, S3, Lambda)', percentage: 60 },
        { name: 'DevOps Tools - Docker, Jenkins (CI/CD)', percentage: 65 },
        { name: 'Python Web - Flask', percentage: 70 },
        { name: 'Machine Learning - Basics with Scikit-learn, TensorFlow', percentage: 60 },
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-8 py-24">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">My Experience</h2>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg transition-all ${
                activeTab === index
                  ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white'
                  : 'bg-zinc-900 border border-zinc-800 text-gray-400 hover:border-pink-600'
              }`}
            >
              <div className="font-semibold">{category.category}</div>
              <div className="text-xs opacity-75">{category.subtitle}</div>
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          {skillCategories[activeTab].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-pink-600 transition-colors group"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold group-hover:text-pink-600 transition-colors">
                  {skill.name}
                </h3>
                <span className="text-pink-600 font-mono font-bold">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-pink-600 to-rose-600 rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ExperienceSection;
