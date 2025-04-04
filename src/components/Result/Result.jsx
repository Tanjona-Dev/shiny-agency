import { useContext, useEffect } from "react";
import { SurveyContext } from "../../utils/context";


function Result() {
  const {answers} = useContext(SurveyContext)
  useEffect(()=>{
    console.log(answers)
  },[answers])
  return (
    <div>
      <h1>Resultat</h1>
    </div>
  );
}
export default Result;
