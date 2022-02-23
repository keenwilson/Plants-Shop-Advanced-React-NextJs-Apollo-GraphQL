import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`

    html {
        --divider: rgba(34, 66, 41, 0.16);
        --green: #224229;
        --lightGreen: rgba(34,66,41,.72);
        --gray: #3b4037;
        --grey: var(--gray);
        --cream: #f8f1e3;
        --offwhite: #ededed;
        --maxWidth: 1000px;
        --bs: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
        box-sizing: border-box;
        font-size: 62.5%;
    }

    *, *::before,*::after {
        box-sizing: inherit;
    }

    body {
        font-family:'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
    }

    a {
        text-decoration: none;
        color: var(--green)
    }

    a:hover {
        text-decoration: underline;
        color: var(--gray)
    }

    button {
        font-family:'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2 rem;
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
  cool: PropTypes.string,
};
