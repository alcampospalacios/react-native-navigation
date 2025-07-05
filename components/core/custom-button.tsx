import React from 'react';
import { Pressable, PressableProps, Text } from 'react-native';

interface Props extends PressableProps {
  children: string;
  color?: 'primary' | 'secondary' | 'tertiary';
  classname?: string;
}

const CustomButton = ({ children, color = 'primary', onPress, onLongPress, className }: Props) => {
  const btnColor = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
  }[color];

  return (
    <Pressable
      className={`p-3 rounded-md ${btnColor} active:opacity-90  ${className}`}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text className="text-white text-center">{children}</Text>
    </Pressable>
  );
};

export default CustomButton;
