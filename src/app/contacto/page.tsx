import ContactItem from "@/src/components/contacto/ContactItem";
import ContactForm from "@/src/components/global/contact/ContactForm";
import React from "react";

const page = () => {
  return (
    <section className="py-16 w-full sm:w-[1200px] px-4 sm:px-0 mx-auto flex flex-col space-y-16">
      <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-16 justify-center space-y-16 sm:space-y-0">
        <div className="flex-1 flex flex-col space-y-8">
          <div className="flex flex-col items-center sm:flex-row space-y-4 sm:space-y-0 space-x-0 sm:space-x-4">
            <ContactItem
              alt="Dirección de la empresa"
              icon="/icons/map.svg"
              color="bg-primary"
              title="Carrera 4 # 8 - 63 edificio José Henao Vélez oficina 704 Cali, Colombia."
            />
            <div className="flex flex-col space-y-4 flex-1">
              <ContactItem
                alt="Teléfono de la empresa"
                icon="/icons/phone.svg"
                color="bg-primary"
                title="315-214-26-33"
              />
              <ContactItem
                alt="Teléfono de la empresa"
                icon="/icons/phone.svg"
                color="bg-primary"
                title="304-299-9249"
              />
            </div>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <h5 className="text-primary text-2xl font-bold">Síguenos</h5>
            <ContactItem
              alt="Whatsapp de la empresa"
              icon="/icons/phone.svg"
              color="bg-[#25D366]"
              title="Whatsapp"
            />
            <ContactItem
              alt="Instagram de la empresa"
              icon="/icons/instagram.svg"
              color="bg-[#E1306C]"
              title="Instagram"
            />
            <ContactItem
              alt="Tiktok de la empresa"
              icon="/icons/tiktok.svg"
              color="bg-black"
              title="Tiktok"
            />
            <ContactItem
              alt="Facebook de la empresa"
              icon="/icons/facebook.svg"
              color="bg-[#3B5998]"
              title="Facebook"
            />
            <ContactItem
              alt="Linkedin de la empresa"
              icon="/icons/linkedin.svg"
              color="bg-[#0E76A8]"
              title="LinkedIn"
            />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl text-primary font-bold text-center pb-8">
            Información de contacto
          </h3>
          <iframe
            width="540"
            height="305"
            src="https://87f13af8.sibforms.com/serve/MUIFAF6I5x8GAkxMhwFgia7AHEPdQAXJ6D-zskdNPW1mLe7Ds7TlWfmQ8ih95YQZXGO_03ORPrNWNIGdK2Hc8FW__xeH8fL-6p05_qKLrHKdLic7T8id8jv11sJrazSSHEr7RBOoK0jFDGE6A8sygkMJlCyZlGUGpF26SBmDsVSkW7sI7vMgGX-A4QnSWX_I-pY0ueyQHOKSiPbq"
            frameBorder="0"
            allowFullScreen
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "100%",
            }}
          ></iframe>
        </div>
      </div>
      <div className="relative w-full h-96 sm:w-[1200px] sm:h-[500px] mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d248.91140234643692!2d-76.53485870212025!3d3.451218770997836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sco!4v1702994909955!5m2!1sen!2sco"
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
