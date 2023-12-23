import Image from "next/image";
import React from "react";
import FooterBottom from "./FooterBottom";
import FooterContact from "./FooterContact";
import FooterUrls from "./FooterUrls";
import FooterMaps from "./FooterMaps";
import FooterSuscribe from "./FooterSuscribe";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="flex flex-col sm:flex-row justify-between py-10 space-y-8 sm:space-y-0 space-x-0 sm:space-x-8 px-9">
        <FooterContact />
        <FooterUrls />
        <FooterMaps />
        <FooterSuscribe />
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
