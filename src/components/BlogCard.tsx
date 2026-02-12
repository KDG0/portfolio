"use client";

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
  const Wrapper = slug ? "a" : "div";
  const wrapperProps = slug ? { href: `/blog/${slug}` } : {};

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
        <div className="flex items-center gap-3 mb-4">
          {badge && (
            <span className="inline-block px-2.5 py-1 text-xs font-medium font-[family-name:var(--font-jetbrains-mono)] bg-[#E94560]/10 text-[#E94560] rounded-full border border-[#E94560]/20">
              {badge}
            </span>
          )}
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#666666]">
            {date}
          </span>
        </div>

        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white mb-3 group-hover:text-[#E94560] transition-colors">
          {title}
        </h3>

        <p className="font-[family-name:var(--font-ibm-plex-sans)] text-[#666666] leading-relaxed">
          {description}
        </p>
      </Wrapper>
    </motion.div>
  );
}
