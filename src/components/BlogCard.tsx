"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  badge?: string;
  slug?: string;
}

export default function BlogCard({
  title,
  description,
  date,
  badge,
  slug,
}: BlogCardProps) {
  const cardClass =
    "group block p-6 lg:p-8 rounded-xl border border-card-border bg-card-bg hover:border-accent/30 transition-all duration-300";

  const content = (
    <>
      <div className="flex items-center gap-3 mb-4">
        {badge && (
          <span className="inline-block px-2.5 py-1 text-xs font-medium font-[family-name:var(--font-jetbrains-mono)] bg-accent/10 text-accent rounded-full border border-accent/20">
            {badge}
          </span>
        )}
        <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-muted">
          {date}
        </span>
      </div>

      <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-heading mb-3 group-hover:text-accent transition-colors">
        {title}
      </h3>

      <p className="font-[family-name:var(--font-ibm-plex-sans)] text-muted leading-relaxed">
        {description}
      </p>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {slug ? (
        <Link href={`/blog/${slug}`} className={cardClass}>
          {content}
        </Link>
      ) : (
        <div className={cardClass}>{content}</div>
      )}
    </motion.div>
  );
}
