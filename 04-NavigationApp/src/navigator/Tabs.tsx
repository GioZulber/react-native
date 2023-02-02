import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform, Text} from 'react-native';

import {Tab1Screen} from '../screens/Tab1Screen';
// import {Tab2Screen} from '../screens/Tab2Screen';
import {colors, styles} from '../theme/appTheme';
import {StackNavigator} from './StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {TopTabNavigator} from './TopTapNavigator';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabIOS = createBottomTabNavigator();

//IOS ONLY

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      // sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colors.primary,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen': {
              iconName = 'md-home';
              break;
            }
            case 'Tab2Screen': {
              iconName = 'bookmark-sharp';
              break;
            }
            case 'StackNavigator': {
              iconName = 'logo-stackoverflow';

              break;
            }

            default:
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <BottomTabAndroid.Screen
        name="Tab1Screen"
        component={Tab1Screen}
        options={{
          title: 'Home Screen',
        }}
      />
      <BottomTabAndroid.Screen
        name="Tab2Screen"
        options={{
          title: 'TAB2',
        }}
        component={TopTabNavigator}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        options={{
          title: 'Stack',
        }}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={styles.tabContainerStyle}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen': {
              iconName = 'md-home';
              break;
            }
            case 'Tab2Screen': {
              iconName = 'bookmark-sharp';
              break;
            }
            case 'StackNavigator': {
              iconName = 'logo-stackoverflow';

              break;
            }

            default:
              break;
          }
          return <Icon name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        headerStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
      })}
      // screenOptions={{
      //   tabBarActiveTintColor: colors.primary,
      //   headerStyle: {
      //     borderTopColor: colors.primary,
      //     borderTopWidth: 0,
      //     elevation: 0,
      //   },
      //   tabBarLabelStyle: {
      //     fontSize: 15,
      //   },
      // }}
    >
      <BottomTabIOS.Screen
        name="Tab1Screen"
        component={Tab1Screen}
        options={{
          title: 'Home Screen',
        }}
      />
      <BottomTabIOS.Screen
        name="Tab2Screen"
        options={{
          title: 'TAB2',
        }}
        component={TopTabNavigator}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{
          title: 'Stack',
        }}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};
