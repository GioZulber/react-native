import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Cast} from '../interfaces/credits';
import {MovieFull} from '../interfaces/movieInterface';
import currencyFormatter from 'currency-formatter';
import {CastItem} from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      {/* Details */}
      <View style={styles.detailContainer}>
        <View style={styles.voteContainer}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text> {movieFull.vote_average}</Text>
          <Text style={styles.genres}>
            -{movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>
        {/* Historia */}
        <Text style={styles.title}>Historia</Text>
        <Text style={styles.text}>{movieFull.overview}</Text>
        <Text style={styles.title}>Presupuesto</Text>
        <Text style={styles.text}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
      </View>
      {/* Casting */}
      <View style={styles.castContainer}>
        <Text style={{...styles.title, marginHorizontal: 20}}>Actores</Text>

        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10, height: 70}}
        />
        {/* <CastItem actor={cast[0]} /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    marginHorizontal: 20,
  },
  voteContainer: {
    flexDirection: 'row',
  },
  genres: {
    marginLeft: 6,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
  castContainer: {
    marginTop: 10,
    marginBottom: 100,
  },
});
