import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

const Experience = ({ content }: any) => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (buttonKey: any) => {
    setActiveButton(buttonKey);
  };

  return (
    <Fade>
      <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-8 space-y-8 sm:space-y-0 text-black w-full sm:w-[1200px] mx-auto">
        <div className="flex flex-col space-y-8 w-full sm:w-1/2">
          <p>
            En Jurídicos y Asociados ®, estamos comprometidos a ofrecer la mejor
            representación legal para nuestros clientes en diversas áreas del
            derecho. Nuestro enfoque se centra en la experiencia y el
            compromiso.
          </p>
          <div className="flex flex-row">
            <div className="w-1 h-48 sm:h-44 bg-secondary bg-opacity-30 rounded-full" />
            <div className="flex flex-col space-y-4 w-full font-bold pl-4">
              {content.map((element: any, index: any) => (
                <div key={index} className="flex flex-row items-center">
                  <div
                    className={`w-1 h-14 -ml-5 rounded-full ${
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
          <p>{content[activeButton].text}</p>
        </div>
      </div>
    </Fade>
  );
};

export default Experience;
