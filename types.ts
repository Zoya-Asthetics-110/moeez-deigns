
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Concept {
  id: number;
  title: string;
  tags: string[];
  image: string;
  year: string;
}

export interface PressAsset {
  id: number;
  name: string;
  type: string;
  preview: string;
  size: string;
}

export interface Stat {
  id: number;
  label: string;
  value: string;
  suffix: string;
  icon: string;
  color: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
