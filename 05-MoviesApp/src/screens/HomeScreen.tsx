import React, {useContext} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {GradientBackground} from '../components/GradientBackground';
import {HorizontalSlider} from '../components/HorizontalSlider';

import {MoviePoster} from '../components/MoviePoster';
import {getImageColors} from '../helpers/getColors';
import {useMovies} from '../hooks/useMovies';
import {GradientContext} from '../context/GradientContext';
import {useEffect} from 'react';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {nowPlaying, popular, upcoming, topRated, isLoading} = useMovies();

  const {top} = useSafeAreaInsets();

  const {setMainColors} = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const [primary, secondary] = await getImageColors(uri);

    setMainColors({primary, secondary});
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying]);

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          <View style={styles.carouselContainer}>
            {/* {Carousel Principal} */}
            <Carousel
              data={nowPlaying}
              renderItem={({item}: any) => <MoviePoster movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>
          {/* Peliculas populares */}
          <HorizontalSlider title={'Proximamente'} movies={upcoming} />
          <HorizontalSlider title={'Mejores Valoradas'} movies={topRated} />
          <HorizontalSlider title={'Populares'} movies={popular} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    height: 500,
  },
  loaderContainer: {flex: 1, justifyContent: 'center', alignContent: 'center'},
});
