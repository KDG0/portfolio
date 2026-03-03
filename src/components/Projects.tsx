"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";

const featuredProjects = [
  {
    title: "Iron & Ink \u2014 AI Chatbot for a Tattoo Studio",
    description:
      "Built a complete website and AI chatbot for a tattoo studio. The chatbot answers customer questions about services, pricing, available artists, studio hours, and how to book \u2014 all trained on the studio\u2019s real business information. Customers get instant answers. The studio stops losing leads to unanswered DMs.",
    tags: ["AI Chatbot", "Business Website", "Trained on Business Data"],
    liveUrl: "https://iron-and-ink-landing.vercel.app/",
    githubUrl: "https://github.com/KDG0/iron-and-ink-landing",
    badge: "AI",
  },
  {
    title: "La Mesa Dorada \u2014 AI-Powered Restaurant Website",
    description:
      "A modern restaurant website with an AI chat assistant built in. Customers can ask about the menu, prices, reservations, and hours in real time \u2014 in English or Spanish. The restaurant gets a premium online presence and a virtual host that never takes a break.",
    tags: ["AI Assistant", "Restaurant", "Bilingual"],
    liveUrl: "https://la-mesa-dorada.vercel.app/",
    githubUrl: "https://github.com/KDG0/La-Mesa-Dorada",
    badge: "AI",
  },
  {
    title: "CopyForge \u2014 AI Content Generator",
    description:
      "An AI-powered tool that creates professional emails, social media posts, and product descriptions in seconds. Built for business owners and marketers who need quality content fast without hiring a copywriter. Type what you need, pick a format, and get polished content ready to use.",
    tags: ["AI Tool", "Content Creation", "SaaS Product"],
    liveUrl: "https://copyforge-one.vercel.app/",
    githubUrl: "https://github.com/KDG0/copyforge",
    badge: "AI",
  },
];

const landingPages = [
  {
    title: "Nova Digital \u2014 Marketing Agency Landing Page",
    description:
      "Professional agency website with animated dashboards, case studies with before/after metrics, and a visual process timeline.",
    tags: ["Next.js 14", "App Router", "Tailwind CSS"],
    liveUrl: "https://nova-digital-landing.vercel.app/",
    githubUrl: "https://github.com/KDG0/nova-digital-landing",
  },
  {
    title: "Apex Fitness \u2014 Gym Landing Page",
    description:
      "High-energy gym website with animated counters, bold design, and conversion-focused layout.",
    tags: ["React", "Vite", "Tailwind CSS"],
    liveUrl: "https://apex-fitness-landing.vercel.app/",
    githubUrl: "https://github.com/KDG0/apex-fitness-landing",
  },
  {
    title: "Ember & Oak \u2014 Restaurant Landing Page",
    description:
      "Warm, inviting restaurant site with organic aesthetics, menu showcase, and reservation flow.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://ember-and-oak-landing.vercel.app/",
    githubUrl: "https://github.com/KDG0/ember-and-oak-landing",
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="work">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader label="Work" heading="Real projects. Real businesses. Real results." />

        {/* Featured AI Projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} variant="featured" />
          ))}
        </div>

        {/* Landing Pages */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-[#E94560] tracking-wider uppercase mb-6"
        >
          More Work
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {landingPages.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} variant="compact" />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
