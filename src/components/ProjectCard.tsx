"use client";

import { motion } from "framer-motion";

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  badge?: string;
  index: number;
  variant?: "featured" | "compact";
}

export default function ProjectCard({
  title,
  description,
  tags,
  liveUrl,
  githubUrl,
  badge,
  index,
  variant = "featured",
}: ProjectCardProps) {
  const isCompact = variant === "compact";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative rounded-xl border border-card-border bg-card-bg hover:border-accent/30 transition-all duration-300 hover:bg-card-hover-bg flex flex-col ${
        isCompact ? "p-4 lg:p-5" : "p-6 lg:p-8"
      }`}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-accent/0 group-hover:bg-accent/[0.02] transition-all duration-300" />

      <div className="relative z-10 flex flex-col flex-1">
        {badge && (
          <span className="inline-block self-start px-2.5 py-1 text-xs font-medium font-[family-name:var(--font-jetbrains-mono)] bg-accent/10 text-accent rounded-full border border-accent/20 mb-4">
            {badge}
          </span>
        )}

        <h3 className={`font-[family-name:var(--font-space-grotesk)] font-bold text-heading mb-3 group-hover:text-accent transition-colors ${
          isCompact ? "text-lg" : "text-xl"
        }`}>
          {title}
        </h3>

        <p className={`font-[family-name:var(--font-ibm-plex-sans)] text-muted leading-relaxed mb-5 flex-1 ${
          isCompact ? "line-clamp-2 text-sm" : ""
        }`}>
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {(isCompact ? tags.slice(0, 3) : tags).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-[family-name:var(--font-jetbrains-mono)] text-tag-text bg-tag-bg rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 font-[family-name:var(--font-jetbrains-mono)] text-accent bg-accent/10 hover:bg-accent/20 border border-accent/30 hover:border-accent/50 rounded-lg transition-all duration-300 ${
              isCompact ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
            }`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Live Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 font-[family-name:var(--font-jetbrains-mono)] text-tag-text hover:text-foreground-strong bg-tag-bg hover:bg-card-hover-bg border border-card-border rounded-lg transition-all duration-300 ${
              isCompact ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
            }`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
