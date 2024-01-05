import { sanityFetch } from "@/sanity/lib/sanityFetch";
import type { SanityDocument } from "@sanity/client";
import PostItem from "../../blog/PostItem";
import { postsQuery } from "@/sanity/lib/queries";

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

const Blog = async () => {
  const posts = await sanityFetch<PostInterface[]>({ query: postsQuery });
  const lastThreePosts = posts.slice(-3);
  return (
    <section
      aria-labelledby="section-blog"
      className="bg-texture text-black py-16"
    >
      <div className="flex flex-col space-y-4 w-full sm:w-[1200px] px-4 sm:mx-auto">
        <h2
          id="section-blog"
          className="text-3xl font-bold px-4 sm:px-0 text-center sm:text-left"
        >
          Artículos de interés
        </h2>
        <div className="pt-8 w-full mx-auto gap-8 sm:gap-y-8 sm:gap-0 grid grid-cols-1 sm:grid-cols-3 justify-items-center ">
          {lastThreePosts.map((post) => (
            <PostItem
              key={post._id}
              slug={`/blog/${post.slug.current}`}
              mainImage={post.mainImage}
              title={post.title}
              date={post.publishedAt}
              body={post.body[0].children[0].text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
