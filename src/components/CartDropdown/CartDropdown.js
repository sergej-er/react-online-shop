import React, { Fragment, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
  Total,
} from './cartdropdown.styles';

const CartDropdown = () => {
  const { cartItems, total } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <Fragment>
      <CartDropdownContainer>
        <CartItems>
          {cartItems.length !== 0 ? (
            cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
          ) : (
            <EmptyMessage>Your cart is empty.</EmptyMessage>
          )}
        </CartItems>
        <Total>
          <strong>Total</strong> {total} €
        </Total>
        <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
      </CartDropdownContainer>
    </Fragment>
  );
};

export default CartDropdown;
