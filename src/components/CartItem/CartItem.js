import React from 'react';
import { CartItemContainer, ItemDetails, Name } from './cartitem.styles';

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} x {price} €
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
