import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const SurveyContext = createContext();

function SurveyProvider({ children }) {
  const [answers, setAnswer] = useState({});

  function saveAnswer(newAnswer) {
    setAnswer({ ...answers, ...newAnswer });
  }
  return (
    <div>
      <SurveyContext.Provider value={{ answers, saveAnswer }}>
        {children}
      </SurveyContext.Provider>
    </div>
  );
}
export default SurveyProvider;
