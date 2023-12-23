// ./nextjs-app/app/[slug]/page.tsx

import { SanityDocument } from "@sanity/client";
import { postPathsQuery, postQuery, postsQuery } from "@/sanity/lib/queries";
import { sanityFetch, token } from "@/sanity/lib/sanityFetch";
import { client } from "@/sanity/lib/client";
import Post from "@/src/components/blog/Post";
import PreviewProvider from "@/src/components/blog/PreviewProvider";
import PreviewPost from "@/src/components/blog/PreviewPost";
import { draftMode } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import PostItem from "@/src/components/blog/PostItem";

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

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  // Important, use the plain Sanity Client here
  const posts = await client.fetch(postPathsQuery);

  return posts;
}

export default async function Page({ params }: { params: any }) {
  const post = await sanityFetch<SanityDocument>({ query: postQuery, params });
  const posts = await sanityFetch<PostInterface[]>({ query: postsQuery });
  const isDraftMode = draftMode().isEnabled;
  const lastThreePosts = posts.slice(-3);

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewPost post={post} />
      </PreviewProvider>
    );
  }
  return (
    <main className="mx-auto w-full px-4 sm:w-[1200px] sm:py-32 text-black">
      <section className="py-16 flex flex-col sm:flex-row space-y-16 sm:space-y-0 sm:space-x-8 justify-between">
        <Post posts={posts} post={post} />
        <div className="sm:border-l sm:border-l-primary sm:pl-6 w-full flex flex-col items-center space-y-12 mx-auto">
          <h4 className="font-bold text-3xl w-80 text-center">
            OTROS ARTÍCULOS
          </h4>
          {lastThreePosts.map((post) => (
            <PostItem
              key={post._id}
              slug={`/blog/${post.slug.current}`}
              mainImage={post.mainImage}
              title={post.title}
              date={post.publishedAt}
              body={posts[0].body[0].children[0].text}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
