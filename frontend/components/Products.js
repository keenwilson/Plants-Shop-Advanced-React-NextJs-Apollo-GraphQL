import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Product from './Product';
import { perPage } from '../config';

// gql turn string into a proper graphql query
// $skip variable will be calculated based on the page we are on
export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {
    allProducts(first: $first, skip: $skip) {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const ProductsListStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 90px;
  gap: 80px;
  justify-content: center;
`;
export default function Products({ page }) {
  // use a hook to fetch data
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: {
      first: perPage,
      skip: page * perPage - perPage,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <ProductsListStyles>
        {data.allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsListStyles>
    </div>
  );
}

Products.propTypes = {
  page: PropTypes.number,
};
