import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {MoviePoster} from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View
      style={{
        ...styles.flatListContainer,
        height: {title} ? 300 : 330,
      }}>
      {title && <Text style={styles.flatListTitle}>{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <MoviePoster movie={item} width={140} height={250} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  flatListContainer: {
    height: 300,
  },
  flatListTitle: {fontSize: 30, fontWeight: 'bold'},
});
