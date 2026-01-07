import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Home, Search, ShoppingBag, User } from 'lucide-react-native';

export default function CustomBottomTabBar({ state, descriptors, navigation }) {
  const icons = {
    Home: Home,
    Browse: Search,
    Cart: ShoppingBag,
    Account: User,
  };

  return (
    <View className="flex-row bg-white border-t border-black">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined 
          ? options.tabBarLabel 
          : options.title !== undefined 
          ? options.title 
          : route.name;

        const isFocused = state.index === index;
        const Icon = icons[route.name];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            className="flex-1 items-center justify-center py-3 border-r border-black last:border-r-0"
          >
            <View className={`items-center ${isFocused ? 'border-b-4 border-black pb-1' : ''}`}>
              <Icon 
                size={24} 
                color="black" 
                strokeWidth={isFocused ? 2.5 : 1.5}
              />
              <Text className={`text-xs mt-1 uppercase tracking-wider ${isFocused ? 'font-bold' : 'font-normal'}`}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
