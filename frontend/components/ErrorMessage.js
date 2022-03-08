import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const ErrorStyles = styled.div`
  padding: 1rem 2rem;
  background: var(--lightCream);
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 2px solid var(--green);
  p {
    margin: 0;
    font-weight: 300;
  }
  span {
    margin-right: 1rem;
    font-weight: 400;
  }
`;

const ErrorMessage = ({ error }) => {
  if (!error || !error.message) return null;
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((error, i) => (
      <ErrorStyles key={i}>
        <p data-test="graphql-error">
          <span>Oops!</span>
          {error.message.replace('GraphQL error: ', '')}
        </p>
      </ErrorStyles>
    ));
  }
  return (
    <ErrorStyles>
      <p data-test="graphql-error">
        <span>Shoot!</span>
        {error.message.replace('GraphQL error: ', '')}
      </p>
    </ErrorStyles>
  );
};

ErrorMessage.defaultProps = {
  error: {},
};

ErrorMessage.propTypes = {
  error: PropTypes.object,
};

export default ErrorMessage;
