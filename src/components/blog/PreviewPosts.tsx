// ./nextjs-app/app/_components/PreviewPosts.tsx

"use client";

import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";
import { postsQuery } from "@/sanity/lib/queries";
import Posts from "./Posts";

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

export default function PreviewPosts({
  posts = [],
}: {
  posts: PostInterface[];
}) {
  const [data] = useLiveQuery(posts, postsQuery);

  return <Posts posts={data} />;
}
