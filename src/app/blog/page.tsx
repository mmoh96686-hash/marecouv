import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Marecouv",
  description:
    "Analyses et conseils pratiques sur le recouvrement de créances, les délais de paiement et la relation avec vos débiteurs au Maroc.",
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Blog"
          title="Notes sur le recouvrement et la relation client"
          lead="Peu d'articles, mais utiles : ce que nous observons sur le terrain, traduit en conseils applicables."
        />
        <Container className="py-16">
          <div className="border-t border-stone-line max-w-3xl">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block border-b border-stone-line py-8 group"
              >
                <p className="text-xs text-ink-muted mb-2">
                  {post.category} · {formatDate(post.date)} · {post.readingTime}
                </p>
                <h2 className="font-display text-xl text-navy mb-2 group-hover:underline">
                  {post.title}
                </h2>
                <p className="text-sm text-ink-secondary leading-relaxed max-w-xl">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
