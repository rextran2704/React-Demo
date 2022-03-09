import React, { useState, useContext } from "react";

const ThemeContext = React.createContext(false);
const ThemeUpdateContext = React.createContext(() => {});

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }: any) {
  const [darkTheme, setDarkTheme] = useState(false);
  console.log(darkTheme);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
    console.log("toggle to dark: " + darkTheme);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
