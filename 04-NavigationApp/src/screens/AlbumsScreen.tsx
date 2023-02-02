import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../theme/appTheme';

export const AlbumsScreen = () => {
  const {
    authState: {isLoggedIn},
    logout,
  } = useContext(AuthContext);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Album screen</Text>
      {isLoggedIn && <Button title="Logout" onPress={logout} />}
    </View>
  );
};
