import DefaultPicture from "../../assets/profile.png";
import Card from "../../components/Card";
import styled from "styled-components";

const freelanceProfiles = [
  {
    name: "Jane Doe",
    jobTitle: "Devops",
    picture: DefaultPicture,
  },
  {
    name: "John Doe",
    jobTitle: "Developpeur frontend",
    picture: DefaultPicture,
  },
  {
    name: "Jeanne Biche",
    jobTitle: "Developpeuse Fullstack",
    picture: DefaultPicture,
  },
];
const CardContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px 350px;
  grid-template-columns: (2, 1fr);
`;

function FreelanceForm() {
  return (
    <div>
      <h1>Freelances 👩·💻👨·💻👩·💻</h1>
      <CardContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            picture={profile.picture}
            label={profile.jobTitle}
            title={profile.name}
          />
        ))}
      </CardContainer>
    </div>
  );
}
export default FreelanceForm;
