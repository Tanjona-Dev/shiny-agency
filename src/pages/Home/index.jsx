import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../utils/style/colors";
import homeImg from "../../assets/home-illustration.svg";

function Home() {
  return (
    <Container2>
      <div>
        <TextHome>
          Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents
          <br />
          <br />
          <LinksHome>Faire le test</LinksHome>

        </TextHome>
      </div>
      <div>
        <Image src={homeImg} alt="" />
      </div>
    </Container2>
  );
}
const LinksHome = styled(Link)`
  color: white;
  border-radius: 30px;
  background-color: ${colors.primary};
  padding: 10px;
  padding-left: 25px;
  padding-rigth: 25px;
  font-size: 0.5em;
`;

const TextHome = styled.div`
  font-size: 2em;
  font-weight: bold;
  max-width: 600px;
 text-align: center;
`;
const Container2 = styled.div`
  background-color: rgb(141, 138, 138, 0.09);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  padding: 50px 20px
  text-align: center;
  width: 90vw;
  height: auto;
  margin: auto;
  margin-top: 10vh;
  
`;
const Image = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  margin: 0 auto;
`;


export default Home;
