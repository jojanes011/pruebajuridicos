import Image from "next/image";
import React, { FC } from "react";

interface TeamMemberProps {
  colSpan?: string;
  img: string;
  title: string;
  job: string;
}

const TeamMember: FC<TeamMemberProps> = ({ colSpan, img, title, job }) => {
  return (
    <div className={`flex flex-col space-y-2 ${colSpan}`}>
      <Image
        src={img}
        alt={title}
        width={250}
        height={100}
        className="border-b border-black rounded-t-lg"
      />
      <p className="text-sm text-tertiary font-bold">{job}</p>
      <p className="text-base sm:text-lg font-bold">{title}</p>
    </div>
  );
};

export default TeamMember;
