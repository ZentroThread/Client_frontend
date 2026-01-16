import { Outlet } from "react-router-dom";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Page content */}
      <main 
        className="flex-1 px-8 py-10"
        style={{ backgroundColor: "var(--dashboard-bg)" }}
      >
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>


      <Footer />
    </div>
  );
};

export default MainLayout;
