import { useContext } from "react";
import styled from "styled-components";
import useFetch from "../../utils/hooks";
import { Loader } from "../../utils/Atoms";
import colors from "../../utils/style/colors";
import { StyledLink } from "../../utils/Atoms";
import { ThemeContext } from "../../utils/context";
import { SurveyContext } from "../../utils/context";

function formatFetchParams(answer) {
  const answerNumber = Object.keys(answer);
  return answerNumber.reduce((acc, number, index) => {
    const isFirstParam = index === 0;
    const separator = isFirstParam ? "" : "&";
    return `${acc}${separator}a${number}=${answer[number]}`;
  }, "");
}

function Result() {
  const { theme } = useContext(ThemeContext);
  const { answers } = useContext(SurveyContext);
  const fetchParams = formatFetchParams(answers);
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/results?${fetchParams}`
  );
  const resultsData = data?.resultsData;

  if (error) {
    return <span>il y a eu un probleme !</span>;
  }
  return isLoading ? (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  ) : (
    <ResultContainer theme={theme}>
      <ResultTitle theme={theme}>
        Les compétences dont vous avez besoin :
        {resultsData &&
          resultsData.map((profil, index) => {
            return (
              <JobTitle key={`${index}-${profil.title}`} theme={theme}>
                {profil.title}
                {index === resultsData.length - 1 ? "" : ", "}
              </JobTitle>
            );
          })}
      </ResultTitle>
      <StyledLink $isFullLink to={`/Freelance`}>
        Découvrez nos profils
      </StyledLink>
      <DescriptionWrapper>
        {resultsData.map((profil, index) => (
          <JobDescription key={index} theme={theme}>
            <JobTitle theme={theme}>{profil.title}</JobTitle>
            <p>{profil.description}</p>
          </JobDescription>
        ))}
      </DescriptionWrapper>
    </ResultContainer>
  );
}
const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({theme})=> theme === 'light' ? colors.backgroundLight : colors.backgroundDark}
`;
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const ResultTitle = styled.span`
  color: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
  font-weight: bold;
  font-size: 28px;
  max-width: 60%;
  text-align: center;
  & > span {
    padding-left: 10px;
}`;

const JobTitle = styled.span`
  color: ${({ theme }) =>
    theme === "light" ? colors.primary : colors.backgroundLight};
  text-transform: capitalize;
`;
const DescriptionWrapper = styled.div`
  padding: 60px;
`;
const JobDescription = styled.div`
  font-size: 18px;
  & > p {
    color: ${({ theme }) => (theme === "light" ? colors.secondary : "#ffffff")};
    margin-block-start: 5px;
  }
  & > span {
    font-size: 20px;
  }
`;
export default Result;
