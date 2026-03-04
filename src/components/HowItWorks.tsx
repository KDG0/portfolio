"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

interface StepProps {
  number: number;
  title: string;
  description: string;
  index: number;
}

function StepCard({ number, title, description, index }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative p-6 lg:p-8 rounded-xl border border-card-border bg-card-bg hover:border-accent/30 transition-all duration-300 hover:bg-card-hover-bg"
    >
      <div className="absolute inset-0 rounded-xl bg-accent/0 group-hover:bg-accent/[0.02] transition-all duration-300" />

      <div className="relative z-10">
        <span className="font-[family-name:var(--font-space-grotesk)] text-5xl font-bold text-accent/20 block mb-4">
          {String(number).padStart(2, "0")}
        </span>

        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-heading mb-3">
          {title}
        </h3>

        <p className="font-[family-name:var(--font-ibm-plex-sans)] text-muted leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

const steps = [
  {
    title: "Discovery Call (Free \u2014 30 minutes)",
    description:
      "We talk about your business, your challenges, and what you need. No tech jargon, no pressure. I listen, ask questions, and figure out how I can help. If we\u2019re a good fit, I put together a plan.",
  },
  {
    title: "Custom Proposal (Within 48 hours)",
    description:
      "You get a clear proposal with exactly what I\u2019ll build, how long it takes, and what it costs. No surprises, no hidden fees. You\u2019ll know the full scope before you commit.",
  },
  {
    title: "Build & Collaborate",
    description:
      "I build your solution and keep you in the loop with regular updates. You\u2019ll see progress as it happens \u2014 not just a final delivery after weeks of silence. Your feedback shapes the final product.",
  },
  {
    title: "Launch & Support",
    description:
      "Your project goes live, and I make sure everything works perfectly. I don\u2019t disappear after launch \u2014 I\u2019m here for questions, tweaks, and ongoing support as your business grows.",
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="How It Works"
          heading="From first call to launch &mdash; here&rsquo;s what working with me looks like."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <StepCard
              key={step.title}
              number={index + 1}
              {...step}
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
