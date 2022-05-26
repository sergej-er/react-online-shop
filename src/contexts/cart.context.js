import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => null,
  isOpen: null,
  setOpen: () => null,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState();
  const [isOpen, setOpen] = useState(false);
  const value = {
    cartItems,
    setCartItems,
    isOpen,
    setOpen,
  };

  // useEffect(() => {
  //   const unsubscribe = () => {
  //     setProducts(shopData);
  //   };

  //   return unsubscribe;
  // }, []);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
