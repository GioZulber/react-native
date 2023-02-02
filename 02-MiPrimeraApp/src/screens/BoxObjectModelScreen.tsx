import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box object model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  title: {
    fontSize: 20,
    paddingHorizontal: 100,
    paddingVertical: 20,
    borderWidth: 10,
    margin: 10,
  },
});
