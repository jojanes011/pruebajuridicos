import ContactForm from "@/src/components/global/contact/ContactForm";
import Experience from "@/src/components/servicios/Experience";
import Service from "@/src/components/servicios/Service";

const ServicePage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const renderServices = () => {
    switch (slug) {
      case "derecho-civil":
        return (
          <>
            <Service
              title="Derecho Civil"
              imgSrc="/images/derecho-civil/1.jpg"
              items={[
                "Contratos de promesa de compraventa",
                "Contrato de compraventa",
                "Contrato de arrendamiento de vivienda urbana, rural y comercial",
                "Permuta, Usufructo, Comodato y Servidumbre",
                "Contrato de depósito",
                "Proceso de reposición y cancelación de títulos valores",
              ]}
            />
            <Service
              title="Derecho Civil"
              imgSrc="/images/derecho-civil/2.jpg"
              items={[
                "Desenglobe, Hipoteca y Prenda",
                "Pactos de retroventa",
                "Reglamento de propiedad horizontal",
                "Resolución y resciliación de contrato",
                "Responsabilidad civil contractual y extracontractual",
                "Trámites de insolvencia de persona natural no comerciante",
              ]}
            />
            <Service
              title="Derecho Civil"
              imgSrc="/images/derecho-civil/3.jpg"
              items={[
                "Acciones posesorias",
                "Acciones reivindicatorias",
                "Proceso de declaración de pertenencia por prescripción ordinaria o extraordinaria de dominio",
                "Procesos ejecutivos singulares, hipotecarios, prendarios o mixtos",
                "Cobro de cartera y Asesoría para remates judiciales",
              ]}
            />
          </>
        );
      case "derecho-de-familia":
        return (
          <>
            <Service
              title="Derecho de Familia"
              imgSrc="/images/derecho-familia/1.jpg"
              items={[
                "Divorcios",
                "Liquidación de sociedad conyugal",
                "Reconocimiento de unión marital de hecho",
                "Disolución y liquidación de sociedad patrimonial entre compañeros permanentes",
                "Separación de bienes",
              ]}
            />
            <Service
              title="Derecho de Familia"
              imgSrc="/images/derecho-familia/2.jpg"
              items={[
                "Proceso de custodia y cuidado personal",
                "Proceso de regulación de visitas",
                "Proceso de regulación de alimentos (disminución, aumentos o exoneración de cuota alimentaria)",
                "Proceso de permiso de salida del país y residencia en el exterior de menores de edad",
                "Procesos de sucesión por causa de muerte o en vida",
              ]}
            />
            <Service
              title="Derecho de Familia"
              imgSrc="/images/derecho-familia/3.jpg"
              items={[
                "Afectación y desafectación a vivienda familiar",
                "Constitución y levantamiento de patrimonio de la familia",
                "Inventario solemne de bienes",
                "Trámite de adjudicación, formalización y revisión de apoyo para personas con discapacidad mental",
              ]}
            />
            <Service
              title="Derecho de Familia"
              imgSrc="/images/derecho-familia/4.jpg"
              items={[
                "Proceso de adopción de hijo menor o mayor de edad",
                "Impugnación de paternidad o maternidad",
                "Filiación extramatrimonial",
                "Proceso para declaración de ausencia o muerte por desaparecimiento",
                "Trámites ante bienestar familiar y comisarías de familia",
              ]}
            />
          </>
        );
      case "derecho-penal":
        return (
          <>
            <Service
              title="Derecho Penal"
              imgSrc="/images/derecho-penal/1.jpg"
              items={[
                "Asesoría en procesos penales",
                "Defensa en juicios penales",
                "Procesos por delitos graves y menores",
                "Delitos financieros y de cuello blanco",
                "Acusaciones de fraude",
              ]}
            />
            <Service
              title="Derecho Penal"
              imgSrc="/images/derecho-penal/2.jpg"
              items={[
                "Defensa por delitos relacionados con drogas",
                "Delitos contra la propiedad y el patrimonio",
                "Delitos contra la integridad física",
                "Asesoría en procesos de homicidio",
                "Delitos informáticos y cibernéticos",
              ]}
            />
            <Service
              title="Derecho Penal"
              imgSrc="/images/derecho-penal/3.jpg"
              items={[
                "Apelación de sentencias penales",
                "Defensa en casos de violencia doméstica",
                "Delitos sexuales",
                "Representación de víctimas en procesos penales",
                "Asesoría en procesos de extradición",
              ]}
            />
          </>
        );
      case "derecho-laboral":
        return (
          <>
            <Service
              title="Derecho Laboral"
              imgSrc="/images/derecho-laboral/1.jpg"
              items={[
                "Diagnóstico y evaluación del área laboral de su empresa",
                "Contratación laboral",
                "Procesos disciplinarios internos",
                "Adecuación e implementación de reglamentos internos de trabajo",
                "Representación judicial en procesos ante la jurisdicción laboral ordinaria",
              ]}
            />
            <Service
              title="Derecho Laboral"
              imgSrc="/images/derecho-laboral/2.jpg"
              items={[
                "Liquidación de prestaciones sociales y jornadas laborales",
                "Asesoría para manejo de despidos y retiros voluntarios de trabajadores",
                "Tercerización laboral (outsourcing)",
                "Acoso laboral",
                "Contratación de aprendices",
              ]}
            />
          </>
        );
      default:
        return <p>Servicio no encontrado</p>;
    }
  };

  return (
    <section className="w-full px-4 flex flex-col items-center space-y-16 py-16 bg-texture">
      <Experience />
      {renderServices()}
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
