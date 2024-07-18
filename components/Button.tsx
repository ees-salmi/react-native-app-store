import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle, TextStyle } from 'react-native';

// Define the type for the Button props
interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

// Define the Button component
const Button: React.FC<ButtonProps> = ({ title, onPress, style, textStyle, ...props }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]} {...props}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

// Define default styles for the Button component
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
