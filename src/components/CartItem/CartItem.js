import React from 'react';
import './cartitem.styles.scss';

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={name} />
      <div className='item-details'>
        <h2 className='name'>{name}</h2>
        <span>
          {quantity} x {price} €
        </span>
      </div>
    </div>
  );
};

export default CartItem;
