import DefaultPicture from "../../assets/profile.png";
import Card from "../../components/Card";
import styled from "styled-components";



function FreelanceForm() {
  return (
    <div>
      <CardTitre>
        <h2>Trouvez votre prestataire</h2>
        <p>Chez Shiny nous reunissons les meilleurs profils pour vous.</p>
      </CardTitre>

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
const freelanceProfiles = [
  {
    name: "Lauren Ipsum",
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
  {
    name: "Alexandra Dupont",
    jobTitle: "UX Designer",
    picture: DefaultPicture,
  },
];
const CardContainer = styled.div`
  display: grid;
  gap: 5%;
  grid-template-rows: repeat(2, 350px);
  grid-template-columns: repeat(2, 350px);
  justify-content: center;
`;
const CardTitre = styled.div`
  text-align: center;
  line-height: 5;
  margin-bottom: 4%;
`
export default FreelanceForm;
