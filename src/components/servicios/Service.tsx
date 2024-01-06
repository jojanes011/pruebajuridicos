"use client";
import { redirectWhatsapp } from "@/src/utils/functions";
import Image from "next/image";
import React from "react";
import { Slide } from "react-awesome-reveal";

const Service = () => {
  const whatsappUrl = redirectWhatsapp();
  return (
    <Slide direction="left">
      <div className="flex flex-col sm:flex-row justify-normal sm:justify-between w-full sm:w-[1200px] mx-auto bg-white rounded-b-[40px] sm:rounded-r-[40px] shadow-xl">
        <div className="flex flex-col space-y-4 sm:space-y-8 py-4 sm:py-8 px-4 sm:px-16 w-full sm:w-1/2 order-2 sm:order-1">
          <div>
            <h3 className="font-merriweather text-xl sm:text-3xl underline text-primary font-bold">
              SUCESIONES
            </h3>
          </div>
          <div className="flex flex-col space-y-4 pb-8 border-b  border-black">
            <ServiceItem />
            <ServiceItem />
            <ServiceItem />
          </div>
          <div className="w-full flex flex-row justify-center sm:pt-0 pt-1 pb-4 sm:pb-0">
            <a
              href={whatsappUrl}
              className="bg-secondary text-white shadow-2xl shadow-secondary py-2 sm:py-3 px-6 sm:px-8 text-sm sm:text-base rounded"
            >
              Contáctanos
            </a>
          </div>
        </div>
        <div className="relative sm:h-auto h-[300px] w-full sm:w-1/2">
          <Image
            src="/images/sucesiones.png"
            alt="Sucesiones Imagen"
            layout="fill"
            style={{
              objectFit: "cover", // cover, contain, none
            }}
          />
        </div>
      </div>
    </Slide>
  );
};

const ServiceItem = () => (
  <div className="flex flex-row items-center space-x-4">
    <div className="rounded-full h-8 sm:h-10 w-8 sm:w-10 bg-primary flex flex-row justify-center items-center">
      <div className="relative h-4 w-4 sm:h-6 sm:w-6">
        <Image
          src="/icons/check.svg"
          alt="Check Icono"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
    <div className="text-black text-sm sm:text-base">
      <h4>Gestión de Testamentos y Herencias</h4>
    </div>
  </div>
);

export default Service;
