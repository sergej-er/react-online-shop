import React, { useContext, useState } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import './cartdropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems, total } = useContext(CartContext);

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <span className='total'>
        <strong>Total</strong> {total} €
      </span>
      <Button>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
