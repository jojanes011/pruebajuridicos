import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface PostItemProps {
  date?: string;
  title?: string;
  body?: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  slug: string;
}

const builder = imageUrlBuilder(client);

const PostItem: FC<PostItemProps> = ({
  date,
  title,
  body,
  mainImage,
  slug,
}) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("es-CO", options);
  };

  return (
    <Link
      href={slug}
      className="w-80 flex flex-col shadow-xl bg-white text-black relative z-50 transition-transform duration-300 ease-in-out hover:scale-105"
    >
      <div className="relative h-52 w-full">
        <Image
          src={builder.image(mainImage).url()}
          layout="fill"
          alt="Imagen del blog"
          style={{
            objectFit: "cover", // cover, contain, none
          }}
        />
      </div>
      <div className="px-8 py-6 flex flex-col flex-grow space-y-4 justify-between">
        <span className="uppercase text-tertiary">
          {date ? formatDate(date) : "Sin Fecha"}
        </span>
        <h6 className="font-bold leading-5">{title}</h6>
        <p className="line-clamp-4 leading-5">{body}</p>
        <div className="flex flex-row space-x-4 items-center">
          <p className="text-primary font-bold">Leer más</p>
          <Image
            src="/icons/arrow-right.svg"
            alt="Arrow right"
            width={38}
            height={38}
          />
        </div>
      </div>
    </Link>
  );
};

export default PostItem;
