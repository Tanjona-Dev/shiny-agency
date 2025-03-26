import { useState } from "react";
import styled from "styled-components";

const HomeSpan = styled.span`
  background-color: red;
  margin-top: 50px;
  border-radius: 50px;
  padding: 50px;
  display: inline-block; /* Ajouté pour un meilleur comportement de l'élément */
  transform: scale(${({ scale }) => scale});
  transition: transform 0.3s ease-in-out; /* Animation fluide */
`;

function Home() {
  const [scale, setScale] = useState(1);

  return (
    <div>
      <div onClick={() => setScale(scale + 0.1)}>
        Page d'acceuil 🏡

      </div>

      <HomeSpan scale={scale} />
    </div>
  );
}

export default Home;
