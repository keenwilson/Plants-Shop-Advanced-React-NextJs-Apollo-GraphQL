import PropTypes from 'prop-types';
import SingleProduct from '../../components/SingleProduct';

// [id].js syntax tells next js to use thos template with anything that match this layout
// destructure props.query and use it

export default function SingleProductPage({ query }) {
  return <SingleProduct id={query.id} />;
}

SingleProductPage.propTypes = {
  query: PropTypes.object,
};
