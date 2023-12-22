import Image from "next/image";
import React from "react";
import Companies from "./Companies";

const Testimonies = () => {
  return (
    <section
      aria-labelledby="section-testimonies"
      className="bg-cover bg-no-repeat text-black py-16 bg-texture"
    >
      <div className="flex flex-col space-y-4 w-full sm:w-[1200px] mx-auto">
        <h2
          id="section-testimonies"
          className="text-3xl font-bold px-4 sm:px-0 text-center sm:text-left"
        >
          Testimonios
        </h2>
        <p className="font-light px-4 sm:px-0 text-center sm:text-left">
          No confíe simplemente en nuestra palabra. ¡Escuche lo que nuestros
          clientes tienen que decir!
        </p>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between">
          <div className="flex flex-col space-y-4 pt-14 w-full sm:w-[450px]">
            <p className="text-sm sm:text-base pl-3 sm:pl-6 border-l-4 border-black">
              Contacté a Jurídicos y Asociados en un momento difícil y su ayuda
              fue increíble. Me explicaron todo claramente y me apoyaron en cada
              paso. Estoy muy agradecido por el resultado positivo y recomiendo
              mucho sus servicios.
            </p>
            <div className="flex flex-row space-x-4">
              <Image
                src="/icons/avatar.svg"
                alt="Avatar testimonio"
                width={64}
                height={64}
              />
              <div>
                <p className="font-bold">Joan Oviedo</p>
                <p className="text-xs text-tertiary">Caso por divorcio</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-4 pt-14 w-full sm:w-[450px]">
            <p className="text-sm sm:text-base pl-3 sm:pl-6 border-l-4 border-black">
              Contacté a Jurídicos y Asociados en un momento difícil y su ayuda
              fue increíble. Me explicaron todo claramente y me apoyaron en cada
              paso. Estoy muy agradecido por el resultado positivo y recomiendo
              mucho sus servicios.
            </p>
            <div className="flex flex-row space-x-4">
              <Image
                src="/icons/avatar.svg"
                alt="Avatar testimonio"
                width={64}
                height={64}
              />
              <div>
                <p className="font-bold">Joan Oviedo</p>
                <p className="text-xs text-tertiary">Caso por divorcio</p>
              </div>
            </div>
          </div>
        </div>
        <Companies />
      </div>
    </section>
  );
};

export default Testimonies;
