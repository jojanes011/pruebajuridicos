import { redirectWhatsapp } from "@/src/utils/functions";
import Image from "next/image";
import React from "react";

const Cases = () => {
  const whatsappLink = redirectWhatsapp();
  return (
    <div className="bg-primary py-14 w-full flex flex-col relative">
      <div className="absolute top-0 left-0 z-10">
        {" "}
        {/* Contenedor de la imagen */}
        <Image
          src="/images/circle2.png"
          alt="Logo"
          width={100}
          height={100}
        />{" "}
        {/* Ajusta el width y height según necesites */}
      </div>
      <div className="w-full sm:w-[1200px] px-4 sm:mx-auto flex flex-col text-center sm:text-left">
        <h2 className="text-xl sm:text-3xl font-bold mb-5">
          ¿Por qué elegirnos?
        </h2>
        <p className="font-light mb-14">
          Experiencia, Compromiso y Resultados que Hablan por Sí Mismos
        </p>
        <div className="flex flex-col sm:flex-row mb-14 self-center w-full">
          <div className="w-full sm:w-[300px] py-8  sm:rounded-s-2xl sm:rounded-ss-2xl sm:rounded-se-none rounded-t-2xl  bg-white bg-opacity-10 mr-0.5 text-center">
            <p className="text-4xl font-bold">10+</p>
            <p className="text-xl font-bold">AÑOS</p>
          </div>
          <div className="w-full sm:w-[300px] py-8 bg-white bg-opacity-10 mr-0.5 text-center">
            <p className="text-4xl font-bold">100+</p>
            <p className="text-xl font-bold">CASOS</p>
          </div>
          <div className="w-full sm:w-[300px] py-8 bg-white bg-opacity-10 mr-0.5 text-center">
            <p className="text-4xl font-bold">200+</p>
            <p className="text-xl font-bold">CLIENTES</p>
          </div>
          <div className="w-full sm:w-[300px] py-8 sm:rounded-b-none sm:rounded-e-2xl rounded-b-2xl bg-white bg-opacity-10 text-center">
            <p className="text-4xl font-bold">$200M</p>
            <p className="text-xl font-bold">RECUPERADOS</p>
          </div>
        </div>
        <div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary px-8 py-4 font-bold w-auto"
          >
            CONSULTA GRATIS
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 right-8 z-20">
        <Image
          src="/images/circle1.png"
          alt="Logo"
          width={200}
          height={100}
        />
      </div>
    </div>
  );
};

export default Cases;
