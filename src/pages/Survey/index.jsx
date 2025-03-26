import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Survey() {
  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);

  const PreviewNbr = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
  const Next = questionNumberInt + 1;
  const Question1 = 'Votre application doit-elle imperativement apparaitre en premier dans les resultats de recherche ?'

  const texteAffiche = questionNumber === "1" ? Question1 : null

  return (
    <Container>
      <H2>Question {questionNumber}</H2>
      <p> {texteAffiche}</p>
      {/* <Link to="client">Questionnaire Client</Link>
      <Outlet /> */}

      <div>
        <button>Oui</button>
        <button>Non</button>
        <br />
        <Link to={`/Survey/${PreviewNbr}`}>Preview</Link>
        {questionNumberInt === 10 ? (
          <Link to={`/Result`}>Resultat</Link>
        ) : (
          <Link to={`/Survey/${Next}`}>Next</Link>
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 30%;
  left: 30%;
`
const H2 = styled.h2`
  text-align: center;
`


export default Survey;
