import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Marecouv`,
    description: post.excerpt,
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main>
        <Container className="py-16">
          <article className="max-w-2xl mx-auto">
            <p className="text-xs text-ink-muted mb-3">
              {post.category} · {formatDate(post.date)} · {post.readingTime}
            </p>
            <h1 className="font-display font-medium text-[28px] lg:text-[34px] leading-[1.25] text-navy mb-8">
              {post.title}
            </h1>
            <div className="prose-blog text-[15px] leading-[1.75] text-ink-secondary">
              <MDXRemote source={post.content} />
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
