export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  category: 'mern' | 'extra';
  technologies: string[];
  role: string;
  created: string;
  demo?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 'peerflex',
    title: 'Peerflex - A student Economy',
    description: 'AI-powered web platform that will enable students to create resumes and portfolios seamlessly, with frontend completed and backend in progress.',
    detailedDescription: 'AI-powered web platform that will enable students to create resumes and portfolios seamlessly, with frontend completed and backend in progress. Features include AI-powered resume generation, portfolio builder, student collaboration tools, and project showcase capabilities.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'mern',
    technologies: ['ReactJS', 'NodeJS', 'TypeScript', 'AI Integration', 'Render Cloud Deployment'],
    role: 'Web FullStack',
    created: '8 Aug 2025',
    demo: 'https://peerflex.onrender.com',
    github: 'https://github.com/dattu145/Peerflex.git',
  },
  {
    id: 'movieverse',
    title: 'MovieVerse',
    description: 'Built movie platform with React (Routing, Hooks, Context API), TMDB API, and Firebase for persistent favorites & personalized search',
    detailedDescription: 'A comprehensive movie discovery platform built with React featuring advanced routing, state management with Context API, and real-time data from TMDB API. Users can search for movies, view detailed information, save favorites with Firebase persistence, and get personalized recommendations.',
    image: 'https://images.pexels.com/photos/7991158/pexels-photo-7991158.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'mern',
    technologies: ['ReactJS', 'Firebase', 'API Integration', 'Context API', 'TMDB API'],
    role: 'Web Development',
    created: '20 July 2025',
    demo: 'https://movieappreact-gste.onrender.com',
    github: 'https://github.com/dattu145/MovieAppReact.git',
  },
  {
    id: 'vitahealth',
    title: 'VitaHealth',
    description: 'This healthcare assistant provides quick and instant recommendations and suggestions based on User data and Symptoms',
    detailedDescription: 'A healthcare assistant web application that leverages AI to provide instant medical recommendations based on user symptoms and health data. Features include symptom analysis, health recommendations, medicine suggestions, and health tracking with Supabase database.',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'mern',
    technologies: ['ReactJs', 'Supabase', 'NodeJs', 'Gemini API Integration', 'Healthcare AI'],
    role: 'API integration',
    created: '4th Jul 2024',
    demo: 'https://vitahealth.onrender.com',
    github: 'https://github.com/dattu145/VitaHealth.git',
  },
  {
    id: 'email-spam',
    title: 'Email Spam Classifier',
    description: 'This project involves creating a web-based email spam classifier using Machine Learning',
    detailedDescription: 'A machine learning powered email spam detection system built with Python and Flask. The classifier uses NLP techniques and trained ML models to accurately detect spam emails. Features include real-time classification, accuracy metrics display, and a user-friendly web interface.',
    image: 'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'extra',
    technologies: ['HTML', 'CSS', 'JS', 'Flask', 'Google Colab', 'Machine Learning', 'NLP'],
    role: 'Machine Learning',
    created: '4 dec 2022',
    demo: 'https://email-spam-classifier-xyih.onrender.com/',
    github: 'https://github.com/dattu145/Email-spam-classifier',
  },
  {
    id: 'elearning',
    title: 'E-Learning Platform',
    description: 'An AI-powered e-learning tool that answers story questions, summarizes, translates, and explains words instantly.',
    detailedDescription: 'An intelligent e-learning platform powered by Gemini AI that enhances the learning experience. Features include interactive story comprehension, instant text summarization, multi-language translation, word explanations, and adaptive learning paths tailored to individual students.',
    image: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'extra',
    technologies: ['HTML', 'CSS', 'JS', 'Gemini API', 'JSON', 'AI/ML'],
    role: 'AI-Powered Web App',
    created: '12rd Mar 2024',
    demo: 'https://eviaai.onrender.com',
    github: 'https://github.com/dattu145/EviaAI.git',
  },
  {
    id: 'web-scraper',
    title: 'Web Scraper',
    description: 'This Web Scraper is a Flask-based app using BeautifulSoup and Requests to fetch and extract website data like headings, links, images, & text from a given URL.',
    detailedDescription: 'A powerful web scraping tool built with Flask and BeautifulSoup that extracts structured data from websites. Supports extraction of headings, links, images, metadata, and text content. Features include customizable scraping rules, export to CSV/JSON, and rate limiting for ethical scraping.',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'extra',
    technologies: ['Flask', 'BeautifulSoup', 'Requests', 'Python', 'Web Scraping'],
    role: 'Data Science',
    created: '22nd Aug 2023',
    demo: 'https://web-scraper-neon.onrender.com/',
    github: 'https://github.com/dattu145/web_scraper',
  },
];
