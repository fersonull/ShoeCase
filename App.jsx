import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { CartProvider } from './src/context/CartContext';
import './global.css';

export default function App() {
  return (
    <CartProvider>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <AppNavigator />
    </CartProvider>
  );
}
