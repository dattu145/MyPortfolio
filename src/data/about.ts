export interface AboutData {
  intro: string;
  title: string;
  name: string;
  role: string;
  description: string;
  aboutImage: string;
  tagline: string;
  stats: {
    icon: string;
    label: string;
    value: string;
  }[];
  linkedinUrl: string;
  resumeUrl: string;
}

export const aboutData: AboutData = {
  intro: "My Intro",
  title: "About Me",
  name: "Dattu",
  role: "SDE Aspirant",
  description: "Driving innovation by building scalable, interactive systems with MERN Stack technologies.",
  aboutImage: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
  tagline: "Dattu's Portfolio",
  stats: [
    { icon: "Award", label: "Experience", value: "Fresher" },
    { icon: "Briefcase", label: "Completed", value: "6+ Projects" },
    { icon: "Headphones", label: "Support", value: "Online 24/7" },
  ],
  linkedinUrl: "https://www.linkedin.com/in/datta-vignesh-b09437223/",
  resumeUrl: "public/resume.pdf",
};