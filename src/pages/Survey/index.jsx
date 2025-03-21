import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Survey() {
  const [Qnumber, setQnumber] = useState("");
  const [buttonName, setButtonName] = useState("Suivant");
  const { questionNumber } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setQnumber(parseInt(questionNumber));
  }, [questionNumber]);

  function Suivant() {
    if (Qnumber === 10) {
      navigate("/Result");
    }
    if (Qnumber === 9) {
      setButtonName("Resultat");
    }
    if (Qnumber < 10) {
      const nextQ = Qnumber + 1;
      setQnumber(nextQ);
      navigate(`/Survey/${nextQ}`);
    }
  }
  function Preview() {
    if (Qnumber >= 2) {
      const prevQ = Qnumber - 1;
      setQnumber(prevQ);
      navigate(`/Survey/${prevQ}`);
    }
  }

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>
      {/* <Link to="client">Questionnaire Client</Link>
      <Outlet /> */}

      <div>
        <br />
        <button onClick={() => Preview()}>Precedent</button>
        <button onClick={() => Suivant()}>{buttonName}</button>
      </div>
    </div>
  );
}
export default Survey;
