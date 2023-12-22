import Footer from "../../global/footer/Footer";
import Header from "../../global/header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
