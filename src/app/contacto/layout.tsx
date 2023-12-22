import Footer from "@/src/components/global/footer/Footer";
import Title from "@/src/components/global/title/Title";

interface layoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: layoutProps) {
  return (
    <main className="bg-texture">
      <Title
        title="Contáctanos"
        subtitle="Soluciones reales para problemas reales"
        showBorder={false}
        backgroundImage="/images/contacto.jpg"
      />
      {children}
      <Footer />
    </main>
  );
}
