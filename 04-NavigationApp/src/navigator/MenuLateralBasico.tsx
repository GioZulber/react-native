import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
// import {useWindowDimensions} from 'react-native';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
  // const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        // drawerType: width >= 768 ? 'permanent' : 'front',
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
      }}>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="Settings"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
