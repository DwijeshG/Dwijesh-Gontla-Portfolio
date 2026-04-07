
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Competition {
  year: number;
  rank: string;
  category: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  image?: string;
  websiteUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  link?: string;
}

export interface SkillCategory {
  title: string;
  skills: (string | Skill)[];
}
