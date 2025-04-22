import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex-grow w-full px-2 md:px-4 py-6 md:py-8 max-w-full">
        {/* 
          Le conteneur ne doit pas brider la largeur sur mobile, on retire 'container' mais garde le centrage sur desktop 
          Si besoin, les pages internes peuvent gérer leur max-width ou container individuellement.
        */}
        <div className="max-w-5xl w-full mx-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
