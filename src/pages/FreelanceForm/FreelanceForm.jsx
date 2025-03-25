import DefaultPictiure from "../../assets/profile.png";
import Card from "../../components/Card";

const freelanceProfiles = [
  {
    name: "Jane Doe",
    jobTitle: "Devops",
    picture: DefaultPictiure,
  },
  {
    name: "John Doe",
    jobTitle: "Devops",
    picture: DefaultPictiure,
  },
  {
    name: "Jeanne Biche",
    jobTitle: "Developpeuse Fullstack",
    picture: DefaultPictiure,
  },
];

function FreelanceForm() {
  return (
    <div>
      <h1>Freelances 👩·💻👨·💻👩·💻</h1>
      {freelanceProfiles.map((profile, index) => (
        <Card
          key={`${profile.name}-${index}`}
          label={profile.jobTitle}
          picture={profile.picture}
          title={profile.name}
        />
      ))}
    </div>
  );
}
export default FreelanceForm;
