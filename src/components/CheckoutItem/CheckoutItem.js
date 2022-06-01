import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {
  Arrow,
  CheckoutItemContainer,
  CheckoutItemDetail,
  ImageContainer,
  Quantity,
  RemoveButton,
  Value,
} from './checkoutitem.styles';

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
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <CheckoutItemDetail>{name}</CheckoutItemDetail>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <CheckoutItemDetail>{price}</CheckoutItemDetail>
      <br />
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
      <br />
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
