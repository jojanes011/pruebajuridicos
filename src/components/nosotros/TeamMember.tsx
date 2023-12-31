import Image from "next/image";
import React, { FC } from "react";

interface TeamMemberProps {
  className?: string;
}

const TeamMember: FC<TeamMemberProps> = ({ className }) => {
  return (
    <div
      className={`flex flex-col items-center space-y-8 sm:flex-row p-4 sm:p-11 text-black border-b border-[#C8C2CD] ${className}`}
    >
      <div className="h-full">
        <Image
          src="/images/jairo-complete.png"
          alt="Jairo Foto de Perfil"
          width={189}
          height={253}
        />
      </div>
      <div className="flex flex-col ml-0 sm:ml-10 w-80">
        <h2 className="text-xl font-bold text-center sm:text-left">Jairo Iván Florez Guerrero</h2>
        <p className="font-light text-tertiary text-center sm:text-left">
          Abogado Socio Fundador y Director General
        </p>
        <p className="text-justify sm:text-left">
          Abogado, especializado en derecho penal, delitos sexuales, extorsión,
          desplazamiento forzado, homicidio, porte de armas, concierto para
          delinquir, con especialidad en solicitudes de sustitución de medida
          por detención domiciliaria.
        </p>
      </div>
    </div>
  );
};

export default TeamMember;
