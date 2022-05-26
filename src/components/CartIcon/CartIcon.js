import React, { useContext } from 'react';
import './carticon.styles.scss';
import { ReactComponent as CartSvg } from '../../assets/cart-icon.svg';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
  const { isOpen, setOpen, cartItems } = useContext(CartContext);

  return (
    <div className='cart-icon-container' onClick={() => setOpen(!isOpen)}>
      <CartSvg className='cart-icon' />
      <span className='item-count'>{cartItems.length}</span>
    </div>
  );
};

export default CartIcon;
