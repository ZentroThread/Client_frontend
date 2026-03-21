import { useEffect } from "react";
// import {AppRoutes} from "./routes/route";
import { useTheme } from "./hooks/useTheme";
// import Navbar from "./components/organisms/Navbar";
// import Footer from "./components/organisms/Footer";
import { AppRoutes } from "./routes/route";
import AIAssistant from "./components/molecules/chatbot/AIAssistant";
import ScrollToTop from "./components/organisms/ScrollToTop";

function App() {
  const { initializeTheme } = useTheme();

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  // return <AppRoutes />;
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      {/* <Navbar /> */}
      <main className="flex-1">
        <AppRoutes />
      </main>
      {/* <Footer /> */}
      <AIAssistant />
    </div>
  );
}

export default App;
