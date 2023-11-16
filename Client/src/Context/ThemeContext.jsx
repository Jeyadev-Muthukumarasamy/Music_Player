import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  console.log(isDarkTheme)

  const handleTheme = (prev) => {
    console.log(prev)
    setIsDarkTheme((prev)=>!prev);
  };

  return (
    <ThemeContext.Provider value={{ handleTheme, isDarkTheme, setIsDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
