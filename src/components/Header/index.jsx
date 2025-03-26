import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import logoDark from '../../assets/dark-logo.png'

const StyledLink = styled(Link)`
  padding: 10px;
  margin-right: 5%;
  margin-top: 1%;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary}; height: 3vh;`}
`;
const NavStyled = styled.nav`
    display: flex;
    justify-content: flex-end;
    @media (max-width: 800px){
      flex-direction: column;
      align-items: center;
    }
    `

    const Logo = styled.img`
      margin-right: auto;
    `
function Header() {
  return (
    <NavStyled >
      <Logo src={logoDark} alt=""  />
      <StyledLink to="/">Acceuil</StyledLink>
      <StyledLink to="/Freelance">Profils</StyledLink>
      <StyledLink to="/Survey/1" $isFullLink>
        Faire le test
      </StyledLink>
    </NavStyled>
  );
}
export default Header;
