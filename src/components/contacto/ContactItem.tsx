import Image from "next/image";
import React, { FC } from "react";

interface ContactItemProps {
  title: string;
  icon: string;
  alt: string;
  color: string;
}

const ContactItem: FC<ContactItemProps> = ({ title, icon, alt, color }) => {
  return (
    <div className={`relative flex-1 rounded-lg text-white px-4 py-2 ${color} w-52 sm:w-52 flex justify-center items-center`}>
      <div className="absolute left-4">
        <Image src={icon} alt={alt} width={24} height={24} />
      </div>
      <span>{title}</span>
    </div>
  );
};

export default ContactItem;
