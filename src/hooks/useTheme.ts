import { useThemeStore } from "@/store/useThemeStore";

export const useTheme = () => {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);
  const initializeTheme = useThemeStore((state) => state.initializeTheme);

  return { theme, setTheme, initializeTheme };
};
