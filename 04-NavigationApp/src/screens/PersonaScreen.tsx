import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect, useRef} from 'react';
import {Button, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {RootStackParams} from '../navigator/StackNavigator';
import {colors, styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

// Manera rapida
// interface RouteParams {
//   id: number;
//   nombre: string;
// }

// Forma sucia
// interface Props extends StackScreenProps<any, any> {}

// Forma buena
interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({navigation, route}: Props) => {
  const {changeName} = useContext(AuthContext);

  //   const params = route.params as RouteParams;
  const params = route.params;

  const userRef = useRef<string>();

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  });
  useEffect(() => {
    if (params.nombre !== userRef.current) {
      userRef.current = params.nombre;
      changeName(params.nombre);
    }
  });
  return (
    <View style={styles.globalMargin}>
      <Text>
        <Icon name="person-outline" size={30} color={colors.primary} />
      </Text>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
      <Button
        title="Volver a pagina 1"
        onPress={() => navigation.navigate('Page1Screen')}
      />
    </View>
  );
};
