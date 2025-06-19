import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <div className="bg-secondary text-accent min-h-screen flex flex-col">
        <Navbar />
        <div className="pt-28">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
