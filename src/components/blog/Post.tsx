// ./nextjs-app/app/_components/Post.tsx

"use client";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import random from "lodash/random";

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
const builder = imageUrlBuilder(client);

export default function Post({
  post,
  posts,
}: {
  post?: any;
  posts?: PostInterface[];
}) {
  const [selectedPosts, setSelectedPosts] = useState<PostInterface[]>([]);
  useEffect(() => {
    if (posts && posts.length >= 2) {
      const randomIndexes = new Set<number>();
      while (randomIndexes.size < 2) {
        randomIndexes.add(random(0, posts.length - 1));
      }
      setSelectedPosts(Array.from(randomIndexes).map((index) => posts[index]));
    }
  }, [posts]);

  return (
    <section className="flex flex-col space-y-8 text-black flex-grow">
      <div className="flex flex-row items-center space-x-4">
        <div className="bg-primary flex flex-row items-center justify-center h-10 w-10">
          <Image
            src="/icons/law.svg"
            alt="Familia Icon"
            width={32}
            height={32}
          />
        </div>
        <div>
          <h2 className="font-bold text-xl uppercase">
            {!post.categories ? "SIN CATEGORÍA" : post.categories[0].title}
          </h2>
          <p className="text-tertiary">NOV 29, 2023</p>
        </div>
      </div>
      {post?.mainImage ? (
        <div className="relative w-full sm:w-[800px] h-80">
          <Image
            src={builder.image(post.mainImage).url()}
            layout="fill"
            style={{
              objectFit: "cover", // cover, contain, none
            }}
            alt={post?.mainImage?.alt}
          />
        </div>
      ) : null}
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p>{post.body[0].children[0].text}</p>
      <div className="flex flex-row justify-between pt-20 w-full">
        <div className="flex flex-row space-x-2 sm:space-x-4 items-center flex-1">
          <Image
            src="/icons/arrow-right.svg"
            alt="Arrow Icon"
            className="rotate-180"
            width={38}
            height={38}
          />
          <Link
            href={`/blog/${selectedPosts[0]?.slug.current}`}
            className="w-min"
          >
            <span className="text-primary font-bold text-sm sm:text-base">
              ARTÍCULO ANTERIOR
            </span>
          </Link>
        </div>
        <div className="flex flex-row justify-end space-x-2 sm:space-x-4 items-center flex-1">
          <Link
            href={`/blog/${selectedPosts[1]?.slug.current}`}
            className="w-min"
          >
            <span className="text-primary font-bold text-sm sm:text-base">
              ARTÍCULO SIGUIENTE
            </span>
          </Link>
          <Image
            src="/icons/arrow-right.svg"
            alt="Arrow Icon"
            width={38}
            height={38}
          />
        </div>
      </div>
    </section>
  );
}
