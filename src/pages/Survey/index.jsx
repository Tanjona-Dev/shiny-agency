import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Loader } from "../../utils/Atoms";

function Survey() {
  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const [surveyData, setSurveyData] = useState({});
  const [isLoad, setIsLoad] = useState(false);

  const PreviewNbr = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
  const Next = questionNumberInt + 1;

  const texteAffiche = surveyData[questionNumber];

  useEffect(() => {
    setIsLoad(true);
    fetch(`http://localhost:8000/survey`).then((response) =>
      response
        .json()
        .then(({ surveyData }) => {
          setSurveyData(surveyData);
          setIsLoad(false);
        })
        .catch((error) => console.log(error))
    );
  }, []);

  return (
    <Container>
      <H2>Question {questionNumber}</H2>
      <Container2>

      {isLoad ? (
          <Loader />
      ) : (
          <p> {texteAffiche}</p>
        
      )}
      </Container2>
      <div>
        <ButtonContainer>
          <div>
            <Button>Oui</Button>
          </div>
          <div>
            <Button>Non</Button>
          </div>
        </ButtonContainer>
        <br />
        <LinksContainer>
          <LinksStyle to={`/Survey/${PreviewNbr}`}>Preview</LinksStyle>
          {questionNumberInt === 10 ? (
            <Link to={`/Result`}>Resultat</Link>
          ) : (
            <LinksStyle to={`/Survey/${Next}`}>Next</LinksStyle>
          )}
        </LinksContainer>
      </div>
    </Container>
  );
}

// TOUTS LES STYLES SONT EN BAS
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  padding: 20px;
  `;
const H2 = styled.h2`
  text-align: center;
  margin-bottom: 50px;
`;
const LinksStyle = styled(Link)`
  text-decoration: underline;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  font-size: 1.2em;
  @media(max-width: 768px){
    gap: 50px;
  }
`;
const Button = styled.button`
  width: 160px;
  height: 50px;
  border-radius: 10px;
  margin-top: 50px;
  @media(max-width: 768px){
    width: auto;
    height: auto;
    font-size: 0.8em;
  }
`;
const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-top: 5px;
`;

const Container2 = styled.div`
  place-items: center;
  width : 50vw;
  height : 10vh;
  @media(max-width: 768px){
    height: 15vh;
  }
`
export default Survey;
