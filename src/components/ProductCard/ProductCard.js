import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button, { BUTTON_TYPES } from '../Button/Button';
import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
} from './productcard.styles';

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, imageUrl, price } = product;

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{`${price} €`}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPES.inverted} onClick={addProductToCart}>
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
