import colors from "./style/colors";

import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`

    from{
        transform: rotate(0deg);
    }
        to{
            transform: rotate(360deg);
        }
`;

export const Loader = styled.div`
  animation: ${rotate} 1s infinite linear;
  border: 2px solid blue;
  border-radius: 50px;
  height: 0;
  width: 0;
  padding: 10px;
  border-bottom-color: transparent;
`;

 export const StyledLink = styled(Link)`
      padding: 10px 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  ${(props) =>
    props.$isFullLink &&
    `color: white; 
    border-radius: 30px; 
    background-color: ${colors.primary};`}
`