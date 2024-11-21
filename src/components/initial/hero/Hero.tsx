"use client";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      aria-label="Hero Section"
      className="relative w-full flex flex-col pb-8 sm:pb-24" // Asegura que el hero ocupe toda la pantalla
    >
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-40"
      >
        <source src="/video.webm" type="video/webm" />
        <source src="/video.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Contenido principal */}
      <div className="flex flex-col justify-center items-start w-full sm:w-[1200px] mx-auto px-4 relative z-10 pt-32 sm:pt-48">
        <div>
          <h1 className="text-2xl sm:text-4xl mb-7">JURÍDICOS Y ASOCIADOS ®</h1>
          <p className="text-2xl sm:text-4xl w-auto sm:w-96 pl-3 sm:pl-6 border-l-4 border-secondary">
            Soluciones Reales A<br />
            Problemas Reales
          </p>
          <div className="mt-14">
            <Link href="/servicios/derecho-penal">
              <button className="text-white rounded py-2 sm:py-3 px-8 bg-secondary">
                Conoce más
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-[1200px] mx-auto flex flex-col sm:flex-row justify-between space-y-6 sm:space-y-0 sm:space-x-8 mt-16 sm:mt-32 px-4 relative z-10">
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
  );
};

export default Hero;
