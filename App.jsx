import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { CartProvider } from './src/context/CartContext';
import './global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaProvider>
      
    <CartProvider>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <AppNavigator />
    </CartProvider>
    </SafeAreaProvider>
  );
}
