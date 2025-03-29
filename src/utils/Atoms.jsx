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
