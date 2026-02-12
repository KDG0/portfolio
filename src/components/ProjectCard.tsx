"use client";

import { motion } from "framer-motion";

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  link,
}: ProjectCardProps) {
  const Wrapper = link ? "a" : "div";
  const wrapperProps = link
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Wrapper
        {...wrapperProps}
        className="group block p-6 lg:p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:border-[#E94560]/30 transition-all duration-300"
      >
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white mb-3 group-hover:text-[#E94560] transition-colors">
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
      </Wrapper>
    </motion.div>
  );
}
