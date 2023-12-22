import { SanityDocument } from "next-sanity";
import { postsQuery } from "@/sanity/lib/queries";
import { sanityFetch, token } from "@/sanity/lib/sanityFetch";
import Posts from "@/src/components/blog/Posts";
import PreviewProvider from "@/src/components/blog/PreviewProvider";
import PreviewPosts from "@/src/components/blog/PreviewPosts";
import { draftMode } from "next/headers";
import Title from "@/src/components/global/title/Title";
import Footer from "@/src/components/global/footer/Footer";
import Subscribe from "@/src/components/global/subscribe/Subscribe";

interface PostInterface extends SanityDocument {
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      url: string;
    };
  };
  publishedAt: string;
}

const page = async () => {
  const posts = await sanityFetch<PostInterface[]>({ query: postsQuery });
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewPosts posts={posts} />
      </PreviewProvider>
    );
  }

  return (
    <main className="bg-texture">
      <Title
        title="Blog Jurídico"
        subtitle="Perspectivas y Consejos Legales Actualizados"
        showBorder={false}
        backgroundImage="/images/blog.jpg"
      />
      <section className="py-16 w-full sm:w-[1200px] mx-auto">
        <Posts posts={posts} />
      </section>
      <Subscribe />
      <Footer />
    </main>
  );
};

export default page;
