"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader label="Projects" heading="Selected work." />

        {/* Empty state */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-2 border-dashed border-white/10 rounded-xl p-12 lg:p-16 text-center"
        >
          <div className="max-w-md mx-auto">
            <div className="text-4xl mb-6 opacity-30">&#123; &#125;</div>
            <p className="font-[family-name:var(--font-ibm-plex-sans)] text-[#666666] text-lg mb-4">
              Projects coming soon. First up: an AI-powered tool built with
              Claude API.
            </p>
            <p className="font-[family-name:var(--font-jetbrains-mono)] text-[#E94560]/50 text-sm">
              {"//"} TODO: ship cool stuff
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
