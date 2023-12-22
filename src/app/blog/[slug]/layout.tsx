import Footer from "@/src/components/global/footer/Footer";
import Header from "@/src/components/global/header/Header";
import Title from "@/src/components/global/title/Title";

interface layoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: layoutProps) {
  return (
    <main className="bg-texture">
      <Header background="bg-primary" showBorder />
      {children}
      <Footer />
    </main>
  );
}
