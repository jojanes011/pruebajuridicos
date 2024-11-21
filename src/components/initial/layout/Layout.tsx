"use client";
import { Slide } from "react-awesome-reveal";
import Footer from "../../global/footer/Footer";
import Header from "../../global/header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="flex flex-col min-h-screen">
      <Header showBorder={false} />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
