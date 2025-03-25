import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Survey() {
  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);

  const PreviewNbr = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
  const Next = questionNumberInt + 1;

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>
      {/* <Link to="client">Questionnaire Client</Link>
      <Outlet /> */}

      <div>
        <br />
        <Link to={`/Survey/${PreviewNbr}`}>Preview</Link>
        <br />
        {questionNumberInt === 10 ? (
          <Link to={`/Result`}>Resultat</Link>
        ) : (
          <Link to={`/Survey/${Next}`}>Next</Link>
        )}
      </div>
    </div>
  );
}
export default Survey;
