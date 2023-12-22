import ContactForm from "@/src/components/global/contact/ContactForm";
import Experience from "@/src/components/servicios/Experience";
import Service from "@/src/components/servicios/Service";

const ServicePage = ({ params }: { params: { slug: string } }) => {
  return (
    <section className="w-full px-4 flex flex-col items-center space-y-16 py-16 bg-texture">
      <Experience />
      <Service />
      <Service />
      <Service />
      <h4 className="font-bold text-3xl text-center text-black pt-32">
        ¿Consultas? Póngase en contacto con nosotros
      </h4>
      <div className="w-full sm:w-1/2 mx-auto">
        <ContactForm />
      </div>
    </section>
  );
};

export default ServicePage;
