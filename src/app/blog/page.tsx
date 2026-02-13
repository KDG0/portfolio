import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | Kevin Guifarro",
  description:
    "Thoughts on software development, AI, and building things that matter.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <>
      <main className="min-h-screen">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#666666] hover:text-white transition-colors mb-12 font-[family-name:var(--font-ibm-plex-sans)]"
          >
            <span>&larr;</span> Back to home
          </Link>

          <div className="mb-12 lg:mb-16">
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-[#E94560] tracking-wider uppercase">
              Blog
            </span>
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl lg:text-5xl font-bold text-white mt-3">
              Thoughts & learnings.
            </h1>
          </div>

          <div className="grid gap-6">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                description={post.description}
                date={new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
                slug={post.slug}
              />
            ))}
          </div>

          {posts.length === 0 && (
            <p className="text-[#666666] font-[family-name:var(--font-ibm-plex-sans)]">
              No posts yet. Check back soon.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
