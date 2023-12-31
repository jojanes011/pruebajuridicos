"use client"
import type { SanityDocument } from "@sanity/client";
import PostItem from "./PostItem";
import { Fade } from "react-awesome-reveal";

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

export default function Posts({ posts = [] }: { posts: PostInterface[] }) {
  return (
    <main className="relative w-full mx-auto gap-8 sm:gap-y-8 sm:gap-0 grid grid-cols-1 sm:grid-cols-3 justify-items-center sm:transform sm:-translate-y-24 z-50">
      <Fade delay={1e3} cascade damping={1e-1}>
        {posts.map((post) => (
          <PostItem
            key={post._id}
            slug={`/blog/${post.slug.current}`}
            mainImage={post.mainImage}
            title={post.title}
            date={post.publishedAt}
            body={post.body[0].children[0].text}
          />
        ))}
      </Fade>
    </main>
  );
}
