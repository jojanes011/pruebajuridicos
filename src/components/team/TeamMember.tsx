import Image from "next/image";
import React, { FC } from "react";

interface TeamMemberProps {
  colSpan?: string;
}

const TeamMember: FC<TeamMemberProps> = ({ colSpan }) => {
  return (
    <div className={`flex flex-col space-y-3 ${colSpan}`}>
      <Image
        src="/images/jairo.png"
        alt="Miembro Jairo"
        width={250}
        height={100}
        className="border-b border-black"
      />
      <p className="text-sm text-tertiary font-bold">Fundador de la firma</p>
      <p className="text-xl font-bold">Jairo Iván Florez Guerrero</p>
      <ul className="list-inside list-disc text-tertiary">
        <li>Derecho Penal</li>
        <li>Derecho Civil</li>
        <li>Derecho de Familia</li>
        <li>Derecho Laboral</li>
        <li>Derecho Aeronáutico</li>
      </ul>
    </div>
  );
};

export default TeamMember;
