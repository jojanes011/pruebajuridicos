import React from "react";
import TeamMember from "./TeamMember";

const Team = () => {
  return (
    <section
      aria-labelledby="section-team"
      className="bg-cover bg-no-repeat text-black py-16 bg-texture"
    >
      <div className="flex flex-col space-y-4 w-full sm:w-[1200px] mx-auto text-center sm:text-left">
        <h2 id="section-team" className="text-3xl font-bold px-4 sm:px-0">
          Nuestro equipo
        </h2>
        <p className="px-4 sm:px-0">
          Profesionales Dedicados a Brindar Soluciones Legales con Integridad y
          Excelencia
        </p>
      </div>
      
      {/* Director General - Jerarquía principal */}
      <div className="w-full sm:w-[1200px] mx-auto py-8 flex justify-center">
        <TeamMember
          title="Jairo Iván Florez Guerrero"
          job="Director General"
          img="/images/equipo/jairo2.jpg"
        />
      </div>
      
      {/* Abogados de la firma - Segunda fila */}
      <div className="w-full sm:w-[1200px] grid grid-cols-1 sm:grid-cols-3 place-items-center mx-auto gap-8 pb-8">
        <TeamMember
          title="Jorge Cediel Teran"
          job="Abogado de la firma"
          img="/images/equipo/jorge.jpg"
        />
        <TeamMember
          title="Laura Isabel Gutiérrez Perez y Soto"
          job="Abogada de la firma"
          img="/images/equipo/laura.jpg"
        />
        <TeamMember
          title="Sara Pinto"
          job="Abogada de la firma"
          img="/images/equipo/sara.jpg"
        />
      </div>
    </section>
  );
};

export default Team;
