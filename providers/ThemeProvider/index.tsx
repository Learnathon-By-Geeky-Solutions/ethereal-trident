import { useState, useEffect, useMemo, useCallback } from "react";
import { ThemeContext } from "@/providers/ThemeProvider/ThemeContext";
import { lightTheme, darkTheme, Theme } from "@/lib/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem("theme");
        const isValidTheme = (
          value: string | null,
        ): value is "light" | "dark" => value === "light" || value === "dark";

        if (isValidTheme(storedTheme)) {
          setTheme(storedTheme === "dark" ? darkTheme : lightTheme);
        } else {
          console.warn("INVALID THEME VALUE DETECTED:", storedTheme);
          setTheme(lightTheme);
          await AsyncStorage.setItem("theme", "light");
        }
      } catch (error) {
        console.error("Error loading theme:", error);
      }
    };

    loadTheme();
  }, []);

  const toggleTheme = useCallback(async () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
    try {
      await AsyncStorage.setItem(
        "theme",
        newTheme === darkTheme ? "dark" : "light",
      );
    } catch (error) {
      console.error("Error saving theme:", error);
    }
  }, [theme]);

  const contextValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
