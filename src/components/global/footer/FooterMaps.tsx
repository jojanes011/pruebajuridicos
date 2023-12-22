import React from "react";

const FooterMaps = () => {
  return (
    <section aria-labelledby="footer-map" className="flex flex-col space-y-4 w-full sm:w-1/4">
      <h2 id="footer-map" className="font-bold text-lg">CÓMO LLEGAR</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d248.91139454095358!2d-76.53485685895923!3d3.4512485630363057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sco!4v1702611761855!5m2!1sen!2sco"
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
