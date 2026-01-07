import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Menu, ShoppingCart, Search, X } from 'lucide-react-native';
import ShoeCard from '../components/ShoeCard';
import shoesData from '../data/shoes.json';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BrowseScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['ALL', 'RUNNING', 'LIFESTYLE', 'CASUAL', 'TENNIS', 'SKATE'];

  const filteredProducts = useMemo(() => {
    let filtered = shoesData;

    if (selectedCategory !== 'ALL') {
      filtered = filtered.filter(
        shoe => shoe.category.toUpperCase() === selectedCategory
      );
    }

    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        shoe =>
          shoe.name.toLowerCase().includes(query) ||
          shoe.brand.toLowerCase().includes(query) ||
          shoe.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  return (
    <SafeAreaView className="flex-1 bg-white">
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
        
        <View className="px-6 pb-4">
          <View className="flex-row items-center border-2 border-black">
            <View className="flex-row items-center flex-1 px-4 py-3">
              <Search size={20} color="black" strokeWidth={2} />
              <TextInput
                className="flex-1 ml-3 text-sm tracking-wide"
                placeholder="Search shoes..."
                placeholderTextColor="#9CA3AF"
                value={searchQuery}
                onChangeText={setSearchQuery}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            {searchQuery.length > 0 && (
              <TouchableOpacity
                onPress={() => setSearchQuery('')}
                className="px-4 py-3 border-l-2 border-black"
              >
                <X size={20} color="black" strokeWidth={2} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>

      <ScrollView className="flex-1">
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

        <View className="px-6 py-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-sm font-bold tracking-widest text-gray-500">
              {filteredProducts.length} PRODUCTS
            </Text>
            {(selectedCategory !== 'ALL' || searchQuery.length > 0) && (
              <TouchableOpacity 
                onPress={() => {
                  setSelectedCategory('ALL');
                  setSearchQuery('');
                }}
                className="px-4 py-2 border border-black"
              >
                <Text className="text-xs font-bold tracking-wider">
                  CLEAR ALL
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
              <Text className="text-sm text-gray-500 tracking-wide text-center px-6">
                {searchQuery.length > 0 
                  ? `No results found for "${searchQuery}"`
                  : 'No items found in this category'
                }
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
