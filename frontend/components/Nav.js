import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import SignOut from './SignOut';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';
import { useCart } from '../lib/cartState';

function CartElement({ onClick }) {
  return (
    <FontAwesomeIcon onClick={onClick} className="icon" icon={faShoppingCart} />
  );
}
CartElement.propTypes = { onClick: PropTypes.func };

const NavCartStyles = styled.div`
  margin: 0;
  display: block;

  .icon {
    box-sizing: content-box;
    line-height: 1;
    font-size: 1.2em;
    color: var(--green);
    cursor: pointer;
  }
`;

export default function Nav() {
  const user = useUser();
  const { openCart } = useCart();

  return (
    <NavStyles>
      <Link href="/products">products</Link>
      {user && (
        <>
          <Link href="/sell">sell</Link>
          <Link href="/orders">orders</Link>
          <Link href="/account">account</Link>
          <SignOut />
          <NavCartStyles>
            <CartElement onClick={openCart} />
            <div className="icon-cart-quantity" />
          </NavCartStyles>
        </>
      )}
      {!user && (
        <>
          <Link href="/signin">Sign In</Link>
        </>
      )}
    </NavStyles>
  );
}
