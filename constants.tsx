
import React from 'react';
import { Project, Skill, Concept, PressAsset, Stat, ProcessStep } from './types';

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

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "01",
    title: "Discovery & Strategy",
    description: "We deep-dive into your brand's DNA, analyzing competitors and defining a visual trajectory that ensures market disruption.",
    icon: "🔍",
    tags: ["RESEARCH", "AUDIT", "MOODBOARD"]
  },
  {
    id: "02",
    title: "Ideation & Sketching",
    description: "The conceptual phase where raw ideas become visual blueprints. We explore multiple directions to find the one true 'spark'.",
    icon: "🎨",
    tags: ["CONCEPTING", "VECTORING", "STYLE"]
  },
  {
    id: "03",
    title: "High-Fidelity Crafting",
    description: "Transforming chosen concepts into pixel-perfect assets with cinematic lighting, depth, and strategic color theory.",
    icon: "✨",
    tags: ["REFINEMENT", "3D", "TYPOGRAPHY"]
  },
  {
    id: "04",
    title: "Final Delivery",
    description: "Deployment of all brand assets in high-resolution formats, including full identity guides and digital ecosystems.",
    icon: "🚀",
    tags: ["PACKAGING", "HANDOVER", "SUPPORT"]
  }
];

export const PRESS_ASSETS: PressAsset[] = [
  {
    id: 1,
    name: "Primary Neon Logo",
    type: "PNG / SVG",
    preview: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=400",
    size: "2.4 MB"
  },
  {
    id: 2,
    name: "Mono Dark Logo",
    type: "PNG",
    preview: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=400",
    size: "1.1 MB"
  },
  {
    id: 3,
    name: "Studio Headshots",
    type: "ZIP / JPG",
    preview: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=400",
    size: "45 MB"
  },
  {
    id: 4,
    name: "Brand Patterns",
    type: "AI / PDF",
    preview: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=400",
    size: "12 MB"
  }
];

export const STATS: Stat[] = [
  { id: 1, label: "Projects Completed", value: "150", suffix: "+", icon: "🚀", color: "cyan" },
  { id: 2, label: "Coffee Consumed", value: "840", suffix: "L", icon: "☕", color: "purple" },
  { id: 3, label: "Design Hours", value: "4200", suffix: "+", icon: "⏳", color: "blue" },
  { id: 4, label: "Happy Clients", value: "98", suffix: "%", icon: "💎", color: "cyan" }
];

export const SKILLS: Skill[] = [
  { name: "Adobe Photoshop", level: 95, icon: "🎨" },
  { name: "Adobe Illustrator", level: 90, icon: "✒️" },
  { name: "Figma", level: 85, icon: "📱" },
  { name: "After Effects", level: 80, icon: "🎞️" },
  { name: "3D Blender", level: 70, icon: "🧊" }
];
