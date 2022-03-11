import Link from 'next/link';
import PropTypes from 'prop-types';
import formatMoney from '../lib/formatMoney';
import AddToCart from './AddToCart';
import DeleteProduct from './DeleteProduct';
import ItemStyles from './styles/ItemStyles';

export default function Product({ product }) {
  return (
    <ItemStyles>
      <div className="product-image">
        <img
          src={product?.photo?.image?.publicUrlTransformed}
          alt={product.name}
        />
      </div>
      <div className="meta-wrapper">
        <span className="product-title">
          <Link href={`/product/${product.id}`}>{product.name}</Link>
        </span>
        <span className="product-price">{formatMoney(product.price)}</span>
        <AddToCart id={product.id} />
      </div>

      {/* TODO: Add buttons to edit and delete item */}
      <div className="buttonList">
        <Link
          href={{
            pathname: 'update',
            query: {
              id: product.id,
            },
          }}
        >
          Edit
        </Link>

        <DeleteProduct id={product.id}>Delete</DeleteProduct>
      </div>
    </ItemStyles>
  );
}

Product.propTypes = {
  product: PropTypes.any,
};
