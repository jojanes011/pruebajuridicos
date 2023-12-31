import Image from "next/image";
import React, { FC } from "react";

interface ContactItemProps {
  title: string;
  icon: string;
  alt: string;
  color: string;
  margin: string;
  url?: string;
}

const ContactItem: FC<ContactItemProps> = ({
  title,
  icon,
  alt,
  color,
  margin,
  url = "#",
}) => {
  return (
    <a
      href={url}
      target="_blank"
      className={`flex-1 rounded-lg text-white px-4 py-2 ${color} w-52 sm:w-52 flex justify-start items-center`}
    >
      <Image src={icon} alt={alt} width={24} height={24} />
      <div className={`${margin}`}>
        <span>{title}</span>
      </div>
    </a>
  );
};

export default ContactItem;
