import styled from 'styled-components';

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  pointer-events: auto;
  justify-self: end;
  align-items: center;

  a,
  button {
    margin-right: 1.4vw;
    padding: 0.1em 0;
    display: block;
    color: var(--green);
    position: relative;
    font-weight: 300;
    font-size: 1.1em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    line-height: 1.8em;
    background: none;
    border: 0;
    cursor: pointer;
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }
    &:before {
      content: '';
      /* width: 2px;
      background: var(--lightGreen);
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0; */
    }
    &:after {
      /* height: 2px; */
      /* background: var(--green);
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem; */
    }
    &:hover,
    &:focus {
      outline: none;
      text-decoration: none;
      background-repeat: repeat-x;
      background-size: 1px 1px;
      background-position: 0 1.8em;
      background-image: linear-gradient(
        to right,
        var(--green) 100%,
        var(--green) 0
      );
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      &:after {
        width: calc(100% - 60px);
      }
      @media (max-width: 700px) {
        width: calc(100% - 10px);
      }
    }
  }
  @media (max-width: 1300px) {
    border-top: 1px solid var(--lightGray);
    width: 100%;
    justify-content: end;
    font-size: 1.5rem;
  }
`;

export default NavStyles;
