import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {HomeScreen} from './src/screens/HomeScreen';
import {Navigator} from './src/navigator/Navigator';

export const App = () => {
  return (
    <NavigationContainer>
      <Navigator />

      {/* <HomeScreen /> */}
    </NavigationContainer>
  );
};
