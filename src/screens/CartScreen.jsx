import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Menu, ShoppingBag } from 'lucide-react-native';
import Button from '../components/Button';

export default function CartScreen({ navigation }) {
  // Mock empty cart for now
  const cartItems = [];

  return (
    <View className="flex-1 bg-white">
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
        <ScrollView className="flex-1">
          {/* Cart items would go here */}
        </ScrollView>
      )}
    </View>
  );
}
