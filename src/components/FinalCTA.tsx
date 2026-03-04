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
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-accent/10 to-accent/5" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-space-grotesk)] text-3xl lg:text-5xl font-bold text-heading mb-6"
        >
          Ready to stop losing customers and start working smarter?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-[family-name:var(--font-ibm-plex-sans)] text-lg text-muted max-w-2xl mx-auto mb-4"
        >
          Let&apos;s talk about what AI and automation can do for your business.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-[family-name:var(--font-ibm-plex-sans)] text-muted max-w-2xl mx-auto mb-10"
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
            className="px-8 py-4 bg-accent text-white text-lg font-medium rounded-lg hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
          >
            Book Your Free Strategy Call &rarr;
          </button>

          <p className="font-[family-name:var(--font-ibm-plex-sans)] text-sm text-muted">
            Or email me directly:{" "}
            <a
              href="mailto:kevin@guifarro.dev"
              className="text-foreground hover:text-accent transition-colors"
            >
              kevin@guifarro.dev
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
