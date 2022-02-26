import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import Head from 'next/head';
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Product(
      where: {
        # query based on a unique field
        id: $id
      }
    ) {
      name
      price
      description
      id
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const ProductStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  width: var(--maxWidth);
  max-width: 100%;
  justify-content: center;
  align-items: start;
  gap: 40px;
  padding: 0 40px 40px;

  p {
    color: var(--green);
    font-weight: 400;
    line-height: 1.6;
    margin-top: 0;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .summary {
    grid-column: col2-start;
    display: grid;
    grid-template-columns: 1fr max-content;
    gap: 1rem;
    max-width: 480px;
    width: 100%;
    grid-template-areas: 'title price' 'bio bio';
    .product_title {
      grid-area: title;
      margin: 0;
      font-size: 2.4rem;
      font-weight: 400;
      line-height: 1.4;
      color: var(--green);
    }
    .price {
      grid-area: price;
      margin-bottom: 0;
      text-align: right;
      font-size: 2.4rem;
      font-weight: 400;
      line-height: 1.4;
      color: var(--green);
    }
    .short_description {
      grid-area: bio;
      font-size: 1.6rem;
      line-height: 1.6;
    }
  }
`;

export default function SingleProduct({ id }) {
  const { data, error, loading } = useQuery(SINGLE_ITEM_QUERY, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorMessage error={error} />;

  const { Product } = data;
  return (
    <ProductStyles>
      <Head>
        <title>Plants Shop | {Product.name}</title>
      </Head>
      <img
        src={Product.photo.image.publicUrlTransformed}
        alt={Product.photo.altText}
      />
      <div className="summary details">
        <h2 className="product_title">{Product.name}</h2>
        <p className="price">{Product.price}</p>
        <p className="short_description">{Product.description}</p>
      </div>
    </ProductStyles>
  );
}

SingleProduct.propTypes = {
  id: PropTypes.string,
};
