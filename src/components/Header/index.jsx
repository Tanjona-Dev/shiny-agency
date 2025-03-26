import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: red; border-radius: 30px; background-color: ${colors.primary};`}
`;
function Header() {
  return (
    <nav>
      <StyledLink to="/">Acceuil</StyledLink>
      <StyledLink to="/Survey/1" $isFullLink>
        Faire le test
      </StyledLink>
      <StyledLink to="/Freelance">Profils</StyledLink>
    </nav>
  );
}
export default Header;
