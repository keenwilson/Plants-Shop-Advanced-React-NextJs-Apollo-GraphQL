import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.h1`
  font-size: calc(2 * 1rem);
  font-weight: 500;
  letter-spacing: 0.1em;
  line-height: 1.4em;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  background: var(--lightCream);
  border: 1px solid var(--green);
  border-radius: 29px;
  cursor: pointer;
  display: inline-block;
  user-select: none;
  transition: 0.2s;
  &:hover {
    box-shadow: var(--bs);
    transform: translateY(-0.1em);
  }
  a {
    color: var(--green);
    text-decoration: none;
    padding: 1.6rem 3.2rem;
  }
  a:hover {
    color: var(--green);
    text-decoration: none;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 1px solid var(--divider, rgba(34, 66, 41, 0.16));
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }
  .sub-bar {
    border-bottom: 1px solid var(--divider, rgba(34, 66, 41, 0.16));
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">Plants Shop</Link>
        </Logo>
        <Nav />
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
    </HeaderStyles>
  );
}
