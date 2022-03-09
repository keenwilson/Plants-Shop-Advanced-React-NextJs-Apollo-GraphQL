import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CartStyles from './styles/CartStyles';
import formatMoney from '../lib/formatMoney';
import { useUser } from './User';
import calculateTotalPrice from '../lib/calculateTotalPrice';

const CartTitleStyles = styled.h2`
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 30px;
  letter-spacing: 0.1em;
  line-height: 1.4em;
  color: var(--green);
`;

const CartItemsContainer = styled.ul`
  display: table;
  width: 100%;
  position: relative;
  line-height: 1.5em;

  .cart-item-list-labels {
    display: grid;
    grid-template-columns: 45px 100px 3fr 1fr 1fr;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  }
  .cart-item-list-label {
    display: inline-block;
    vertical-align: middle;
  }
  .text-label {
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 0.05em;
    opacity: 0.6;
  }
  .photo-placeholder {
    width: 100px;
    position: relative;
  }
  .product-placeholder {
    font-size: 14px;
    line-height: 1.5em;
    flex-grow: 8;
  }
  .quantity-label {
    text-align: center;
  }
  .price-label {
    text-align: right;
  }
`;

const EmptyMessageStyles = styled.div``;

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid var(--lightGreen);
  display: grid;
  grid-template-columns: 45px 100px 3fr 1fr 1fr;
  .item-remove {
    display: inline-block;
    vertical-align: middle;
    margin-right: 1.8em;
    font-size: 2rem;
    font-family: helvetica, sans-serif;
    font-weight: 100;
    cursor: pointer;
    button {
      background: transparent;
      border: none;
      color: inherit;
      padding: 0;
    }
    button span {
      opacity: 0.4;
      text-transform: none;
    }
  }
  img {
    margin-right: 1rem;
    width: 90px;
  }
  h3 {
    margin: 0 1rem;
    font-size: 1.8rem;
    font-weight: 300;
    color: var(--green);
  }

  p {
    text-align: center;
    font-size: 1.7rem;
    font-weight: 300;
    margin: 0;
  }
  .item-price {
    display: inline-block;
    vertical-align: middle;
    font-size: 1.6rem;
    white-space: nowrap;
    text-align: right;
  }
`;

const SubtotalStyles = styled.div`
  margin-top: 30px;
  text-align: right;
  font-weight: 300;
  .subtotal-title {
    font-size: 1.6em;
    margin-right: 15px;
    text-align: right;
  }
  .subtotal-price {
    font-size: 1.8em;
    display: inline-block;
    text-align: center;
  }
`;

function CartItem({ cartItem }) {
  const { product } = cartItem;
  if (!product) return null;

  return (
    <CartItemStyles>
      <div className="item-remove">
        <button
          type="button"
          title={`Remove ${product.name}`}
          aria-label={`Remove ${product.name}`}
        >
          <span>x</span>
        </button>
      </div>
      <img alt={product.name} src={product.photo.image.publicUrlTransformed} />
      <h3>{product.name}</h3>
      <p>{cartItem.quantity}</p>
      <p
        className="item-price"
        aria-label={`${formatMoney(product.price)}, total price for ${
          product.name
        }"`}
      >
        {formatMoney(product.price * cartItem.quantity)}
      </p>
    </CartItemStyles>
  );
}

CartItem.propTypes = {
  cartItem: PropTypes.object,
};

export default function Cart() {
  const me = useUser();
  if (!me)
    return (
      <EmptyMessageStyles>
        <span>You have nothing in your shopping cart.</span>
        <Link href="/products">
          <span>Continue Shopping</span>
        </Link>
      </EmptyMessageStyles>
    );

  return (
    <CartStyles open>
      <CartTitleStyles>Shopping Cart</CartTitleStyles>

      <CartItemsContainer>
        <div className="cart-item-list-labels">
          <div className="cart-item-list-label text-label">
            <span>Item</span>
          </div>
          <div className="cart-item-list-label photo-placeholder" />
          <div className="cart-item-list-label product-placeholder" />
          <div className="cart-item-list-label text-label quantity-label">
            <span>Quantity</span>
          </div>
          <div className="cart-item-list-label price-label text-label">
            <span>Price</span>
          </div>
        </div>

        {me.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </CartItemsContainer>
      <SubtotalStyles>
        <span className="subtotal-title">Subtotal</span>
        <span className="subtotal-price">
          {formatMoney(calculateTotalPrice(me.cart))}
        </span>
      </SubtotalStyles>
    </CartStyles>
  );
}
