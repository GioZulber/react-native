import {useEffect, useState} from 'react';
import movieDb from '../api/movieDB';
import {Movie, MovieDbMoviesResponse} from '../interfaces/movieInterface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    const nowPlayingPromise =
      movieDb.get<MovieDbMoviesResponse>('/now_playing');
    const popularPromise = movieDb.get<MovieDbMoviesResponse>('/popular');
    const topRatedPromise = movieDb.get<MovieDbMoviesResponse>('/top_rated');
    const upcomingPromise = movieDb.get<MovieDbMoviesResponse>('/upcoming');

    const res = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);

    setMoviesState({
      nowPlaying: res[0].data.results,
      popular: res[1].data.results,
      topRated: res[2].data.results,
      upcoming: res[3].data.results,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    // now playing
    getMovies();
  }, []);
  return {
    ...moviesState,
    isLoading,
  };
};
