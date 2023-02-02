import React from 'react';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  // DrawerItem,
  // DrawerItemList,
} from '@react-navigation/drawer';
import {Tabs} from './Tabs';
import {SettingsScreen} from '../screens/SettingsScreen';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles, colors} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        // drawerType: width >= 768 ? 'permanent' : 'front',
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
      }}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen
        name="Tabs"
        // options={{title: 'Home'}}
        component={Tabs}
      />
      <Drawer.Screen
        name="SettingsScreen"
        // options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

const MenuInterno = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png',
          }}
          style={styles.avatar}
        />
      </View>
      {/* <DrawerItemList {...props} /> */}
      {/* <DrawerItem
        label={'Anda mal'}
        onPress={() => props.navigation.navigate('StackScreenNavigator')}
      /> */}

      {/* {PARTE DEL AVATAR } */}

      {/* {Opciones de menú } */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Tabs')}
          style={styles.menuButton}>
          <Text>
            <Icon
              name="navigate-circle-sharp"
              size={30}
              color={colors.primary}
            />
          </Text>
          <Text style={styles.menuText}>Navegacion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('SettingsScreen')}
          style={styles.menuButton}>
          <Text>
            <Icon name="settings-sharp" size={30} color={colors.primary} />
          </Text>
          <Text style={styles.menuText}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
