import styled from "styled-components";
import colors from "../../utils/style/colors";
import { ThemeContext } from "../../utils/context";
import { useContext } from "react";

function Footer() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <FooterContainer>
      <NightModeButton onClick={() => toggleTheme()}>
        Changer de mode : {theme === "light" ? "🌞" : "🌙"}
      </NightModeButton>
    </FooterContainer>
  );
}
const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  margin-top: 60px;
  margin-bottom: 0;
`;
const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.secondary};
`;
export default Footer;
