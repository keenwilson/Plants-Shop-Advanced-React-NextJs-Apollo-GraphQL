import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CURRENT_USER_QUERY } from './User';

const AddToCartStyles = styled.div`
  display: flex;
  align-self: flex-end;
  margin-bottom: 5px;
  button {
    cursor: pointer;
    width: auto;
    background: transparent;
    color: var(--lightGreen);
    border: 0;
    font-size: 1.5rem;
    font-weight: 300;
    padding: 1.5rem;
    transition: 0.1s opacity linear;
    &:hover {
      color: var(--green);
    }
  }
`;

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(productId: $id) {
      id
    }
  }
`;
export default function AddToCart({ id }) {
  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { id },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  return (
    <AddToCartStyles>
      <button disabled={loading} type="button" onClick={addToCart}>
        Add to cart
      </button>
    </AddToCartStyles>
  );
}

AddToCart.propTypes = {
  id: PropTypes.string,
};
