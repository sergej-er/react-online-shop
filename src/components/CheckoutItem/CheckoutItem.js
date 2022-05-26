import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkoutitem.styles.scss';

const CheckoutItem = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => {
    addItemToCart(item);
  };

  const removeItemHandler = () => {
    removeItemFromCart(item);
  };

  const clearItemHandler = () => {
    clearItemFromCart(item);
  };

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <br />
      <div className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </div>
      <br />
    </div>
  );
};

export default CheckoutItem;
