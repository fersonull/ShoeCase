import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Menu, ShoppingCart, Search } from 'lucide-react-native';
import ShoeCard from '../components/ShoeCard';
import shoesData from '../data/shoes.json';

export default function BrowseScreen({ navigation }) {
  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="border-b-2 border-black">
        <View className="flex-row items-center justify-between px-6 py-4">
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Menu size={28} color="black" strokeWidth={2} />
          </TouchableOpacity>
          
          <Text className="text-xl font-bold tracking-widest">
            BROWSE
          </Text>
          
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <ShoppingCart size={28} color="black" strokeWidth={2} />
          </TouchableOpacity>
        </View>
        
        {/* Search Bar */}
        <View className="px-6 pb-4">
          <View className="flex-row items-center border-2 border-black px-4 py-3">
            <Search size={20} color="black" strokeWidth={2} />
            <Text className="ml-3 text-sm text-gray-500 tracking-wide">
              Search shoes...
            </Text>
          </View>
        </View>
      </View>

      <ScrollView className="flex-1">
        {/* Categories */}
        <View className="px-6 py-6 border-b-2 border-black">
          <Text className="text-sm font-bold tracking-widest text-gray-500 mb-4">
            CATEGORIES
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row gap-3">
              {['ALL', 'RUNNING', 'LIFESTYLE', 'BASKETBALL', 'TRAINING'].map((cat) => (
                <TouchableOpacity 
                  key={cat}
                  className="px-6 py-3 border-2 border-black bg-white"
                >
                  <Text className="text-sm font-bold tracking-wider">
                    {cat}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Products Grid */}
        <View className="px-6 py-6">
          <Text className="text-sm font-bold tracking-widest text-gray-500 mb-4">
            {shoesData.length} PRODUCTS
          </Text>
          <View className="flex-row flex-wrap justify-between">
            {shoesData.map((shoe) => (
              <View key={shoe.id} className="w-full mb-6">
                <ShoeCard 
                  shoe={shoe}
                  onPress={() => navigation.navigate('ProductDetails', { shoe })}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
