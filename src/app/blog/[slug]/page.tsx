import { SanityDocument } from "@sanity/client";
import { postPathsQuery, postQuery, postsQuery } from "@/sanity/lib/queries";
import { sanityFetch, token } from "@/sanity/lib/sanityFetch";
import { client } from "@/sanity/lib/client";
import Post from "@/src/components/blog/Post";
import PreviewProvider from "@/src/components/blog/PreviewProvider";
import PreviewPost from "@/src/components/blog/PreviewPost";
import { draftMode } from "next/headers";
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
  body: any[]; // Aseguramos que body sea siempre un array para evitar errores de tipo
}

// Genera rutas estáticas a partir de los slugs de los posts
export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);
  return posts;
}

export default async function Page({ params }: { params: any }) {
  const post = await sanityFetch<PostInterface>({ query: postQuery, params });
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
    <main className="mx-auto w-full px-4 sm:w-[1200px] sm:pb-32 text-black">
      <section className="py-16 flex flex-col space-y-24 justify-between">
        {/* Se muestra el post principal */}
        <Post posts={posts} post={post} />
        <hr className="bg-primary" />
        {/* Sección de otros artículos */}
        <div className="w-full flex flex-col items-center space-y-12 mx-auto">
          <h4 className="font-bold text-3xl w-80 text-center">
            OTROS ARTÍCULOS
          </h4>
          <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-16 space-y-8 sm:space-y-0 justify-between">
            {lastThreePosts.map((post) => (
              <PostItem
                key={post._id}
                slug={`/blog/${post.slug.current}`}
                mainImage={post.mainImage}
                title={post.title}
                date={new Date(post.publishedAt).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                body={
                  post.body?.[0]?.children?.[0]?.text ||
                  "Sin contenido disponible"
                }
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
