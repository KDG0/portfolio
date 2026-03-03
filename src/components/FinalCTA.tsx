"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E94560]/5 via-[#E94560]/10 to-[#E94560]/5" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-space-grotesk)] text-3xl lg:text-5xl font-bold text-white mb-6"
        >
          Ready to stop losing customers and start working smarter?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-[family-name:var(--font-ibm-plex-sans)] text-lg text-[#666666] max-w-2xl mx-auto mb-4"
        >
          Let&apos;s talk about what AI and automation can do for your business.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-[family-name:var(--font-ibm-plex-sans)] text-[#666666] max-w-2xl mx-auto mb-10"
        >
          Every project starts with a free 30-minute strategy call &mdash; no pressure, no tech jargon, just a conversation about your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-4"
        >
          <button
            onClick={() => handleScrollTo("contact")}
            className="px-8 py-4 bg-[#E94560] text-white text-lg font-medium rounded-lg hover:bg-[#E94560]/90 transition-all duration-200 hover:shadow-lg hover:shadow-[#E94560]/25"
          >
            Book Your Free Strategy Call &rarr;
          </button>

          <p className="font-[family-name:var(--font-ibm-plex-sans)] text-sm text-[#666666]">
            Or email me directly:{" "}
            <a
              href="mailto:kevin@guifarro.dev"
              className="text-white hover:text-[#E94560] transition-colors"
            >
              kevin@guifarro.dev
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
