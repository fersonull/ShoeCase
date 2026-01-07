import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Menu, ShoppingCart, Search } from 'lucide-react-native';
import ShoeCard from '../components/ShoeCard';
import shoesData from '../data/shoes.json';

export default function BrowseScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = ['ALL', 'RUNNING', 'LIFESTYLE', 'CASUAL', 'TENNIS', 'SKATE'];

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'ALL') {
      return shoesData;
    }
    return shoesData.filter(
      shoe => shoe.category.toUpperCase() === selectedCategory
    );
  }, [selectedCategory]);

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
              {categories.map((cat) => (
                <TouchableOpacity 
                  key={cat}
                  onPress={() => setSelectedCategory(cat)}
                  className={`px-6 py-3 border-2 border-black ${
                    selectedCategory === cat ? 'bg-black' : 'bg-white'
                  }`}
                  activeOpacity={0.8}
                >
                  <Text className={`text-sm font-bold tracking-wider ${
                    selectedCategory === cat ? 'text-white' : 'text-black'
                  }`}>
                    {cat}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Products Grid */}
        <View className="px-6 py-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-sm font-bold tracking-widest text-gray-500">
              {filteredProducts.length} PRODUCTS
            </Text>
            {selectedCategory !== 'ALL' && (
              <TouchableOpacity 
                onPress={() => setSelectedCategory('ALL')}
                className="px-4 py-2 border border-black"
              >
                <Text className="text-xs font-bold tracking-wider">
                  CLEAR FILTER
                </Text>
              </TouchableOpacity>
            )}
          </View>
          
          {filteredProducts.length > 0 ? (
            <View className="gap-6">
              {filteredProducts.map((shoe) => (
                <ShoeCard 
                  key={shoe.id}
                  shoe={shoe}
                  onPress={() => navigation.navigate('ProductDetails', { shoe })}
                  fullWidth={true}
                />
              ))}
            </View>
          ) : (
            <View className="items-center justify-center py-16 border-2 border-black">
              <Text className="text-xl font-bold tracking-widest mb-2">
                NO PRODUCTS
              </Text>
              <Text className="text-sm text-gray-500 tracking-wide">
                No items found in this category
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
