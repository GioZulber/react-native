import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Cast} from '../interfaces/credits';

interface Props {
  actor: Cast;
}
export const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View style={styles.container}>
      {actor.profile_path && <Image source={{uri}} style={styles.actorImage} />}
      <View style={styles.actorInfo}>
        <Text style={styles.actorName}>{actor.name}</Text>
        <Text style={{fontSize: 16, opacity: 0.7}}>{actor.character}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 50,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,
    elevation: 9,
    marginLeft: 20,
    paddingRight: 15,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
  actorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  actorImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
