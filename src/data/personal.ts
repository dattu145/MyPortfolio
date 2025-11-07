export interface PersonalInfo {
  name: string;
  fullName: string;
  title: string;
  email: string;
  phone: string;
  whatsapp: string;
  linkedin: string;
  github: string;
  leetcode: string;
  messenger: string;
  location: string;
  tagline: string;
  profileImage: string;
  typingSequences: (string | number)[];
}

export const personalInfo: PersonalInfo = {
  name: 'Dattu',
  fullName: 'Datta Vignesh',
  title: 'MERN Stack Developer & SDE Aspirant',
  email: 'dattavignesh001@gmail.com',
  phone: '+91 80089-98312',
  whatsapp: '+918008998312',
  linkedin: 'https://www.linkedin.com/in/datta-vignesh-b09437223/',
  github: 'https://github.com/dattu145',
  leetcode: 'https://leetcode.com/dattu145233/',
  messenger: 'dattu.vignesh.731',
  location: 'India',
  tagline: 'MERN Stack Developer focused on SDE to build scalable and reliable systems.',
  profileImage: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
  typingSequences: [
    'Tech Enthusiast',
    2000,
    'MERN Stack Developer',
    2000,
    'Problem Solver',
    2000,
    'SDE Aspirant',
    2000,
  ],
};