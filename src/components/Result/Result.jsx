import useFetch from "../../utils/hooks";
import { Loader } from "../../utils/Atoms";
import { SurveyContext } from "../../utils/context";
import { useContext } from "react";

function formatFetchParams(answer) {
  const answerNumber = Object.keys(answer);
  return answerNumber.reduce((acc, number, index) => {
    const isFirstParam = index === 0;
    const separator = isFirstParam ? "" : "&";
    return `${acc}${separator}a${number}=${answer[number]}`;
  }, "");
}

function Result() {
  const { answers } = useContext(SurveyContext);
  const fetchParams = formatFetchParams(answers);
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/results?${fetchParams}`
  );
  const resultsData = data?.resultsData;

  if (error) {
    return <span>il y a eu un probleme !</span>;
  }
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div>
            {resultsData &&
              resultsData.map((profil, index) => {
                return (
                  <span key={`${index}-${profil.title}`}>
                    {profil.title}
                    {index === resultsData.length - 1 ? "" : ", "}
                  </span>
                );
              })}
          </div>
          <div>
            {resultsData.map((profil, index) => (
              <div key={index}>
                <p>{profil.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default Result;
