import React, { useContext } from 'react';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import { CartContext } from '../../contexts/cart.context';
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles';

const Checkout = () => {
  const { cartItems, clearItemFromCart, total } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((item) => {
        return (
          <CheckoutItem
            key={item.id}
            item={item}
            onClearItem={clearItemFromCart}
          />
        );
      })}
      <Total>Total {total} €</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
