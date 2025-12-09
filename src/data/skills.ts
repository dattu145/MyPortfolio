// src/data/skills.ts
export const skillCategories = [
  {
    category: "MERN Stack",
    subtitle: "(Primary)",
    skills: [
      { name: "Frontend - React.js, TypeScript, JavaScript (ES6+), Tailwind CSS", percentage: 90 },
      { name: "Backend - Node.js, Express.js, REST APIs, GraphQL", percentage: 85 },
      { name: "Database - MongoDB, Mongoose ORM, Firebase, Supabase", percentage: 85 },
      { name: "API Development - RESTful & GraphQL APIs, Postman, Swagger", percentage: 80 },
      { name: "Authentication & Auth - JWT, OAuth2.0, Firebase Auth", percentage: 85 },
      { name: "Dev Tools - Git, GitHub, VS Code, Postman, Vite", percentage: 90 },
      { name: "Deployment - Render, Vercel, Netlify, Docker (Basics)", percentage: 80 }
    ]
  },
  {
    category: "CS Core",
    subtitle: "(Strong Fundamentals)",
    skills: [
      { name: "DSA in Java (Arrays → Trees → Graphs → DP, etc.)", percentage: 85 },
      { name: "Object-Oriented Programming", percentage: 90 },
      { name: "System Design - Scalable architecture, Design Patterns", percentage: 90 },
      { name: "DBMS & SQL - ACID, Indexing, Normalization", percentage: 80 },
      { name: "OS Concepts - Threads, Memory Mgmt, Scheduling", percentage: 75 },
      { name: "Networking - DNS, HTTP, TLS, NAT, Load Balancers", percentage: 70 }
    ]
  },
  {
    category: "Additional Exposure",
    subtitle: "(Basics)",
    skills: [
      { name: "Version Control - Git, GitHub/GitLab", percentage: 90 },
      { name: "Cloud - AWS basics (EC2, S3, Lambda)", percentage: 75 },
      { name: "DevOps Tools - Docker, Jenkins (CI/CD)", percentage: 80 },
      { name: "Python Web - Flask", percentage: 85 },
      { name: "Machine Learning - Scikit-learn, TensorFlow", percentage: 55 }
    ]
  }
];