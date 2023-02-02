import React from 'react';
import {View, Text, Button, Modal, StyleSheet} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {useState} from 'react';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal Screen" />
      <Button
        title="Abrir modal"
        onPress={() => {
          setIsVisible(true);
        }}
      />
      <Modal animationType="fade" visible={isVisible} transparent>
        {/* Background negro */}
        <View style={stylesLocal.modalContainer}>
          {/* Contenido del modal */}
          <View style={stylesLocal.modalContent}>
            <HeaderTitle title="Modal" />
            <Text style={stylesLocal.modalContentText}>Cuerpo del modal</Text>
            <Button title="Cerrar" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const stylesLocal = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    width: 350,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    elevation: 10,
    borderRadius: 5,
  },
  modalContentText: {
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 20,
  },
  //   modalContentCloseButton: {
  //     width: '100%',
  //   },
});
