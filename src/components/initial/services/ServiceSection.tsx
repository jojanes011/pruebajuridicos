import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

// Definir una interfaz para las propiedades del componente
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
    className="relative w-full sm:w-1/4 h-full flex flex-col justify-center space-y-0 sm:space-y-2 px-4 py-8 sm:py-0"
  >
    {/* Imagen de fondo */}
    <Image
      src={backgroundImage}
      alt="Imagen de fondo"
      layout="fill"
      style={{
        objectFit: "cover", // cover, contain, none
      }}
      className="absolute z-0 opacity-40" // La imagen de fondo con opacidad
    />

    {/* Contenido del componente */}
    <div className="relative z-10 flex flex-col space-y-2">
      <Image src={icon} alt={`Icono ${title}`} height={36} width={36} />
      <h2 className="text-2xl sm:text-3xl font-merriweather font-light">
        Derecho
        <br />
        {title}
      </h2>
    </div>
  </Link>
);

export default ServiceSection;
