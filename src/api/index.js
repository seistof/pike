import axios from 'axios';

const host = 'https://floating-sierra-20135.herokuapp.com';

export default {
  fetchMovies: async () => {
    const {data} = await axios.get(`${host}/api/movies`);

    return data;
  },
  fetchMovie: async id => {
    const {data} = await axios.get(`${host}/api/movie/${id}`);

    return data;
  },
};