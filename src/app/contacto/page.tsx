import ContactItem from "@/src/components/contacto/ContactItem";
import ContactForm from "@/src/components/global/contact/ContactForm";
import { redirectWhatsapp } from "@/src/utils/functions";
import React from "react";

const page = () => {
  const whatsappUrl = redirectWhatsapp();
  const instagramUrl = "https://www.instagram.com/juridicosyasociados/";
  const tiktokUrl = "https://www.tiktok.com/@juridicosasociados";
  const facebookUrl = "https://www.facebook.com/juridicos.y.asociados.co";

  return (
    <section className="py-16 w-full sm:w-[1200px] px-4 sm:px-0 mx-auto flex flex-col space-y-16">
      <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-16 justify-center space-y-16 sm:space-y-0">
        <div className="flex-1 flex flex-col space-y-8">
          <div className="flex flex-col items-center sm:flex-row space-y-4 sm:space-y-0 space-x-0 sm:space-x-4">
            <ContactItem
              alt="Dirección de la empresa"
              icon="/icons/map.svg"
              color="bg-primary"
              title="Calle 10 # 4-40, oficina 801, Edificio Bolsa de occidente. Cali, Colombia."
              margin="ml-2"
              url="https://maps.app.goo.gl/eTaZyhY2HgunzXAHA"
            />
            <div className="flex flex-col space-y-4 flex-1">
              <ContactItem
                alt="Teléfono de la empresa"
                icon="/icons/phone.svg"
                color="bg-primary"
                margin="ml-4"
                title="315-214-26-33"
              />
              <ContactItem
                alt="Teléfono de la empresa"
                icon="/icons/phone.svg"
                color="bg-primary"
                margin="ml-4"
                title="304-299-9249"
              />
            </div>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <h5 className="text-primary text-2xl font-bold">Síguenos</h5>
            <ContactItem
              alt="Whatsapp de la empresa"
              icon="/icons/whatsapp.svg"
              color="bg-[#25D366]"
              title="Whatsapp"
              margin="ml-8"
              url={whatsappUrl}
            />
            <ContactItem
              alt="Instagram de la empresa"
              icon="/icons/instagram.svg"
              color="bg-[#E1306C]"
              title="Instagram"
              margin="ml-8"
              url={instagramUrl}
            />
            <ContactItem
              alt="Tiktok de la empresa"
              icon="/icons/tiktok.svg"
              color="bg-black"
              title="Tiktok"
              margin="ml-8"
              url={tiktokUrl}
            />
            <ContactItem
              alt="Facebook de la empresa"
              icon="/icons/facebook.svg"
              color="bg-[#3B5998]"
              title="Facebook"
              margin="ml-8"
              url={facebookUrl}
            />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl text-primary font-bold text-center pb-8">
            Información de contacto
          </h3>
          <ContactForm />
        </div>
      </div>
      <div className="relative w-full h-96 sm:w-[1200px] sm:h-[500px] mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995.6459047317692!2d-76.53433813041397!3d3.4509369384559405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6645285bd3b%3A0x2704af9e4bfcf03!2sEdificio%20Bolsa%20De%20Occidente!5e0!3m2!1sen!2sco!4v1729175867006!5m2!1sen!2sco"
          className="absolute top-0 left-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default page;
