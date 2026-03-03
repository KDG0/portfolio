"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

const metrics = [
  { value: "6+", label: "Projects Delivered" },
  { value: "3", label: "AI Chatbots Live" },
  { value: "2", label: "Countries" },
  { value: "24/7", label: "AI Assistants Running" },
];

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader label="What people say" heading="Numbers that speak for themselves." />

        {/* Metrics placeholder */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl border border-white/5 bg-white/[0.02] text-center"
            >
              <span className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-[#E94560]">
                {metric.value}
              </span>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-medium text-white mt-2">
                {metric.label}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
