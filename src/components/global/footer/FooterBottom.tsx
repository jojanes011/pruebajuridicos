import { redirectWhatsapp } from "@/src/utils/functions";
import Image from "next/image";
import React from "react";

const FooterBottom = () => {
  const whatsappLink = redirectWhatsapp();
  return (
    <div className="w-full border-t border-white">
      <div className="flex flex-col items-center sm:flex-row justify-between px-4 sm:px-9 pb-4 sm:pb-0">
        <div className="py-5 text-center sm:text-left">
          <span className="text-lg font-bold">
            © 2024 Jurídicos y Asociados. Todos Los Derechos Reservados.
          </span>
        </div>
        <div className="flex flex-row space-x-8">
          <a
            target="_blank"
            href="https://www.facebook.com/juridicos.y.asociados.co"
          >
            <Image
              src="/icons/facebook.svg"
              alt="Icono Facebook"
              width={32}
              height={32}
            />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/juridicosyasociados/"
          >
            <Image
              src="/icons/instagram.svg"
              alt="Icono Instagram"
              width={32}
              height={32}
            />
          </a>
          <a target="_blank" href={whatsappLink}>
            <Image
              src="/icons/whatsapp.svg"
              alt="Icono Whatsapp"
              width={32}
              height={32}
            />
          </a>
          <a target="_blank" href="https://www.tiktok.com/@juridicosasociados">
            <Image
              src="/icons/tiktok.svg"
              alt="Icono Tiktok"
              width={32}
              height={32}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
