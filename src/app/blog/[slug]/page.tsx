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
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        author: {
          "@type": "Person",
          "@id": "https://www.guifarro.dev/#person",
          name: "Kevin Guifarro",
          url: "https://www.guifarro.dev",
        },
        publisher: {
          "@type": "Person",
          "@id": "https://www.guifarro.dev/#person",
          name: "Kevin Guifarro",
          url: "https://www.guifarro.dev",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://www.guifarro.dev/blog/${slug}`,
        },
        isPartOf: {
          "@id": "https://www.guifarro.dev/#website",
        },
        keywords: post.tags.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.guifarro.dev",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://www.guifarro.dev/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `https://www.guifarro.dev/blog/${slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <main className="min-h-screen">
        <article className="max-w-3xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground-strong transition-colors mb-12 font-[family-name:var(--font-ibm-plex-sans)]"
          >
            <span>&larr;</span> Back to blog
          </Link>

          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-2.5 py-1 text-xs font-medium font-[family-name:var(--font-jetbrains-mono)] bg-accent/10 text-accent rounded-full border border-accent/20"
                >
                  {tag}
                </span>
              ))}
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-muted">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl lg:text-5xl font-bold text-heading leading-tight">
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
