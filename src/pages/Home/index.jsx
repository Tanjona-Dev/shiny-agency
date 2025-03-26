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
          <br /><br />
        </TextHome>
        <LinksHome>Faire le test</LinksHome>
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
  font-size: 1.5em;
  margin-left: 300px;
  padding-left: 25px;
  padding-rigth: 25px;
  `;

const TextHome = styled.div`
  font-size: 3.2em;
  font-weight: bold;
  width: 50%;
  margin-left: 300px;
  @media (max-width: 800px) {
    font-size: 1.5em;
    position: absolute;
    top: 45%;
    left: 15%;
  }
`;
const Container2 = styled.div`
  margin: 50px;
  width: 92%;
  height: 100vh;
  background-color: rgb(141, 138, 138, 0.05);
  display: flex;
  align-items: center;
  @media (max-width: 800px){
    display: flex;
    flex-wrap: wrap;
  }
`;
const Image = styled.img`
  margin-right: 300px;
`


export default Home;
