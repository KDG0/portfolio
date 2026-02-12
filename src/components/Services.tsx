"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

interface ServiceCardProps {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  comingSoon?: boolean;
  index: number;
}

function ServiceCard({ title, description, tags, icon, comingSoon, index }: ServiceCardProps) {
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
        {comingSoon && (
          <span className="inline-block px-2.5 py-1 text-xs font-medium font-[family-name:var(--font-jetbrains-mono)] bg-[#E94560]/10 text-[#E94560] rounded-full border border-[#E94560]/20 mb-4">
            Coming Soon
          </span>
        )}

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
    title: "Web Development",
    description:
      "Custom web applications built end-to-end with modern standards. From responsive front-ends to robust back-end architecture.",
    tags: ["JavaScript", "Next.js", "Node.js", "HTML/CSS"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Business Automation",
    description:
      "Eliminating manual workflows through custom automation, smart integrations, and Power Automate. Less busywork, more impact.",
    tags: ["N8N", "Power Automate", "APIs", "Integration"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Power Platform",
    description:
      "Enterprise solutions using Microsoft's Power Platform ecosystem. Apps, flows, and dashboards tailored to your business.",
    tags: ["Power Apps", "Power Automate", "Dataverse", "SharePoint"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "AI Integration",
    description:
      "Enhance your products and workflows with intelligent AI capabilities. From chatbots to RAG-powered knowledge systems.",
    tags: ["Claude API", "RAG", "AI Agents", "LLMs"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.57-3.25 3.92L12 22" />
        <path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.57 3.25 3.92" />
        <path d="M16 16h3a2 2 0 0 1 0 4h-3" />
        <path d="M8 16H5a2 2 0 0 0 0 4h3" />
      </svg>
    ),
    comingSoon: true,
  },
];

export default function Services() {
  return (
    <SectionWrapper id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader label="Services" heading="What I can build for you." />

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
