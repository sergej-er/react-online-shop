import { createContext, useState, useEffect } from 'react';
import { shopData } from '../data/shop-data';

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(shopData);
  const value = {
    products,
    setProducts,
  };

  // useEffect(() => {
  //   const unsubscribe = () => {
  //     setProducts(shopData);
  //   };

  //   return unsubscribe;
  // }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
