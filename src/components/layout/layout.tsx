import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
