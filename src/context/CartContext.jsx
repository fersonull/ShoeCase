import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (shoe, size) => {
    const existingItemIndex = cartItems.findIndex(
      item => item.shoe.id === shoe.id && item.size === size
    );

    if (existingItemIndex !== -1) {
      // Item exists, increase quantity
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      // New item, add to cart
      setCartItems([...cartItems, { shoe, size, quantity: 1 }]);
    }
  };

  const removeFromCart = (shoeId, size) => {
    setCartItems(cartItems.filter(
      item => !(item.shoe.id === shoeId && item.size === size)
    ));
  };

  const updateQuantity = (shoeId, size, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(shoeId, size);
      return;
    }

    const updatedCart = cartItems.map(item =>
      item.shoe.id === shoeId && item.size === size
        ? { ...item, quantity: newQuantity }
        : item
    );
    setCartItems(updatedCart);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.shoe.price * item.quantity);
    }, 0);
  };

  const getCartItemsCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        getCartItemsCount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
