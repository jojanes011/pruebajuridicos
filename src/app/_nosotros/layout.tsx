import Footer from "@/src/components/global/footer/Footer";
import Title from "@/src/components/global/title/Title";

interface layoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: layoutProps) {
  return (
    <main className="bg-texture">
      <Title
        title="Bufete de abogados expertos"
        subtitle="Profesionales Dedicados a Brindar Soluciones Legales con
          Integridad y Excelencia"
        showBorder={false}
        backgroundImage="/images/nosotros.webp"
      />
      {children}
      <Footer />
    </main>
  );
}
