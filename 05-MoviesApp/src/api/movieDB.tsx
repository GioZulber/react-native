import axios from 'axios';

const movieDb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '9a7bbf0a4892bc8ac5c0dc17e7a65dac',
    language: 'es-MX',
  },
});

export default movieDb;
