"use client";

import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "CopyForge — AI Content Generator",
    description:
      "AI-powered content generator that creates professional emails, LinkedIn posts, and product descriptions using the Anthropic Claude API. Features real-time generation, multiple content types, and a clean modern interface.",
    tags: ["Next.js", "Claude API", "Tailwind CSS"],
    liveUrl: "https://copyforge-one.vercel.app/",
    githubUrl: "https://github.com/KDG0/copyforge",
    badge: "AI",
  },
  {
    title: "Nova Digital — Marketing Agency",
    description:
      "Digital marketing agency landing page featuring glassmorphism cards, animated gradients, live dashboard mockup in hero, case studies with before/after metrics, and a visual process timeline. Built with Next.js App Router using both Server and Client Components.",
    tags: ["Next.js 14", "App Router", "Tailwind CSS"],
    liveUrl: "https://nova-digital-landing.vercel.app/",
    githubUrl: "https://github.com/KDG0/nova-digital-landing",
  },
  {
    title: "Apex Fitness — Gym Landing Page",
    description:
      "High-energy gym landing page with bold neon accents, animated stat counters, custom React hooks (useScrollReveal, useCounter), component-based architecture, and aggressive visual design with clip-paths and geometric elements.",
    tags: ["React", "Vite", "Tailwind CSS"],
    liveUrl: "https://apex-fitness-landing.vercel.app/",
    githubUrl: "https://github.com/KDG0/apex-fitness-landing",
  },
  {
    title: "Iron & Ink — Tattoo Studio",
    description:
      "Premium tattoo studio landing page featuring dark mode elegance with gold accents, scroll reveal animations, responsive design, and a full booking flow. Built with zero frameworks — pure HTML/CSS/JS.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://iron-and-ink-landing.vercel.app/",
    githubUrl: "https://github.com/KDG0/iron-and-ink-landing",
  },
  {
    title: "Ember & Oak — Restaurant",
    description:
      "Farm-to-table restaurant landing page with warm organic aesthetics, earthy color palette, subtle parallax effects, menu highlights section, and artisan coffee showcase. Clean, inviting design with zero dependencies.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://ember-and-oak-landing.vercel.app/",
    githubUrl: "https://github.com/KDG0/ember-and-oak-landing",
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader label="Projects" heading="Selected work." />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
