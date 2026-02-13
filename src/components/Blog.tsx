import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import BlogCard from "./BlogCard";
import { getBlogPosts } from "@/lib/blog";

export default function Blog() {
  const posts = getBlogPosts();

  return (
    <SectionWrapper id="blog">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader label="Blog" heading="Thoughts & learnings." />

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
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
      </div>
    </SectionWrapper>
  );
}
