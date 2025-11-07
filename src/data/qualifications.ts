export interface EducationItem {
  school: string;
  degree: string;
  period: string;
}

export interface ExperienceItem {
  title: string;
  description: string;
  period?: string;
}

export interface QualificationsData {
  intro: string;
  title: string;
  education: EducationItem[];
  experience: ExperienceItem[];
}

export const qualificationsData: QualificationsData = {
  intro: "My Journey",
  title: "Qualifications",
  education: [
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
  ],
  experience: [
    {
      title: 'No experience yet',
      description: 'Currently focusing on building strong foundational projects and learning industry-standard technologies.',
    },
  ],
};