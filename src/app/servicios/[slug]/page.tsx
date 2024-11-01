"use client"
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

  const renderExperienceContent = () => {
    switch (slug) {
      case "derecho-civil":
        return [
          {
            title: "NUESTRA EXPERIENCIA",
            text: "Nuestra Experiencia en Derecho Civil: Compromiso, Profundidad y Precisión. Con años de trayectoria en el ámbito del Derecho civil, nuestro equipo en Jurídicos y Asociados ® ha manejado con éxito una amplia gama de casos, desde litigios de propiedad hasta asuntos de contratos y sucesiones. Nos enorgullecemos de nuestra habilidad para abordar cada caso con un análisis detallado y una estrategia a medida, asegurando que los intereses y derechos de nuestros clientes sean protegidos con la más alta dedicación y conocimiento especializado.",
          },
          {
            title: "A QUIÉNES DEFENDEMOS",
            text: "Defendemos a una amplia variedad de clientes, desde individuos hasta familias y empresas. Nuestro enfoque se centra en proporcionar representación legal a quienes enfrentan desafíos en asuntos de propiedad, contratos, sucesiones y otros litigios civiles. Nos esforzamos por entender y atender las necesidades específicas de cada cliente, ya sea una persona que busca proteger sus activos personales, una familia en medio de una disputa de herencia, o una empresa que necesita asesoramiento en complejas transacciones legales.",
          },
          {
            title: "ASESORÍA PERSONALIZADA",
            text: "Ofrecemos una asesoría personalizada en Derecho Civil, atendiendo los detalles de cada caso. Nos dedicamos a entender no solo los aspectos legales, sino también las circunstancias personales del cliente, para desarrollar una estrategia sólida y efectiva.",
          },
        ];
      case "derecho-de-familia":
        return [
          {
            title: "NUESTRA EXPERIENCIA",
            text: "Con años de experiencia en Derecho de Familia, en Jurídicos y Asociados ® entendemos la sensibilidad de los asuntos familiares y trabajamos con dedicación para ofrecer soluciones justas y equitativas. Desde disputas de custodia hasta divisiones de bienes, nuestro equipo está comprometido a brindar apoyo integral en cada caso.",
          },
          {
            title: "A QUIÉNES DEFENDEMOS",
            text: "Asistimos a personas, parejas y familias en momentos cruciales, ya sea en procesos de divorcio, custodia, o asuntos de sucesiones. Nos esforzamos por ofrecer un trato humano y personalizado, defendiendo siempre el bienestar y los intereses de nuestros clientes.",
          },
          {
            title: "ASESORÍA PERSONALIZADA",
            text: "Ofrecemos una asesoría personalizada en Derecho de Familia, asegurando que nuestros clientes reciban el apoyo necesario para resolver sus conflictos familiares de manera justa y sin confrontaciones innecesarias.",
          },
        ];
      case "derecho-penal":
        return [
          {
            title: "NUESTRA EXPERIENCIA",
            text: "Nuestro equipo de Derecho Penal en Jurídicos y Asociados ® se especializa en la defensa de casos complejos y delicados, ofreciendo una defensa sólida y fundamentada. Con un enfoque ético y profesional, protegemos los derechos de nuestros clientes en cada etapa del proceso penal.",
          },
          {
            title: "A QUIÉNES DEFENDEMOS",
            text: "Defendemos a personas acusadas de delitos, desde casos de menor gravedad hasta delitos graves. Nuestra meta es asegurar una defensa justa y competente para nuestros clientes, abordando cada caso con responsabilidad y dedicación.",
          },
          {
            title: "ASESORÍA PERSONALIZADA",
            text: "Entendemos el impacto de enfrentar cargos penales. Brindamos asesoría y representación legal ajustada a las circunstancias de cada cliente, buscando siempre una defensa eficaz y una solución justa.",
          },
        ];
      case "derecho-laboral":
        return [
          {
            title: "NUESTRA EXPERIENCIA",
            text: "Con un profundo conocimiento del Derecho Laboral, en Jurídicos y Asociados ® hemos trabajado con empresas y trabajadores para resolver disputas y asegurar el cumplimiento de sus derechos. Desde la creación de contratos hasta la defensa en tribunales laborales, nuestro equipo está preparado para ofrecer apoyo efectivo.",
          },
          {
            title: "A QUIÉNES DEFENDEMOS",
            text: "Ofrecemos asesoría tanto a empleadores como a empleados en temas laborales. Nuestros servicios incluyen desde la defensa en conflictos laborales hasta la adecuación de reglamentos internos y representación en juicios.",
          },
          {
            title: "ASESORÍA PERSONALIZADA",
            text: "Nos esforzamos por entender las particularidades de cada caso laboral, proporcionando asesoría ajustada a las necesidades y objetivos de nuestros clientes, asegurando la protección de sus derechos.",
          },
        ];
      default:
        return [
          {
            title: "Experiencia no encontrada",
            text: "No se encontró experiencia para este servicio.",
          },
        ];
    }
  };

  return (
    <section className="w-full px-4 flex flex-col items-center space-y-16 py-16 bg-texture">
      <Experience content={renderExperienceContent()} />
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
