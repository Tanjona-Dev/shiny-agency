import ErrorImg from '../../assets/3828537.jpg'
import styled from 'styled-components';

const Image = styled.img`
    width: 82vw;
    height: 100vh;
    margin-left: 5%;
`
const H1 = styled.h1`
    text-align: center;
`
function Error() {
  return (
    <div>
      <H1>Oups...</H1>
      <Image
        src={ErrorImg}
        alt="Erreur 404"
      />
    </div>
  );
}
export default Error;
