import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';
import DeleteProduct from './DeleteProduct';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import Title from './styles/Title';

const ProductImage = styled.div`
  height: auto;
  position: relative;
  margin-bottom: 12px;
  overflow: hidden;
`;

export default function Product({ product }) {
  return (
    <ItemStyles>
      <ProductImage>
        <img
          src={product?.photo?.image?.publicUrlTransformed}
          alt={product.name}
        />
        <PriceTag>{formatMoney(product.price)}</PriceTag>
      </ProductImage>
      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>

      <p>{product.description}</p>
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
