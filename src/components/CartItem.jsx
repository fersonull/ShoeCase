import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Minus, Plus, X } from 'lucide-react-native';

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  const { shoe, size, quantity } = item;

  return (
    <View className="border-b-2 border-black">
      <View className="flex-row p-4">
        {/* Product Image */}
        <View className="w-24 h-24 border-2 border-black mr-4">
          <Image 
            source={{ uri: shoe.image }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>

        {/* Product Info */}
        <View className="flex-1">
          <View className="flex-row justify-between mb-2">
            <View className="flex-1 mr-2">
              <Text className="text-xs font-medium tracking-widest text-gray-500 mb-1">
                {shoe.brand}
              </Text>
              <Text className="text-base font-bold tracking-wide mb-1">
                {shoe.name}
              </Text>
              <Text className="text-sm font-medium tracking-wide">
                Size: {size}
              </Text>
            </View>
            
            {/* Remove Button */}
            <TouchableOpacity 
              onPress={onRemove}
              className="w-8 h-8 items-center justify-center border-2 border-black"
            >
              <X size={16} color="black" strokeWidth={2} />
            </TouchableOpacity>
          </View>

          {/* Quantity and Price */}
          <View className="flex-row justify-between items-center mt-2">
            {/* Quantity Controls */}
            <View className="flex-row items-center border-2 border-black">
              <TouchableOpacity 
                onPress={() => onUpdateQuantity(quantity - 1)}
                className="w-8 h-8 items-center justify-center border-r-2 border-black"
              >
                <Minus size={16} color="black" strokeWidth={2} />
              </TouchableOpacity>
              <Text className="w-10 text-center font-bold">
                {quantity}
              </Text>
              <TouchableOpacity 
                onPress={() => onUpdateQuantity(quantity + 1)}
                className="w-8 h-8 items-center justify-center border-l-2 border-black"
              >
                <Plus size={16} color="black" strokeWidth={2} />
              </TouchableOpacity>
            </View>

            {/* Price */}
            <Text className="text-lg font-bold">
              ${(shoe.price * quantity).toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
