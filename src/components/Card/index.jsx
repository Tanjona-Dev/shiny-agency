import PropTypes from "prop-types";
import DefaultPicture from "../../assets/profile.png";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const CardLabel = styled.span`
color: #5843e4;
font-size: 22px;
font-weight: bold;
`;
const CardImage = styled.img`
width: 80px; 
height: 80px;
border-radius: 50%;
`
const CardWarpper = styled.div`
  display: flex; 
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 350px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`

function Card({ picture, label, title }) {

  return (
    <CardWarpper style={{ display: "flex", flexDirection: "column", padding: 15 }}>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <span>{title}</span>
    </CardWarpper>
  );
}

Card.propTypes = {
  picture: PropTypes.oneOfType([PropTypes.string, PropTypes.any]).isRequired,
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

Card.defaultProps = {
  title: "",
  label: "",
  picture: DefaultPicture,
};

export default Card;
