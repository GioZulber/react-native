/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  text: string;
  color?: string;
  buttonWidth?: boolean;
  action: (stringNumber: string) => void;
}

export const ButtonCalc = ({
  text,
  color = '#2D2D2D',
  buttonWidth = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: buttonWidth ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.textButton,
            color: color === '#9b9b9b' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
