"use client";
import { Slide } from "react-awesome-reveal";
import Footer from "../../global/footer/Footer";
import Header from "../../global/header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Header showBorder={false} />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
