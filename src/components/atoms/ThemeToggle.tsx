import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      // className=" hover:bg-gray-200 dark:hover:bg-gray-700 
      //            transition"
    >
      {/* {theme === "dark" ? <Moon /> : <Sun /> } */}
      {/* {theme === "dark" ? "☀️" : "🌙"} */}
      {theme === "dark" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  );
};
