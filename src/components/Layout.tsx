import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="">
      <Navbar />

      <main className="">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
