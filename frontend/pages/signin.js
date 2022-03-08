import styled from 'styled-components';
import SignIn from '../components/SignIn';

const SignInStyles = styled.div`
  display: block;
  .left {
    width: 50%;
    float: left;
  }
  .right {
    width: 50%;
    float: left;
  }
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
    <SignInStyles>
      <div className="left">
        <h3>Sign In</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className="right">
        <SignIn />
      </div>
    </SignInStyles>
  );
}
