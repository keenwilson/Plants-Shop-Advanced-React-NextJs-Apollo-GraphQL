import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  background: transparent;
  padding: 3em;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 300;
  h2 {
    font-weight: 400;
  }
  label {
    display: block;
    font-weight: 300;
    font-style: normal;
    letter-spacing: 0em;
    text-transform: none;
    line-height: 1.8em;
    margin-bottom: 6px 0px;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 1em;
    margin: 6px 0 4px;
    border: 1px solid #ccc;
    background: #fafafa;
    color: #000;
    font-size: 1em;
    line-height: normal;
    box-sizing: border-box;
    border-radius: 2px;
    &:focus {
      outline: 0;
      border-color: var(--green);
    }
  }
  button,
  input[type='submit'] {
    width: auto;
    background: var(--green);
    margin-right: 1.4vw;
    color: white;
    border: 0;
    font-size: 1.5rem;
    font-weight: 300;
    padding: 1.5rem;
    transition: 0.1s opacity linear;
    &:hover {
      background: var(--lightGreen);
      box-shadow: var(--bs);
    }
  }
  button[type='submit'] {
    margin-top: 1.4vw;
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(
        to right,
        var(--green) 0%,
        var(--lightGreen) 50%,
        var(--green) 100%
      );
      margin-bottom: 6px;
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default Form;
