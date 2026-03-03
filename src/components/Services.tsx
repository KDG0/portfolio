"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

interface ServiceCardProps {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  index: number;
}

function ServiceCard({ title, description, tags, icon, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-6 lg:p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:border-[#E94560]/30 transition-all duration-300 hover:bg-white/[0.04]"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-[#E94560]/0 group-hover:bg-[#E94560]/[0.02] transition-all duration-300" />

      <div className="relative z-10">
        <div className="text-[#E94560] mb-4 text-2xl">{icon}</div>

        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white mb-3">
          {title}
        </h3>

        <p className="font-[family-name:var(--font-ibm-plex-sans)] text-[#666666] leading-relaxed mb-5">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-[family-name:var(--font-jetbrains-mono)] text-white/50 bg-white/5 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const services = [
  {
    title: "AI Chatbots & Assistants",
    description:
      "An AI assistant that knows your business inside out \u2014 your services, your prices, your hours, your policies \u2014 and answers customer questions 24/7. No more missed leads at midnight. Your chatbot learns from YOUR business data, handles inquiries, guides customers toward booking, and sounds like part of your team \u2014 not a robot.",
    tags: ["AI-Powered", "Trained on Your Data", "24/7", "Custom-Built"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.57-3.25 3.92L12 22" />
        <path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.57 3.25 3.92" />
        <path d="M16 16h3a2 2 0 0 1 0 4h-3" />
        <path d="M8 16H5a2 2 0 0 0 0 4h3" />
      </svg>
    ),
  },
  {
    title: "Workflow Automation",
    description:
      "Those repetitive tasks eating your week? The copy-pasting between apps, the manual follow-ups, the data entry nobody wants to do \u2014 I build systems that handle all of that automatically. Connect your tools, automate your processes, and get hours back every week.",
    tags: ["Saves 10+ Hours/Week", "Connects Your Tools", "Runs While You Sleep"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Websites & Web Apps",
    description:
      "Fast, modern, mobile-ready websites built to convert visitors into customers. Not a template \u2014 a custom site designed for YOUR business, with the features you actually need. Everything is built with the same technology used by companies like Netflix and Airbnb.",
    tags: ["Mobile-Ready", "Fast Loading", "Custom-Built", "Modern Tech"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Power Platform Solutions",
    description:
      "Already using Microsoft tools? I build custom apps, automated workflows, and dashboards using Microsoft\u2019s Power Platform \u2014 designed to fit into the systems your team already knows. Perfect for businesses that run on Microsoft 365.",
    tags: ["Power Apps", "Power Automate", "Dashboards", "Microsoft 365"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <SectionWrapper id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader label="Services" heading="What I build for businesses like yours." />

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
