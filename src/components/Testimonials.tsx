"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

const metrics = [
  { value: "100+", label: "Hours Saved for Clients" },
  { value: "3", label: "AI Chatbots Running 24/7" },
  { value: "5★", label: "Client Rating" },
  { value: "⚡", label: "Seconds to Respond (not hours)" },
];

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader label="Results so far" heading="Built with precision. Backed by results." />

        {/* Testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-8 rounded-xl border border-card-border bg-card-bg mb-10 overflow-hidden"
        >
          {/* Decorative quote mark */}
          <span
            className="absolute top-4 left-6 font-[family-name:var(--font-space-grotesk)] text-[120px] leading-none text-accent select-none pointer-events-none"
            style={{ opacity: 0.15 }}
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <div className="relative z-10">
            <p className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-heading mb-4">
              Exceptional work — delivered fast, explained clearly, and it just works.
            </p>
            <p className="font-[family-name:var(--font-ibm-plex-sans)] text-muted leading-relaxed mb-6">
              Kevin built our AI chatbot from scratch and had it live within days. He took the time to understand
              our business, trained the bot on our actual content, and the results were immediate — customers
              stopped messaging us asking basic questions because the bot handles it all. Communication was
              smooth, timelines were respected, and the quality was exactly what we needed. Highly recommend
              for any business looking to save time and look more professional online.
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              {/* Stars */}
              <div className="flex items-center gap-0.5" aria-label="5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <div>
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-foreground font-medium">
                  Valentina R.
                </span>
                <span className="text-muted text-sm"> — Business Owner</span>
              </div>

              {/* Verified badge */}
              <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-[family-name:var(--font-jetbrains-mono)] bg-tag-bg text-tag-text border border-card-border rounded-full">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Verified on Upwork
              </span>
            </div>
          </div>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl border border-card-border bg-card-bg text-center"
            >
              <span className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-accent">
                {metric.value}
              </span>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-medium text-heading mt-2">
                {metric.label}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
