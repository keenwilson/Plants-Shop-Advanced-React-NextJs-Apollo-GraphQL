import styled from 'styled-components';
import RequestReset from '../components/RequestReset';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;

  h3 {
    font-size: 1.3em;
    font-weight: 300;
    text-transform: uppercase;
    line-height: 1.3328;
  }
  p {
    margin: 1rem 0;
  }
`;

export default function SignInPage() {
  return (
    <GridStyles>
      <SignIn />
      <SignUp />
      <RequestReset />
    </GridStyles>
  );
}
