import React from "react";

const Experience = () => {
  return (
    <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-8 space-y-8 sm:space-y-0 text-black w-full sm:w-[1200px] mx-auto">
      <div className="flex flex-col space-y-8 w-full sm:w-1/2">
        <p>
          En Jurídicos y Asociados ®, nos destacamos en Derecho Civil,
          enfocándonos en la defensa y representación legal con un enfoque
          personal y detallado. Entendemos la complejidad de los asuntos civiles
          y estamos comprometidos a proteger tus derechos e intereses en cada
          paso del proceso. Desde disputas contractuales hasta asuntos de
          propiedad, nuestra meta es brindarte soluciones claras y efectivas.
        </p>
        <div className="flex flex-row">
          <div className="w-1 h-44 bg-secondary bg-opacity-30 rounded-full" />
          <div className="flex flex-col space-y-4 w-full font-bold pl-4">
            <div className="flex flex-row items-center">
              <div className="w-1 h-14 bg-secondary -ml-5 rounded-full" />
              <div className="py-2 pl-4 ml-4 bg-secondary rounded-lg bg-opacity-30 w-full">
                <span>NUESTRA EXPERIENCIA</span>
              </div>
            </div>
            <div className="py-2 pl-4 bg-secondary rounded-lg bg-opacity-30">
              <span>A QUIÉNES DEFENDEMOS</span>
            </div>
            <div className="py-2 pl-4 bg-secondary rounded-lg bg-opacity-30">
              <span>ASESORÍA PERSONALIZADA</span>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-white shadow-md text-tertiary py-8 px-8 w-full sm:w-1/2 flex flex-row items-center">
        <p>
          Nuestra Experiencia en Derecho Civil: Compromiso, Profundidad y
          Precisión. Con años de trayectoria en el ámbito del Derecho civil,
          nuestro equipo en Jurídicos y Asociados ® ha manejado con éxito una
          amplia gama de casos, desde litigios de propiedad hasta asuntos de
          contratos y sucesiones. Nos enorgullecemos de nuestra habilidad para
          abordar cada caso con un análisis detallado y una estrategia a medida,
          asegurando que los intereses y derechos de nuestros clientes sean
          protegidos con la más alta dedicación y conocimiento especializado.
        </p>
      </div>
    </div>
  );
};

export default Experience;
