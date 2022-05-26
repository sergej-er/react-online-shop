import React, { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../ProductCard/ProductCard';
import './shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default Shop;
