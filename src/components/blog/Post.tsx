"use client";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import random from "lodash/random";

// Interfaz del post desde Sanity
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
  publishedAt?: string; // Modificado para que pueda ser undefined
  categories?: { title: string }[];
  body: any[];
}

// Construye la URL de la imagen desde Sanity
const builder = imageUrlBuilder(client);

export default function Post({
  post,
  posts,
}: {
  post?: PostInterface;
  posts?: PostInterface[];
}) {
  const [selectedPosts, setSelectedPosts] = useState<PostInterface[]>([]);

  // Selecciona dos posts aleatorios para la navegación
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
    <section className="flex flex-col space-y-8 text-black flex-grow w-full sm:w-[900px] sm:mx-auto">
      {/* Encabezado del post con ícono de categoría y fecha */}
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
            {!post?.categories ? "SIN CATEGORÍA" : post?.categories[0].title}
          </h2>
          <p className="text-tertiary">
            {/* Verificamos que publishedAt no sea undefined */}
            {post?.publishedAt
              ? new Date(post.publishedAt).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "Fecha no disponible"}
          </p>
        </div>
      </div>

      {/* Imagen principal del post */}
      {post?.mainImage ? (
        <div className="relative h-80 rounded-2xl">
          <Image
            src={builder.image(post.mainImage).url()}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
            // Damos un alt genérico si no hay otro disponible
            alt="Imagen relacionada con el post"
          />
        </div>
      ) : null}

      {/* Título y contenido del post */}
      <h1 className="text-3xl font-bold">{post?.title}</h1>
      <p className="text-justify leading-8 text-lg">{post?.body[0]?.children[0]?.text || "Contenido no disponible"}</p>

      {/* Navegación entre posts */}
      <div className="flex flex-row justify-between pt-20 w-full">
        {/* Navegación hacia el artículo anterior */}
        {selectedPosts[0] && (
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
        )}
        {/* Navegación hacia el siguiente artículo */}
        {selectedPosts[1] && (
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
        )}
      </div>
    </section>
  );
}
