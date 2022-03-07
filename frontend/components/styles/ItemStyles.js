import styled from 'styled-components';

const ItemStyles = styled.div`
  background: white;
  border: 1px solid var(--offWhite);
  box-shadow: var(--bs);
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 389px;
    object-fit: cover;
    aspect-ratio: auto 324 / 389;
  }
  p {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 1rem;
    font-size: 1.5rem;
    text-align: left;
    font-weight: 300;
  }
  .buttonList {
    display: grid;

    width: 100%;
    border-top: 1px solid var(--lightGreen);
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: var(--lightGreen);
    & > * {
      background: white;
      border: 0;
      font-size: 1.5rem;
      padding: 1rem;
    }
  }
`;

export default ItemStyles;
