"use client";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <Fade delay={1e3} cascade damping={1e-1}>
      <section
        aria-label="Hero Section"
        className="w-full sm:w-[1200px] mx-auto"
      >
        <div className="flex flex-row justify-between">
          <div>
            <h1 className=" text-2xl sm:text-4xl mb-7 mt-20 mx-4">
              JURÍDICOS Y ASOCIADOS ®
            </h1>
            <p className=" text-2xl sm:text-4xl w-auto sm:w-96 pl-3 sm:pl-6 border-l-4 border-secondary mx-4">
              Soluciones Reales A<br />
              Problemas Reales
            </p>
            <div className="mt-14 mx-4">
              <Link href="/servicios/derecho-penal">
                <button className="text-white rounded py-2 sm:py-3 px-8 bg-secondary">
                  Conoce más
                </button>
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex absolute right-0 top-40 sm:w-[500px] sm:h-[700px] w-[300px] h-[500px]">
            <Image
              alt="Iustita"
              src="/images/iustita.png"
              layout="fill"
              objectFit="cover"
              className="opacity-10 relative"
            />
          </div>
          <div className="flex sm:hidden absolute right-0 top-72 sm:top-0 sm:bottom-0 sm:w-[500px] sm:h-[700px] w-[300px] h-[500px]">
            <Image
              alt="Iustita"
              src="/images/iustita.png"
              layout="fill"
              objectFit="cover"
              className="opacity-10 relative"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between space-y-6 sm:space-y-0 sm:space-x-8 mt-9 sm:mt-48 mx-4">
          <div>
            <p className="font-bold">Derecho Penal</p>
            <p>Defendemos su libertad, su patrimonio y su tranquilidad</p>
          </div>
          <div>
            <p className="font-bold">Derecho de Familia</p>
            <p>Protegemos lo que más importa: su familia y su futuro</p>
          </div>
          <div>
            <p className="font-bold">Derecho Civil</p>
            <p>Salvaguardamos sus derechos, propiedades y acuerdos legales.</p>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Hero;
