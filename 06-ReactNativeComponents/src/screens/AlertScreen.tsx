import React from 'react';
import {Button, View, Alert} from 'react-native';
import prompt from 'react-native-prompt-android';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Titulo',
      'Este es el mensaje de la alerta',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel pressed'),
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: () => console.log('Ok pressed'),
        },
      ],
      // Esto es para apretar en algun lugar de la pantalla y saltear la alerta
      // {
      //   cancelable: true,
      //   onDismiss: () => console.log('On dismiss'),
      // },
    );
  };

  const showPrompt = () => {
    //Esto solo en IOS
    // Alert.prompt(
    //   '¿Esta seguro?',
    //   'Esta accion no se puede revertir',
    //   (valor: string) => console.log('info: ', valor),
    //   'default',
    // );
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'testaeando',
        placeholder: 'Ingrese su contaseña',
      },
    );
  };
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alert Screen" />

      <Button title="Mostrar Alerta" onPress={showAlert} />

      <View style={{height: 10}} />
      <Button title="Mostrar Prompt" onPress={showPrompt} />
    </View>
  );
};

// const styles = StyleSheet.create({});
