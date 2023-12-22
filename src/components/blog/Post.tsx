// ./nextjs-app/app/_components/Post.tsx

"use client";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

const builder = imageUrlBuilder(client);

export default function Post({ post }: { post: SanityDocument }) {
  return (
    <section className="flex flex-col space-y-8 text-black">
      <div className="flex flex-row items-center space-x-4">
        <div className="bg-primary flex flex-row items-center justify-center h-10 w-10">
          <Image
            src="/icons/family.svg"
            alt="Familia Icon"
            width={32}
            height={32}
          />
        </div>
        <div>
          <h2 className="font-bold text-xl">DERECHO FAMILIAR</h2>
          <p className="text-tertiary">NOV 29, 2023</p>
        </div>
      </div>
      {post?.mainImage ? (
        <div className="relative w-full h-80">
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
      <div className="flex flex-row justify-between pt-20">
        <div className="flex flex-row space-x-4 items-center">
          <Image
            src="/icons/arrow-right.svg"
            alt="Arrow Icon"
            className="rotate-180"
            width={38}
            height={38}
          />
          <Link href="/blog">
            <span className="text-primary font-bold">ARTÍCULO ANTERIOR</span>
          </Link>
        </div>
        <div className="flex flex-row space-x-4 items-center">
          <Link href="/blog">
            <span className="text-primary font-bold">ARTÍCULO SIGUIENTE</span>
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
