import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { ShoppingCart, Menu } from 'lucide-react-native';
import ShoeCard from '../components/ShoeCard';
import Button from '../components/Button';
import shoesData from '../data/shoes.json';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen({ navigation }) {
  const heroImage = 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1200';

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4 border-b-2 border-black">
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Menu size={28} color="black" strokeWidth={2} />
        </TouchableOpacity>
        
        <Text className="text-2xl font-bold tracking-widest">
          SHOECASE
        </Text>
        
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <ShoppingCart size={28} color="black" strokeWidth={2} />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1">
        {/* Hero Section */}
        <View className="relative border-b-2 border-black">
          <Image 
            source={{ uri: heroImage }}
            className="w-full h-96"
            resizeMode="cover"
          />
          <View className="absolute inset-0 bg-black/30 items-center justify-center">
            <Text className="text-white text-4xl font-bold tracking-widest mb-6">
              NEW SEASON
            </Text>
            <Button 
              title="SHOP NOW"
              onPress={() => navigation.navigate('Browse')}
              variant="primary"
            />
          </View>
        </View>

        {/* New Arrivals Section */}
        <View className="py-8">
          <View className="flex-row items-center justify-between px-6 mb-6">
            <Text className="text-2xl font-bold tracking-widest">
              NEW ARRIVALS
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Browse')}>
              <Text className="text-sm font-bold tracking-wider underline">
                VIEW ALL
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            className="px-6"
          >
            {shoesData.slice(0, 6).map((shoe) => (
              <ShoeCard 
                key={shoe.id}
                shoe={shoe}
                onPress={() => navigation.navigate('ProductDetails', { shoe })}
              />
            ))}
          </ScrollView>
        </View>

        {/* Featured Category */}
        <View className="border-t-2 border-black bg-gray-50">
          <View className="px-6 py-8">
            <Text className="text-2xl font-bold tracking-widest mb-4">
              FEATURED CATEGORY
            </Text>
            <Text className="text-base mb-6 tracking-wide">
              Explore our curated collection of premium running shoes designed for performance and style.
            </Text>
            <Button 
              title="EXPLORE RUNNING"
              onPress={() => navigation.navigate('Browse')}
              variant="secondary"
            />
          </View>
        </View>

        {/* Best Sellers */}
        <View className="py-8">
          <View className="flex-row items-center justify-between px-6 mb-6">
            <Text className="text-2xl font-bold tracking-widest">
              BEST SELLERS
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Browse')}>
              <Text className="text-sm font-bold tracking-wider underline">
                VIEW ALL
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            className="px-6"
          >
            {shoesData.slice(2, 8).map((shoe) => (
              <ShoeCard 
                key={shoe.id}
                shoe={shoe}
                onPress={() => navigation.navigate('ProductDetails', { shoe })}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
