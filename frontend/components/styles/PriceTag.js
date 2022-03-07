import styled from 'styled-components';

const PriceTag = styled.span`
  background: rgba(255, 255, 255, 0.9);
  color: #000;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.5em;
  letter-spacing: 0.02em;
  display: inline-block;
  position: absolute;
  bottom: 20px;
  left: 10px;
  z-index: 1;
  pointer-events: none;
  padding: 3px 8px 2px 5px;
`;

export default PriceTag;
