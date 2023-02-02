import {useState, useEffect} from 'react';
import movieDb from '../api/movieDB';
import {Cast, CreditsResponse} from '../interfaces/credits';
import {MovieFull} from '../interfaces/movieInterface';
interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });
  const getMovieDetails = async () => {
    const movieDetailsPromise = movieDb.get<MovieFull>(`/${movieId}`);
    const castPromise = movieDb.get<CreditsResponse>(`/${movieId}/credits`);

    const [movieDetailsResp, castPromiseResp] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);
    setState({
      isLoading: false,
      movieFull: movieDetailsResp.data,
      cast: castPromiseResp.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);
  return {
    ...state,
  };
};
