import { useEffect, useState } from "react";
import Card from "../../components/Card";
import styled from "styled-components";
import { Loader } from "../../utils/Atoms";

function FreelanceForm() {
  const [freelancersList, setFreelancersList] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    async function fetchFreelances() {
      try {
        const response = await fetch("http://localhost:8000/freelances");
        const { freelancersList } = await response.json();
        setFreelancersList(freelancersList);
        setIsLoad(true);
      } catch (error) {
        console.log("======== error ========", err);
      }
    }
    fetchFreelances();
  }, []);

  return (
    <div>
      {isLoad ? (
        <>
          <CardTitre>
            <h2>Trouvez votre prestataire</h2>
            <p>Chez Shiny nous reunissons les meilleurs profils pour vous.</p>
          </CardTitre>

          <CardContainer>
            {freelancersList.map((profile, index) => (
              <Card
                key={`${profile.name}-${index}`}
                picture={profile.picture}
                label={profile.job}
                title={profile.name}
              />
            ))}
          </CardContainer>
        </>
      ) : (
        <LoadContainer>
          <Loader />
        </LoadContainer>
      )}
    </div>
  );
}

const CardContainer = styled.div`
  display: grid;
  gap: 5%;
  grid-template-rows: repeat(8, 350px);
  grid-template-columns: repeat(2, 350px);
  justify-content: center;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    display: grid;
    grid-template-rows: repeat(1, 200px);
    grid-template-columns: repeat(1, 100px);
    place-items: center;
  }
`;
const CardTitre = styled.div`
  text-align: center;
  line-height: 5;
  margin-bottom: 4%;
`;
const LoadContainer = styled.div`
  place-items: center;
  margin-top: 20%;
`;
export default FreelanceForm;
