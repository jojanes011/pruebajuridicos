import React from "react";
import Footer from "@/src/components/global/footer/Footer";
import Title from "@/src/components/global/title/Title";
import { notFound } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
  params: { slug: string };
}

interface SlugConfig {
  [key: string]: {
    title: string;
    subtitle: string;
    backgroundImage: string;
  };
}

const slugConfig: SlugConfig = {
  "derecho-civil": {
    title: "Derecho Civil",
    subtitle: "Protegiendo Tus Intereses Personales y de Propiedad",
    backgroundImage: "/images/derecho-civil.webp",
  },
  // Agrega más configuraciones para otros slugs aquí
  "derecho-de-familia": {
    title: "Derecho de Familia",
    subtitle: "Enfrenta los retos legales familiares con un equipo que entiende y se preocupa por tu bienestar",
    backgroundImage: "/images/derecho-familiar.webp",
  },
  "derecho-laboral": {
    title: "Derecho Laboral",
    subtitle: "Salvaguardando Tus Derechos Laborales, Garantizamos un Futuro Profesional Justo y Seguro",
    backgroundImage: "/images/derecho-laboral.webp",
  },
  "derecho-penal": {
    title: "Derecho Penal",
    subtitle: "Defensa y Justicia a tu alcance",
    backgroundImage: "/images/derecho-penal.webp",
  },
};

export default function Layout({ params, children }: LayoutProps) {
  const { slug } = params;
  const config = slugConfig[slug] || slugConfig["default"];

  if (!slugConfig[slug]) {
    return notFound();
  }

  return (
    <main className="bg-texture">
      <Title
        title={config.title}
        subtitle={config.subtitle}
        showBorder={false}
        backgroundImage={config.backgroundImage}
      />
      {children}
      <Footer />
    </main>
  );
}
