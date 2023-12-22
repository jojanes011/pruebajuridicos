import Image from "next/image";
import React from "react";

const FooterContact = () => {
  return (
    <section
      aria-labelledby="footer-contact"
      className="flex flex-col space-y-4 w-full sm:w-1/4"
    >
      <h2 id="footer-contact" className="font-bold text-lg">CONTACTO</h2>
      <div className="flex flex-row items-center space-x-4">
        <Image
          src="/icons/phone.svg"
          alt="Icono Phone"
          width={24}
          height={24}
        />
        <p>315-214-26-33</p>
      </div>
      <div className="flex flex-row items-center space-x-4">
        <Image src="/icons/mail.svg" alt="Icono Mail" width={24} height={24} />
        <p>asistente@juridicosyasociados.com</p>
      </div>
      <div className="flex flex-row items-center space-x-4">
        <Image src="/icons/map.svg" alt="Icono Map" width={24} height={24} />
        <p>
          Carrera 4 # 8 - 63 edificio José Henao Vélez oficina 704 Cali,
          Colombia.
        </p>
      </div>
    </section>
  );
};

export default FooterContact;
