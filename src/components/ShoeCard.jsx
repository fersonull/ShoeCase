import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function ShoeCard({ shoe, onPress }) {
  return (
    <TouchableOpacity 
      onPress={onPress}
      className="w-64 mr-4 border-2 border-black bg-white"
      activeOpacity={0.8}
    >
      <View className="aspect-square border-b-2 border-black overflow-hidden">
        <Image 
          source={{ uri: shoe.image }}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>
      
      <View className="p-4">
        <Text className="text-xs font-medium tracking-widest text-gray-500 mb-1">
          {shoe.brand}
        </Text>
        <Text className="text-base font-bold tracking-wide mb-2">
          {shoe.name}
        </Text>
        <Text className="text-lg font-bold">
          ${shoe.price.toFixed(2)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
