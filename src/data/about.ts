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
  aboutImage: "/mypic.png",
  tagline: "Dattu's Portfolio",
  stats: [
    { icon: "Award", label: "Experience", value: "Fresher" },
    { icon: "Briefcase", label: "Completed", value: "6+ Projects" },
    { icon: "Headphones", label: "Support", value: "Online 24/7" },
  ],
  linkedinUrl: "https://www.linkedin.com/in/datta-vignesh-b09437223/",
  resumeUrl: "/resume.pdf",
};