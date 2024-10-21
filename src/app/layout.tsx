import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "../components/global/whatsappButton/WhatsappButton";

const inter = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jurídicos y Asociados",
  description: "Página Web de Jurídicos y Asociados",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-marmolBlack backdrop-brightness-50 text-white`}>
        {children}
      </body>
      <WhatsAppButton />
    </html>
  );
}
