import Image from "next/image";
import React from "react";

const Boss = () => {
  return (
    <section className="bg-white flex flex-col sm:flex-row items-start sm:items-center mt-20 sm:mt-36 w-full">
      <div className="w-full sm:w-1/3">
        <Image
          src="/images/jairo.png"
          alt="Jairo Abogado"
          width={500}
          height={300}
          className="mx-auto"
        />
      </div>
      <div className="relative text-black w-full sm:w-2/3 flex flex-col space-y-6 justify-center px-4 sm:px-8 pt-4 pb-14 sm:py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/logo-red.png"
            alt="Fondo"
            layout="fill"
            objectFit="contain"
            className="opacity-10"
          />
        </div>
        <div>
          <h4 className="text-xl sm:text-3xl font-medium">
            En nuestra experiencia está tu tranquilidad: comprometidos con la
            protección efectiva de tus intereses legales
          </h4>
        </div>
        <div className="text-sm">
          <p>
            En Jurídicos y Asociados entendemos la importancia de abordar los
            desafíos legales con un equipo experto y experimentado. Como firma,
            nos dedicamos a proporcionar soluciones legales integrales y
            personalizadas, asegurando un acompañamiento cercano y efectivo en
            cada etapa del proceso legal.
          </p>
          <br />
          <p>
            Cada caso es abordado con una estrategia única, adaptada a las
            necesidades específicas de nuestros clientes. Nuestra filosofía se
            centra en la eficiencia y la eficacia, garantizando una
            representación legal de la más alta calidad. Nuestro compromiso se
            refleja en nuestro modelo de honorarios: solo obtenemos recompensa
            económica si alcanzamos los objetivos planteados, asegurando así que
            nuestros intereses estén plenamente alineados con los de nuestros
            clientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Boss;
