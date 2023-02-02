import React from 'react';
import {
  StyleSheet,
  Animated,
  View,
  ActivityIndicator,
  StyleProp,
  ImageStyle,
} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';
import {useState} from 'react';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style}: Props) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  // ESTE COMPONENTE ES MAS PARA IOS, EN ANDROID SE HACE AUTOMATICAMENTE

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };

  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator
          style={{position: 'absolute'}}
          size={30}
          color="#5856d6"
        />
      )}
      <Animated.Image
        source={{uri}}
        onLoadEnd={finishLoading}
        style={{
          ...(style as any),
          opacity,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
