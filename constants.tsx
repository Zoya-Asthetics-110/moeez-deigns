
import React from 'react';
import { Project, Skill } from './types';

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

export const SKILLS: Skill[] = [
  { name: "Adobe Photoshop", level: 95, icon: "🎨" },
  { name: "Adobe Illustrator", level: 90, icon: "✒️" },
  { name: "Figma", level: 85, icon: "📱" },
  { name: "After Effects", level: 80, icon: "🎞️" },
  { name: "3D Blender", level: 70, icon: "🧊" }
];
