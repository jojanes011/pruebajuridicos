import React from "react";

const FooterMaps = () => {
  return (
    <section
      aria-labelledby="footer-map"
      className="flex flex-col space-y-4 w-full sm:w-1/4"
    >
      <h2 id="footer-map" className="font-bold text-lg">
        CÓMO LLEGAR
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995.6459047317692!2d-76.53433813041397!3d3.4509369384559405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6645285bd3b%3A0x2704af9e4bfcf03!2sEdificio%20Bolsa%20De%20Occidente!5e0!3m2!1sen!2sco!4v1729175867006!5m2!1sen!2sco"
        width="284"
        height="186"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        className="rounded"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default FooterMaps;
