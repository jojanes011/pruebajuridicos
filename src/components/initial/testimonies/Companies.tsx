import Image from "next/image";
import React from "react";

const Companies = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 pt-16">
      <div>
        <Image
          src="/images/nike.png"
          alt="Nike Compañia de Juridicos y Asociados"
          width={225}
          height={150}
        />
      </div>
      <div>
        <Image
          src="/images/dell.png"
          alt="Dell Compañia de Juridicos y Asociados"
          width={225}
          height={150}
        />
      </div>
      <div>
        <Image
          src="/images/apple.png"
          alt="Apple Compañia de Juridicos y Asociados"
          width={225}
          height={150}
        />
      </div>
      <div>
        <Image
          src="/images/google.png"
          alt="Google Compañia de Juridicos y Asociados"
          width={225}
          height={150}
        />
      </div>
    </div>
  );
};

export default Companies;
