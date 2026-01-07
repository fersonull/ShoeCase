import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Home, Search, ShoppingBag, User, X } from 'lucide-react-native';

export default function CustomDrawer(props) {
  const menuItems = [
    { label: 'HOME', icon: Home, route: 'Home' },
    { label: 'BROWSE', icon: Search, route: 'Browse' },
    { label: 'CART', icon: ShoppingBag, route: 'Cart' },
    { label: 'ACCOUNT', icon: User, route: 'Account' },
  ];

  const categories = [
    'RUNNING',
    'LIFESTYLE',
    'BASKETBALL',
    'TRAINING',
    'SKATE',
  ];

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="border-b border-black px-6 py-8">
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <X size={32} color="black" strokeWidth={2} />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1">
        {/* Main Navigation */}
        <View className="border-b border-black">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isFocused = props.state.index === props.state.routes.findIndex(r => r.name === item.route);
            
            return (
              <TouchableOpacity
                key={item.route}
                onPress={() => {
                  props.navigation.navigate(item.route);
                  props.navigation.closeDrawer();
                }}
                className={`flex-row items-center px-6 py-5 border-b border-gray-200 ${isFocused ? 'bg-black' : 'bg-white'}`}
              >
                <Icon size={24} color={isFocused ? 'white' : 'black'} strokeWidth={2} />
                <Text className={`ml-4 text-base font-bold tracking-widest ${isFocused ? 'text-white' : 'text-black'}`}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Categories */}
        <View className="px-6 py-6">
          <Text className="text-xs font-bold tracking-widest text-gray-500 mb-4">
            CATEGORIES
          </Text>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={category}
              className="py-3 border-b border-gray-200"
            >
              <Text className="text-sm font-medium tracking-wide">
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Footer */}
        <View className="px-6 py-6 border-t border-black mt-auto">
          <TouchableOpacity className="py-3">
            <Text className="text-sm font-medium tracking-wide">HELP</Text>
          </TouchableOpacity>
          <TouchableOpacity className="py-3">
            <Text className="text-sm font-medium tracking-wide">SETTINGS</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
