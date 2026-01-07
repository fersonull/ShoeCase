import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Menu, User, ChevronRight } from 'lucide-react-native';

export default function AccountScreen({ navigation }) {
  const menuItems = [
    { label: 'Profile Information', section: 'ACCOUNT' },
    { label: 'Order History', section: 'ACCOUNT' },
    { label: 'Saved Addresses', section: 'ACCOUNT' },
    { label: 'Payment Methods', section: 'ACCOUNT' },
    { label: 'Notifications', section: 'SETTINGS' },
    { label: 'Privacy & Security', section: 'SETTINGS' },
    { label: 'Help & Support', section: 'SUPPORT' },
    { label: 'About', section: 'SUPPORT' },
  ];

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4 border-b-2 border-black">
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Menu size={28} color="black" strokeWidth={2} />
        </TouchableOpacity>
        
        <Text className="text-xl font-bold tracking-widest">
          ACCOUNT
        </Text>
        
        <View className="w-7" />
      </View>

      <ScrollView className="flex-1">
        {/* Profile Section */}
        <View className="items-center py-8 border-b-2 border-black">
          <View className="w-24 h-24 items-center justify-center border-2 border-black mb-4">
            <User size={48} color="black" strokeWidth={1.5} />
          </View>
          <Text className="text-xl font-bold tracking-widest mb-1">
            GUEST USER
          </Text>
          <Text className="text-sm text-gray-500 tracking-wide">
            Sign in to access your account
          </Text>
        </View>

        {/* Menu Items */}
        <View className="py-4">
          {menuItems.map((item, index) => {
            const showSectionHeader = index === 0 || 
              menuItems[index - 1].section !== item.section;
            
            return (
              <View key={item.label}>
                {showSectionHeader && (
                  <View className="px-6 py-3 bg-gray-50">
                    <Text className="text-xs font-bold tracking-widest text-gray-500">
                      {item.section}
                    </Text>
                  </View>
                )}
                <TouchableOpacity 
                  className="flex-row items-center justify-between px-6 py-5 border-b border-gray-200"
                >
                  <Text className="text-base font-medium tracking-wide">
                    {item.label}
                  </Text>
                  <ChevronRight size={20} color="black" strokeWidth={2} />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>

        {/* Sign Out Button */}
        <View className="px-6 py-6">
          <TouchableOpacity className="py-4 border-2 border-black">
            <Text className="text-center text-base font-bold tracking-widest uppercase">
              SIGN IN
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
