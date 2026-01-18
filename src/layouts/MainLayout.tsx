import { Outlet } from "react-router-dom";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-(--dashboard-bg)">
      <Navbar />

      {/* Page content */}
      <main className="flex-1 w-full">

        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
