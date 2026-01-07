import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert} from 'react-native';
import { Menu, ShoppingBag } from 'lucide-react-native';
import Button from '../components/Button';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CartScreen({ navigation }) {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();

  const handleCheckout = () => {
    Alert.alert(
      'Order Successful',
      'Thank you for your purchase!',
      [
        {
          text: 'OK',
          onPress: () => {
            clearCart(); 
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4 border-b-2 border-black">
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Menu size={28} color="black" strokeWidth={2} />
        </TouchableOpacity>

        <Text className="text-xl font-bold tracking-widest">
          CART
        </Text>

        <View className="w-7" />
      </View>

      {cartItems.length === 0 ? (
        <View className="flex-1 items-center justify-center px-6">
          <ShoppingBag size={80} color="black" strokeWidth={1.5} />
          <Text className="text-2xl font-bold tracking-widest mt-6 mb-3">
            CART EMPTY
          </Text>
          <Text className="text-sm text-gray-500 text-center mb-8 tracking-wide">
            Your cart is waiting to be filled with amazing shoes.
          </Text>
          <Button
            title="START SHOPPING"
            onPress={() => navigation.navigate('Home')}
            variant="primary"
          />
        </View>
      ) : (
        <>
          <ScrollView className="flex-1">
            {cartItems.map((item, index) => (
              <CartItem
                key={`${item.shoe.id}-${item.size}-${index}`}
                item={item}
                onUpdateQuantity={(newQuantity) =>
                  updateQuantity(item.shoe.id, item.size, newQuantity)
                }
                onRemove={() => removeFromCart(item.shoe.id, item.size)}
              />
            ))}

            {/* Spacer for fixed checkout button */}
            <View className="h-48" />
          </ScrollView>

          {/* Cart Summary - Fixed at bottom */}
          <View className="absolute bottom-0 left-0 right-0 bg-white border-t-2 border-black">
            <View className="px-6 py-4">
              <View className="flex-row justify-between mb-2">
                <Text className="text-sm font-medium tracking-wide">
                  SUBTOTAL
                </Text>
                <Text className="text-sm font-bold">
                  ${getCartTotal().toFixed(2)}
                </Text>
              </View>
              <View className="flex-row justify-between mb-4 pb-4 border-b-2 border-gray-200">
                <Text className="text-sm font-medium tracking-wide">
                  SHIPPING
                </Text>
                <Text className="text-sm font-bold">
                  FREE
                </Text>
              </View>
              <View className="flex-row justify-between mb-4">
                <Text className="text-lg font-bold tracking-widest">
                  TOTAL
                </Text>
                <Text className="text-lg font-bold">
                  ${getCartTotal().toFixed(2)}
                </Text>
              </View>
              <Button
                title="CHECKOUT"
                onPress={handleCheckout}
                variant="primary"
                fullWidth
              />
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}
