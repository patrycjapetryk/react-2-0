import { createContext, useContext, useState } from "react";

export enum Theme {
  "GRAY" = "gray",
  "ROSE" = "rose",
  "BLUE" = "blue",
  "ORANGE" = "orange",
}

type ThemeContextType = {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);
ThemeContext.displayName = "ThemeContext";

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context) {
    return context;
  }
  throw new Error("Component should be placed inside ThemeContextProvider");
}

function useTheme() {
  const [theme, setTheme] = useState<Theme>(Theme.GRAY);

  const changeTheme = (theme: Theme) => {
    setTheme(theme);
  };

  return { theme, changeTheme };
}

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeContext.Provider value={useTheme()}>{children}</ThemeContext.Provider>
  );
}
