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
      <div className="w-full sm:w-[1200px] grid grid-cols-1 sm:grid-cols-3 place-items-center mx-auto">
        <TeamMember colSpan="col-span-1 sm:col-span-3" />
        <TeamMember />
        <TeamMember />
        <TeamMember />
      </div>
    </section>
  );
};

export default Team;
