import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Kevin Guifarro`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <main className="min-h-screen">
        <article className="max-w-3xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[#666666] hover:text-white transition-colors mb-12 font-[family-name:var(--font-ibm-plex-sans)]"
          >
            <span>&larr;</span> Back to blog
          </Link>

          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-2.5 py-1 text-xs font-medium font-[family-name:var(--font-jetbrains-mono)] bg-[#E94560]/10 text-[#E94560] rounded-full border border-[#E94560]/20"
                >
                  {tag}
                </span>
              ))}
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#666666]">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl lg:text-5xl font-bold text-white leading-tight">
              {post.title}
            </h1>
          </header>

          <div className="prose-blog">
            <MDXRemote source={post.content} />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
