"use client";

import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import BlogCard from "./BlogCard";

const blogPosts = [
  {
    title: "I built my portfolio using Claude Code — here's what I learned",
    description:
      "A developer's honest take on building a production site with AI-assisted coding. The good, the surprising, and what I'd do differently.",
    date: "2025",
    badge: "Upcoming",
  },
];

export default function Blog() {
  return (
    <SectionWrapper id="blog">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader label="Blog" heading="Thoughts & learnings." />

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
          {blogPosts.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
