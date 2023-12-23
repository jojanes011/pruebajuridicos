export const redirectWhatsapp = () => {
  const whatsappNumber = "3184471432"; // Reemplaza con tu número de teléfono
  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría obtener más información sobre Asesoría Jurídica."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  return whatsappLink as string;
};
