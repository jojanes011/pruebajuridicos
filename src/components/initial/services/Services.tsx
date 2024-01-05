import Image from "next/image";
import React, { FC } from "react";
import ServiceSection from "./ServiceSection";

const arrayServices = [
  {
    title: "Civil",
    icon: "/icons/civil.svg",
    backgroundImage: "/images/derecho-civil.jpg",
    url: "/servicios/derecho-civil"
  },
  {
    title: "Penal",
    icon: "/icons/penal.svg",
    backgroundImage: "/images/derecho-penal.jpg",
    url: "/servicios/derecho-penal"
  },
  {
    title: "de Familia",
    icon: "/icons/users.svg",
    backgroundImage: "/images/derecho-familiar.jpg",
    url: "/servicios/derecho-de-familia"
  },
  {
    title: "Laboral",
    icon: "/icons/contract.svg",
    backgroundImage: "/images/derecho-laboral.jpg",
    url: "/servicios/derecho-laboral"
  },
];

const Services = () => {
  return (
    <section className="flex flex-col sm:flex-row items-center h-full sm:h-96">
      {arrayServices.map((service) => (
        <ServiceSection
          key={service.title}
          icon={service.icon}
          title={service.title}
          backgroundImage={service.backgroundImage}
          url={service.url}
        />
      ))}
    </section>
  );
};

export default Services;
