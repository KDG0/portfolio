"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  heading: string;
}

export default function SectionHeader({ label, heading }: SectionHeaderProps) {
  return (
    <div className="mb-12 lg:mb-16">
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-[#E94560] tracking-wider uppercase"
      >
        {label}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-[family-name:var(--font-space-grotesk)] text-3xl lg:text-5xl font-bold text-white mt-3"
      >
        {heading}
      </motion.h2>
    </div>
  );
}
