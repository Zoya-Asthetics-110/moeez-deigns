
import React from 'react';
import { Project, Skill, Concept } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Vanguard Brand Identity",
    category: "Branding",
    image: "https://picsum.photos/id/26/800/600",
    description: "A complete visual overhaul for a modern fintech startup."
  },
  {
    id: 2,
    title: "Neon Nights Poster Series",
    category: "Illustration",
    image: "https://picsum.photos/id/37/800/600",
    description: "Cyberpunk-inspired digital illustrations exploring city life."
  },
  {
    id: 3,
    title: "EcoSphere App UI",
    category: "UI/UX Design",
    image: "https://picsum.photos/id/42/800/600",
    description: "Sustainable living interface with intuitive navigation."
  },
  {
    id: 4,
    title: "Luminary Editorial",
    category: "Print",
    image: "https://picsum.photos/id/54/800/600",
    description: "Minimalist magazine layout design for luxury fashion."
  }
];

export const CONCEPTS: Concept[] = [
  {
    id: 1,
    title: "Hyper-Glass OS",
    tags: ["OS Design", "3D"],
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800",
    year: "2024"
  },
  {
    id: 2,
    title: "Digital Brutalism",
    tags: ["Typography", "Poster"],
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800",
    year: "2023"
  },
  {
    id: 3,
    title: "Luminous Bio-Tech",
    tags: ["Branding", "Futurism"],
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800",
    year: "2024"
  },
  {
    id: 4,
    title: "Cyber-Organic UI",
    tags: ["Interface", "Motion"],
    image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=800",
    year: "2024"
  }
];

export const SKILLS: Skill[] = [
  { name: "Adobe Photoshop", level: 95, icon: "🎨" },
  { name: "Adobe Illustrator", level: 90, icon: "✒️" },
  { name: "Figma", level: 85, icon: "📱" },
  { name: "After Effects", level: 80, icon: "🎞️" },
  { name: "3D Blender", level: 70, icon: "🧊" }
];
