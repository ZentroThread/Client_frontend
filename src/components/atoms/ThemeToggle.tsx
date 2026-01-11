import { useTheme } from "@/hooks/useTheme";
// import { Moon, Son } from 'lucide-react';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 rounded-md border 
                 hover:bg-gray-200 dark:hover:bg-gray-700 
                 transition"
    >
      {/* {theme === "dark" ? <Moon /> : <Sun /> } */}
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
};
