import { useContext } from "react";
import { ThemeContext } from "../context";
import { createGlobalStyle } from "styled-components";

function GlobalStyle() {
  const { theme } = useContext(ThemeContext);
  return <StyleGlobalStyle isDarkMode={theme === "dark"} />;
}
const StyleGlobalStyle = createGlobalStyle`
    *{
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
        }
    body{
     background-color: ${({ isDarkMode }) => (isDarkMode ? "#2F2E41" : "white")};
        heigth: 100vh;
        margin: 0;
    }
`;
export default GlobalStyle;
