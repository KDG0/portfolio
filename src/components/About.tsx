"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="About"
          heading="The short version: I went from fighting in the ring to fighting bugs in code &mdash; and I bring the same discipline to both."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="/images/projects/me.jpeg"
              alt="Kevin Guifarro — AI Developer based in Costa Rica"
              className="w-full rounded-xl border border-card-border object-cover"
              loading="lazy"
            />
            {/* Decorative glow */}
            <div className="absolute -inset-4 -z-10 bg-accent/5 blur-[60px] rounded-full" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-[family-name:var(--font-ibm-plex-sans)] text-lg text-muted leading-relaxed mb-6">
              I&apos;m Kevin &mdash; an AI developer based in Costa Rica.
            </p>

            <p className="font-[family-name:var(--font-ibm-plex-sans)] text-lg text-muted leading-relaxed mb-6">
              Before I wrote my first line of code, I was a competitive kickboxer. Muay Thai, kickboxing, BJJ &mdash; I spent years training to read opponents, build strategy under pressure, and never quit when things got hard.
            </p>

            <p className="font-[family-name:var(--font-ibm-plex-sans)] text-lg text-muted leading-relaxed mb-6">
              That same discipline is what I bring to every project.
            </p>

            <p className="font-[family-name:var(--font-ibm-plex-sans)] text-lg text-muted leading-relaxed mb-6">
              For the past 8+ years, I&apos;ve worked as a Senior Web Developer at a Fortune 500 company, building and maintaining systems used by teams across the Americas. Enterprise-scale problems. Tight deadlines. Zero room for &ldquo;good enough.&rdquo;
            </p>

            <p className="font-[family-name:var(--font-ibm-plex-sans)] text-lg text-muted leading-relaxed mb-6">
              Now I take that experience and put it to work for small businesses.
            </p>

            <p className="font-[family-name:var(--font-ibm-plex-sans)] text-lg text-muted leading-relaxed mb-6">
              I build AI chatbots that answer your customers at 2am. I automate the repetitive tasks that eat your week. I create websites that actually convert visitors into paying customers. And I do it all with the precision of someone who&apos;s been solving complex problems for nearly a decade at the enterprise level.
            </p>

            <p className="font-[family-name:var(--font-ibm-plex-sans)] text-lg text-muted leading-relaxed mb-6">
              I&apos;m a one-person operation &mdash; and that&apos;s a feature, not a bug. When you work with me, you get me. Not a junior developer, not an account manager, not a chatbot pretending to be helpful. You get the person who builds your solution, explains it in plain language, and picks up the phone when something needs fixing.
            </p>

            <p className="font-[family-name:var(--font-ibm-plex-sans)] text-lg text-muted leading-relaxed mb-8">
              Based in Costa Rica. Working in US timezones. Fluent in English and Spanish. Available evenings and weekends to fit around my full-time role &mdash; which means I bring fresh Fortune 500 skills to your project every single day.
            </p>

            {/* Signature phrase */}
            <p className="font-[family-name:var(--font-space-grotesk)] text-2xl lg:text-3xl font-bold text-heading">
              &ldquo;Fortune 500 precision, startup speed.&rdquo;
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
