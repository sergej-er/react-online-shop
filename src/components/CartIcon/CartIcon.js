import React, { Fragment, useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {
  CartIconContainer,
  ItemCount,
  Icon,
  Backdrop,
} from './carticon.styles';

const CartIcon = () => {
  const { isOpen, setOpen, cartItems } = useContext(CartContext);

  return (
    <Fragment>
      {isOpen && <Backdrop onClick={() => setOpen(false)} />}
      <CartIconContainer onClick={() => setOpen(!isOpen)}>
        <Icon />
        <ItemCount>{cartItems.length}</ItemCount>
      </CartIconContainer>
    </Fragment>
  );
};

export default CartIcon;
