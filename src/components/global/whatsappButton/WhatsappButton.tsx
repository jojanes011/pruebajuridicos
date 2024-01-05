"use client";
import { redirectWhatsapp } from "@/src/utils/functions";
import Fab from "@mui/material/Fab";
import Image from "next/image";

const styles = {
  position: "fixed",
  bottom: "32px",
  right: "16px",
  backgroundColor: "#25D366",
  "&:hover": {
    backgroundColor: "#128C7E",
  },
};

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Cambia el enlace según tus necesidades
    const whatsappLink = redirectWhatsapp();
    window.open(whatsappLink, "_blank");
  };

  return (
    <Fab
      className="bg-[#25D366]"
      sx={styles}
      onClick={handleWhatsAppClick}
      aria-label="whatsapp"
    >
      <Image
        src="/icons/whatsapp.svg"
        alt="Whatsapp Icon"
        width={48}
        height={48}
      />
    </Fab>
  );
};

export default WhatsAppButton;
