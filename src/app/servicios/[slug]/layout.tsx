import Footer from "@/src/components/global/footer/Footer";
import Title from "@/src/components/global/title/Title";

interface layoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: layoutProps) {
  return (
    <main className="bg-texture">
      <Title
        title="Derecho Civil"
        subtitle="Protegiendo Tus Intereses Personales y de Propiedad"
        showBorder={false}
        backgroundImage="/images/derecho-civil.jpg"
      />
      {children}
      <Footer />
    </main>
  );
}
