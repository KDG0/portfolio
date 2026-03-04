"use client";

import { motion } from "framer-motion";

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  badge?: string;
  resultLine?: string;
  metricBadges?: string[];
  index: number;
  variant?: "featured" | "compact";
}

export default function ProjectCard({
  title,
  description,
  tags,
  liveUrl,
  badge,
  resultLine,
  metricBadges,
  index,
  variant = "featured",
}: ProjectCardProps) {
  const isCompact = variant === "compact";

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

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

        <p className={`font-[family-name:var(--font-ibm-plex-sans)] text-muted leading-relaxed mb-4 flex-1 ${
          isCompact ? "line-clamp-2 text-sm" : ""
        }`}>
          {description}
        </p>

        {/* Result line — impact highlight for featured cards */}
        {resultLine && !isCompact && (
          <p className="font-[family-name:var(--font-ibm-plex-sans)] text-foreground font-medium text-sm leading-relaxed mb-4 border-l-2 border-accent pl-3">
            {resultLine}
          </p>
        )}

        {/* Metric badges */}
        {metricBadges && metricBadges.length > 0 && !isCompact && (
          <div className="flex flex-wrap gap-2 mb-4">
            {metricBadges.map((badge) => (
              <span
                key={badge}
                className="px-2.5 py-1 text-xs font-[family-name:var(--font-jetbrains-mono)] text-accent bg-accent/10 border border-accent/20 rounded-md"
              >
                {badge}
              </span>
            ))}
          </div>
        )}

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

        <div className="flex items-center gap-4 flex-wrap">
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

          {/* Business CTA — only on featured cards with resultLine */}
          {resultLine && !isCompact && (
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-accent hover:underline transition-colors"
            >
              Want this for your business? &rarr;
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
