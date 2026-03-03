"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border border-white/5 rounded-xl overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 lg:p-6 text-left bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
      >
        <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-medium text-white pr-4">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[#E94560] text-xl flex-shrink-0"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 lg:px-6 pb-5 lg:pb-6 font-[family-name:var(--font-ibm-plex-sans)] text-[#666666] leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const faqs = [
  {
    question: "How much does a project cost?",
    answer:
      "It depends on scope. A simple landing page starts around $500. An AI chatbot trained on your business data typically runs $1,500\u2013$5,000. A full custom web app or SaaS MVP can go up to $10,000+. You\u2019ll get an exact number in your proposal before we start \u2014 no surprises.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most projects launch within 1\u20134 weeks. A landing page can be ready in under a week. An AI chatbot with custom training takes 1\u20132 weeks. Larger projects with multiple features take 3\u20134 weeks. I\u2019ll give you a clear timeline in the proposal.",
  },
  {
    question: "Do I need to know anything about technology?",
    answer:
      "Not at all. I handle everything technical \u2014 building, testing, launching, and maintaining. You just need to tell me about your business and what you need. I\u2019ll translate that into a working solution and explain everything in plain language along the way.",
  },
  {
    question: "What if I need changes after launch?",
    answer:
      "I don\u2019t disappear after delivery. Post-launch tweaks and adjustments are part of the deal. For ongoing changes or new features, we can set up a simple monthly support plan.",
  },
  {
    question: "I already have a website. Can you add AI features to it?",
    answer:
      "Yes. I can integrate AI chatbots, automation tools, and other smart features into your existing site without rebuilding everything from scratch. We\u2019ll figure out what makes sense during the discovery call.",
  },
  {
    question: "Where are you based? What timezone do you work in?",
    answer:
      "I\u2019m based in Costa Rica (Central Standard Time, GMT-6). That\u2019s the same timezone as Chicago and overlaps perfectly with US business hours. I\u2019m fluent in English and Spanish.",
  },
  {
    question: "Why should I hire you instead of an agency?",
    answer:
      "With me, you get the person who actually builds your project \u2014 not a salesperson, not a project manager, not a junior developer. I bring 8+ years of Fortune 500 experience to every project, and because I\u2019m a one-person operation, my rates are significantly lower than agency prices for the same (or better) quality. You\u2019re paying for expertise, not overhead.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader label="Common Questions" heading="Everything you need to know." />

        <div className="max-w-3xl flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              {...faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
