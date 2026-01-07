import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { ArrowLeft, ShoppingCart } from 'lucide-react-native';
import Button from '../components/Button';

export default function ProductDetailsScreen({ route, navigation }) {
  const { shoe } = route.params;
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4 border-b-2 border-black">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={28} color="black" strokeWidth={2} />
        </TouchableOpacity>
        
        <Text className="text-lg font-bold tracking-widest">
          PRODUCT
        </Text>
        
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <ShoppingCart size={28} color="black" strokeWidth={2} />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1">
        {/* Product Image */}
        <View className="border-b-2 border-black">
          <Image 
            source={{ uri: shoe.image }}
            className="w-full h-96"
            resizeMode="cover"
          />
        </View>

        {/* Product Info */}
        <View className="px-6 py-6 border-b-2 border-black">
          <Text className="text-xs font-medium tracking-widest text-gray-500 mb-2">
            {shoe.brand}
          </Text>
          <Text className="text-3xl font-bold tracking-wide mb-4">
            {shoe.name}
          </Text>
          <Text className="text-2xl font-bold mb-4">
            ${shoe.price.toFixed(2)}
          </Text>
          <Text className="text-sm tracking-wide text-gray-700 leading-6">
            {shoe.description}
          </Text>
        </View>

        {/* Size Selector */}
        <View className="px-6 py-6 border-b-2 border-black">
          <Text className="text-lg font-bold tracking-widest mb-4">
            SELECT SIZE
          </Text>
          <View className="flex-row flex-wrap gap-3">
            {shoe.sizes.map((size) => (
              <TouchableOpacity
                key={size}
                onPress={() => setSelectedSize(size)}
                className={`w-16 h-16 items-center justify-center border-2 border-black ${
                  selectedSize === size ? 'bg-black' : 'bg-white'
                }`}
                activeOpacity={0.8}
              >
                <Text className={`text-base font-bold ${
                  selectedSize === size ? 'text-white' : 'text-black'
                }`}>
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {!selectedSize && (
            <Text className="text-xs text-gray-500 mt-3 tracking-wide">
              Please select a size
            </Text>
          )}
        </View>

        {/* Product Details */}
        <View className="px-6 py-6">
          <Text className="text-lg font-bold tracking-widest mb-4">
            DETAILS
          </Text>
          <View className="space-y-3">
            <View className="flex-row justify-between py-3 border-b border-gray-200">
              <Text className="text-sm font-medium tracking-wide">Category</Text>
              <Text className="text-sm font-bold tracking-wide">{shoe.category}</Text>
            </View>
            <View className="flex-row justify-between py-3 border-b border-gray-200">
              <Text className="text-sm font-medium tracking-wide">Brand</Text>
              <Text className="text-sm font-bold tracking-wide">{shoe.brand}</Text>
            </View>
            <View className="flex-row justify-between py-3 border-b border-gray-200">
              <Text className="text-sm font-medium tracking-wide">Available Sizes</Text>
              <Text className="text-sm font-bold tracking-wide">{shoe.sizes.length} sizes</Text>
            </View>
          </View>
        </View>

        {/* Spacer for fixed button */}
        <View className="h-24" />
      </ScrollView>

      {/* Add to Cart Button - Fixed at bottom */}
      <View className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-white border-t-2 border-black">
        <Button 
          title="ADD TO CART"
          onPress={() => {
            if (selectedSize) {
              // Add to cart logic here
              navigation.navigate('Cart');
            }
          }}
          variant="primary"
          fullWidth
          disabled={!selectedSize}
        />
      </View>
    </View>
  );
}
