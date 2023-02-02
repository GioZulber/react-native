import {DrawerScreenProps} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {}

export const Page2Screen = ({navigation}: Props) => {
  const navigator = useNavigation();

  //Esto solo en IOS
  useEffect(() => {
    navigator.setOptions({
      headerBackTitle: 'Atras',
    });
  }, [navigator]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 2</Text>
      <Button
        title="Ir a pagina 3"
        onPress={() => navigation.navigate('Page3Screen')}
      />
    </View>
  );
};
