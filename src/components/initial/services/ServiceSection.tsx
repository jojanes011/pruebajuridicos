import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ServiceSectionProps {
  icon: string;
  title: string;
  backgroundImage: string;
  url: string;
}

const ServiceSection: FC<ServiceSectionProps> = ({
  icon,
  title,
  backgroundImage,
  url,
}) => (
  <Link
    href={url}
    className="relative w-full sm:w-1/4 h-full flex flex-col justify-center space-y-0 sm:space-y-2 px-4 py-8 sm:py-0 overflow-hidden group"
  >
    {/* Imagen de fondo con efecto de zoom en hover */}
    <Image
      src={backgroundImage}
      alt="Imagen de fondo"
      layout="fill"
      style={{
        objectFit: "cover",
      }}
      className="absolute z-0 transition-transform duration-500 transform group-hover:scale-125 opacity-40"
    />

    {/* Contenido del componente */}
    <div className="relative z-10 flex flex-col space-y-2">
      <Image src={icon} alt={`Icono ${title}`} height={36} width={36} />
      <h2 className="text-2xl sm:text-3xl font-light">
        Derecho
        <br />
        {title}
      </h2>
    </div>

    {/* Botón "Ver más" que se muestra en hover */}
    <div className="absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 pb-8">
      <button className="px-6 py-2 bg-secondary text-white font-semibold rounded-md shadow-lg">
        Ver más
      </button>
    </div>
  </Link>
);

export default ServiceSection;
