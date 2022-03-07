import styled from 'styled-components';

const ItemStyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  .product-image {
    margin: 0;
    height: 0;
    position: relative;
    padding-bottom: 133.333%;
    overflow: hidden;
    display: flex;
    pointer-events: none;
    img {
      width: 100%;
      height: 100%;
      object-position: 50% 50%;
      object-fit: cover;
      aspect-ratio: auto 287 / 383;
      opacity: 1;
      position: absolute;
      top: 0;
      left: 0;
      transition: opacity 1s ease, transform 1s ease;
      border: 0;
      line-height: 0;
    }
  }
  .meta-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 0.5rem;
  }
  .product-title {
    font-size: 1.3em;
    font-weight: 300;
    font-style: normal;
    letter-spacing: 0em;
    text-transform: none;
    line-height: 1.4em;
  }

  .product-price {
    margin-top: 0.5rem;
    font-size: 1em;
    font-weight: 300;
    font-style: normal;
    letter-spacing: 0.02em;
    text-transform: none;
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
    background: transparent;
    & > * {
      border: 0;
      font-size: 1.5rem;
      padding: 1rem;
    }
    button {
      background-color: transparent;
    }
  }
`;

export default ItemStyles;
