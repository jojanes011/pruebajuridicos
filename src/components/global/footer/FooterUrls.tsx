import React from "react";

const FooterUrls = () => {
  return (
    <section
      aria-labelledby="footer-links"
      className="flex flex-col space-y-4 w-full sm:w-1/4"
    >
      <h2 id="footer-links" className="font-bold text-lg">
        ENLACES RÁPIDOS
      </h2>
      <ul className="flex flex-col space-y-4">
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/servicios/derecho-penal">Especialidades</a>
        </li>
        <li>
          <a href="/nosotros">Nosotros</a>
        </li>
        <li>
          <a href="/blog">Artículos</a>
        </li>
        <li>
          <a href="/contacto">Contáctanos</a>
        </li>
      </ul>
    </section>
  );
};

export default FooterUrls;
