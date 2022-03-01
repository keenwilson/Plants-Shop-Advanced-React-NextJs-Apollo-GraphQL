import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';
import ErrorMessage from './ErrorMessage';
import PaginationStyles from './styles/PaginationStyles';
import { perPage } from '../config';

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    _allProductsMeta {
      count
    }
  }
`;

export default function Pagination({ page }) {
  const { data, error, loading } = useQuery(PAGINATION_QUERY);

  if (loading) return <p>Loading ...</p>;
  if (error) return <ErrorMessage error={error} />;

  const { count } = data._allProductsMeta;
  // Get the upper bound to the next whole number
  const pageCount = Math.ceil(count / perPage);

  // Dynamically calculate previous and next page links
  // based on page variable
  return (
    <PaginationStyles>
      <Head>
        <title>Plants Shop - Page {page} of ___</title>
      </Head>

      <Link href={`/products/${page - 1}`}>
        <a aria-disabled={page <= 1}>← Prev</a>
      </Link>
      <p>
        Page {page} of {pageCount}{' '}
      </p>
      <p>{count} Items Total</p>
      <Link href={`/products/${page + 1}`}>
        <a aria-disabled={page >= pageCount}>Next →</a>
      </Link>
    </PaginationStyles>
  );
}
Pagination.propTypes = {
  page: PropTypes.number,
};
