import { createContext, useState } from 'react';

const addCartItem = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find((item) => item.id === itemToAdd.id);
  if (existingItem) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => null,
  total: null,
  updateTotal: () => null,
  isOpen: null,
  setOpen: () => null,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [total, setTotal] = useState(0);

  const addItemToCart = (itemToAdd) => {
    setCartItems(addCartItem(cartItems, itemToAdd));
    updateTotal(itemToAdd);
  };

  const updateTotal = (item) => {
    setTotal(total + item.price);
  };

  const value = {
    cartItems,
    addItemToCart,
    isOpen,
    setOpen,
    total,
    updateTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
