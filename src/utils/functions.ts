export const redirectWhatsapp = () => {
  const whatsappNumber = "3184471432"; // Reemplaza con tu número de teléfono
  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría obtener más información sobre Asesoría Jurídica."
  );
  const whatsappLink = `https://api.whatsapp.com/message/DLDVMELOM6X2O1?autoload=1&app_absent=0`;
  return whatsappLink as string;
};
