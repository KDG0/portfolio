import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.guifarro.dev/#website",
      url: "https://www.guifarro.dev",
      name: "Guifarro Dev",
      description:
        "Custom AI chatbots, workflow automation, and modern websites for small businesses.",
      publisher: { "@id": "https://www.guifarro.dev/#person" },
      inLanguage: "en-US",
    },
    {
      "@type": "Person",
      "@id": "https://www.guifarro.dev/#person",
      name: "Kevin Guifarro",
      jobTitle: "AI Developer",
      url: "https://www.guifarro.dev",
      image: "https://www.guifarro.dev/images/projects/me.jpeg",
      description:
        "AI developer with 8+ years of Fortune 500 experience, specializing in chatbots and automation for small businesses.",
      knowsLanguage: ["en", "es"],
      sameAs: [
        "https://github.com/KDG0",
        "https://instagram.com/guifarro.dev",
        "https://x.com/guifarrodev",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.guifarro.dev/#business",
      name: "Guifarro Dev",
      url: "https://www.guifarro.dev",
      description:
        "Custom AI chatbots, workflow automation, and modern websites for small businesses.",
      founder: { "@id": "https://www.guifarro.dev/#person" },
      areaServed: ["US", "CR"],
      serviceType: [
        "AI Chatbot Development",
        "Workflow Automation",
        "Web Development",
        "Power Platform Solutions",
      ],
      knowsLanguage: ["en", "es"],
      email: "kevin@guifarro.dev",
      priceRange: "$500 - $10,000+",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "1",
        bestRating: "5",
      },
      review: {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Valentina R.",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Exceptional work — delivered fast, explained clearly, and it just works. Kevin built our AI chatbot from scratch and had it live within days. He took the time to understand our business, trained the bot on our actual content, and the results were immediate — customers stopped messaging us asking basic questions because the bot handles it all. Communication was smooth, timelines were respected, and the quality was exactly what we needed. Highly recommend for any business looking to save time and look more professional online.",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does a project cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on scope. A simple landing page starts around $500. An AI chatbot trained on your business data typically runs $1,500\u2013$5,000. A full custom web app or SaaS MVP can go up to $10,000+. You\u2019ll get an exact number in your proposal before we start \u2014 no surprises.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a project take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most projects launch within 1\u20134 weeks. A landing page can be ready in under a week. An AI chatbot with custom training takes 1\u20132 weeks. Larger projects with multiple features take 3\u20134 weeks. I\u2019ll give you a clear timeline in the proposal.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to know anything about technology?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not at all. I handle everything technical \u2014 building, testing, launching, and maintaining. You just need to tell me about your business and what you need. I\u2019ll translate that into a working solution and explain everything in plain language along the way.",
          },
        },
        {
          "@type": "Question",
          name: "What if I need changes after launch?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I don\u2019t disappear after delivery. Post-launch tweaks and adjustments are part of the deal. For ongoing changes or new features, we can set up a simple monthly support plan.",
          },
        },
        {
          "@type": "Question",
          name: "I already have a website. Can you add AI features to it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. I can integrate AI chatbots, automation tools, and other smart features into your existing site without rebuilding everything from scratch. We\u2019ll figure out what makes sense during the discovery call.",
          },
        },
        {
          "@type": "Question",
          name: "Where are you based? What timezone do you work in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I\u2019m based in Costa Rica (Central Standard Time, GMT-6). That\u2019s the same timezone as Chicago and overlaps perfectly with US business hours. I\u2019m fluent in English and Spanish.",
          },
        },
        {
          "@type": "Question",
          name: "Why should I hire you instead of an agency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "With me, you get the person who actually builds your project \u2014 not a salesperson, not a project manager, not a junior developer. I bring 8+ years of Fortune 500 experience to every project, and because I\u2019m a one-person operation, my rates are significantly lower than agency prices for the same (or better) quality. You\u2019re paying for expertise, not overhead.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Projects />
        <About />
        <Testimonials />
        <Blog />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
