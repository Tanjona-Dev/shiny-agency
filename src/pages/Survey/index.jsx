import styled from "styled-components";
import { Link } from "react-router-dom";
import { Loader } from "../../utils/Atoms";
import { useParams } from "react-router-dom";
import colors from "../../utils/style/colors";
import { SurveyContext } from "../../utils/context";
import { useContext, useEffect, useState } from "react";

function Survey() {
  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const [surveyData, setSurveyData] = useState({});
  const [isLoad, setIsLoad] = useState(false);
  const PreviewNbr = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
  const Next = questionNumberInt + 1;
  const texteAffiche = surveyData[questionNumber];

  // UseContext Button Reponse
  const { answers, saveAnswer } = useContext(SurveyContext);
  function saveReply(answer) {
    saveAnswer({ [questionNumber]: answer });
  }

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
  useEffect(() => {
    console.log(answers);
  }, [answers]);

  return (
    <Container>
      <H2>Question {questionNumber}</H2>
      <Container2>{isLoad ? <Loader /> : <p> {texteAffiche}</p>}</Container2>
      <div>
        <ButtonContainer>
          <div>
            <ReplyBox onClick={() => saveReply(true)}>Oui</ReplyBox>
          </div>
          <div>
            <ReplyBox onClick={() => saveReply(false)}>Non</ReplyBox>
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
  @media (max-width: 768px) {
    gap: 50px;
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
  width: 50vw;
  height: 10vh;
  @media (max-width: 768px) {
    height: 15vh;
  }
`;

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : "none"};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`;
export default Survey;
