"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-32 h-32 border border-[#E94560]/20 rounded-full animate-pulse" />
    </div>
  ),
});

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left side — Text */}
          <div className="relative z-10 pt-24 lg:pt-0">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-[#E94560] tracking-wider mb-6"
            >
              Senior Software Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Building software at Fortune&nbsp;500 scale.{" "}
              <span className="text-white/50 italic">Exploring AI frontiers.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-[family-name:var(--font-ibm-plex-sans)] text-lg text-[#666666] leading-relaxed max-w-lg mb-8"
            >
              Full-stack developer specializing in enterprise systems and business
              automation. Currently expanding into AI integration and intelligent
              agents to deliver next-generation solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <button
                onClick={() => handleScrollTo("contact")}
                className="px-6 py-3 bg-[#E94560] text-white font-medium rounded-lg hover:bg-[#E94560]/90 transition-all duration-200 hover:shadow-lg hover:shadow-[#E94560]/25"
              >
                Get in touch &rarr;
              </button>
              <button
                onClick={() => handleScrollTo("services")}
                className="px-6 py-3 border border-white/20 text-white font-medium rounded-lg hover:border-[#E94560]/50 hover:text-[#E94560] transition-all duration-200"
              >
                View services
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-8 text-sm"
            >
              {[
                { value: "5+", label: "Years Experience" },
                { value: "Fortune 500", label: "Enterprise Scale" },
                { value: "Full-Stack", label: "End to End" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="font-[family-name:var(--font-space-grotesk)] text-white font-bold text-lg">
                    {stat.value}
                  </span>
                  <p className="text-[#666666] mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side — 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px]"
          >
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 border border-[#E94560]/20 rounded-full animate-pulse" />
                </div>
              }
            >
              <HeroScene />
            </Suspense>
            {/* Glow effect behind the scene */}
            <div className="absolute inset-0 -z-10 bg-[#E94560]/5 blur-[100px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
