import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#5856d6',
  // secondary: "#fff
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  botonGrande: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  botonGrandeTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatarContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 20,
    marginHorizontal: 30,
    alignItems: 'center',
  },
  menuButton: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  menuText: {
    fontSize: 20,
  },
  tabContainerStyle: {
    backgroundColor: 'white',
  },
});
