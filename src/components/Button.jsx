import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function Button({ title, onPress, variant = 'primary', fullWidth = false, disabled = false }) {
  const getButtonStyles = () => {
    if (disabled) {
      return 'bg-gray-300 border-2 border-gray-400';
    }
    
    switch (variant) {
      case 'primary':
        return 'bg-black border-2 border-black';
      case 'secondary':
        return 'bg-white border-2 border-black';
      default:
        return 'bg-black border-2 border-black';
    }
  };

  const getTextStyles = () => {
    if (disabled) {
      return 'text-gray-500';
    }
    
    return variant === 'primary' ? 'text-white' : 'text-black';
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={`py-4 px-6 ${fullWidth ? 'w-full' : ''} ${getButtonStyles()}`}
      activeOpacity={0.8}
    >
      <Text className={`text-center text-base font-bold tracking-widest uppercase ${getTextStyles()}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
