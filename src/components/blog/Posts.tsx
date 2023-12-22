import type { SanityDocument } from "@sanity/client";
import PostItem from "./PostItem";
import Subscribe from "../global/subscribe/Subscribe";

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
    <main className="relative w-full mx-auto grid grid-cols-3 justify-items-center transform -translate-y-24 z-50">
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
    </main>
  );
}
