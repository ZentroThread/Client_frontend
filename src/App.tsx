import { useEffect } from "react";
import {AppRoutes} from "./routes/route";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { initializeTheme } = useTheme();

  useEffect(() => {
    initializeTheme();
  }, []);

  return <AppRoutes />;
}

export default App;
