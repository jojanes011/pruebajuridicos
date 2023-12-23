"use client";
import React, { useState } from "react";

const Experience = () => {
  const [activeButton, setActiveButton] = useState(0);

  const buttonTexts = [
    {
      title: "NUESTRA EXPERIENCIA",
      text: "Nuestra Experiencia en Derecho Civil: Compromiso, Profundidad y Precisión. Con años de trayectoria en el ámbito del Derecho civil, nuestro equipo en Jurídicos y Asociados ® ha manejado con éxito una amplia gama de casos, desde litigios de propiedad hasta asuntos de contratos y sucesiones. Nos enorgullecemos de nuestra habilidad para abordar cada caso con un análisis detallado y una estrategia a medida, asegurando que los intereses y derechos de nuestros clientes sean protegidos con la más alta dedicación y conocimiento especializado.",
    },
    {
      title: "A QUIÉNES DEFENDEMOS",
      text: "Defendemos a una amplia variedad de clientes, desde individuos hasta familias y empresas. Nuestro enfoque se centra en proporcionar representación legal a quienes enfrentan desafíos en asuntos de propiedad, contratos, sucesiones y otros litigios civiles. Nos esforzamos por entender y atender las necesidades específicas de cada cliente, ya sea una persona que busca proteger sus activos personales, una familia en medio de una disputa de herencia, o una empresa que necesita asesoramiento en complejas transacciones legales. Nuestra misión es garantizar que cada cliente reciba una representación legal compasiva, personalizada y eficaz, independientemente de la naturaleza o el tamaño de su caso.",
    },
    {
      title: "ASESORÍA PERSONALIZADA",
      text: "En Jurídicos y Asociados ®, entendemos que enfrentarse a cargos penales puede ser una de las experiencias más desafiantes y estresantes. Por eso, ofrecemos una asesoría penal totalmente personalizada. Cada cliente recibe una atención detallada y un enfoque adaptado a su situación única. Nos dedicamos a entender no solo los detalles legales de tu caso, sino también tus circunstancias personales, trabajando contigo para desarrollar una estrategia de defensa sólida y efectiv",
    },
  ];

  const handleButtonClick = (buttonKey: any) => {
    setActiveButton(buttonKey);
  };

  return (
    <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-8 space-y-8 sm:space-y-0 text-black w-full sm:w-[1200px] mx-auto">
      <div className="flex flex-col space-y-8 w-full sm:w-1/2">
        <p>
          En Jurídicos y Asociados ®, nos destacamos en Derecho Civil,
          enfocándonos en la defensa y representación legal con un enfoque
          personal y detallado. Entendemos la complejidad de los asuntos civiles
          y estamos comprometidos a proteger tus derechos e intereses en cada
          paso del proceso. Desde disputas contractuales hasta asuntos de
          propiedad, nuestra meta es brindarte soluciones claras y efectivas.
        </p>
        <div className="flex flex-row">
          <div className="w-1 h-48 sm:h-44 bg-secondary bg-opacity-30 rounded-full" />
          <div className="flex flex-col space-y-4 w-full font-bold pl-4">
            {buttonTexts.map((element, index) => (
              <div key={index} className="flex flex-row items-center">
                <div
                  className={`w-1 h-14  -ml-5 rounded-full ${
                    activeButton === index && "bg-secondary bg-opacity-60"
                  }`}
                />
                <button
                  className={`py-2 pl-4 ml-4 bg-secondary rounded-lg ${
                    activeButton === index ? "bg-opacity-60" : "bg-opacity-10"
                  } w-full text-left`}
                  onClick={() => handleButtonClick(index)}
                >
                  <span>{element.title}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-white shadow-md text-tertiary py-8 px-8 w-full sm:w-1/2 flex flex-row items-center">
        <p>{buttonTexts[activeButton].text}</p>
      </div>
    </div>
  );
};

export default Experience;
