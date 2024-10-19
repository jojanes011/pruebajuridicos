import Footer from "@/src/components/global/footer/Footer";
import Title from "@/src/components/global/title/Title";

interface layoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: layoutProps) {
  return (
    <main className="bg-texture2 bg-cover bg-no-repeat">
      <Title
        title="Contáctanos"
        subtitle="Soluciones reales para problemas reales"
        showBorder={false}
        backgroundImage="/images/contacto.webp"
      />
      {children}
      <Footer />
    </main>
  );
}
