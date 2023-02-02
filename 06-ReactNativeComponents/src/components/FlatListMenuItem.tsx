import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {MenuItem} from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  const navigation = useNavigation();
  //   const setRoute = () => {
  //     switch (menuItem.component) {
  //       case 'Animation101Screen':
  //         return 'Animation101Screen';

  //       case 'Animation102Screen':
  //         return 'Animation102Screen';

  //       default:
  //         return 'HomeScreen';
  //     }
  //   };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(menuItem.component as any)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color="#5856d6" size={23} />
        <Text style={styles.itemText}>
          {menuItem.name} - {menuItem.icon}{' '}
        </Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-forward-outline" color="gray" size={23} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 5,
  },
  //   arrowIcon: {
  //     position: 'absolute',
  //     right: 5,
  //   },
});
