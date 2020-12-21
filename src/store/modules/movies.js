import api from '@/api';

export default {
  namespaced: true,
  state: {
    movies: [],
    loading: true,
  },
  getters: {
    getAllMovies: state => state.movies,
    getLoading: state => state.loading,
    getMovieById: state => id => state.movies.find(movie => movie.id === +id),
  },
  mutations: {
    setMovies: (state, movies) => {
      state.movies = movies;
    },
    setLoading: (state, loading) => {
      state.loading = loading;
    },
  },
  actions: {
    fetchMovies: async ({commit}) => {
      commit('setMovies', []);
      commit('setLoading', true);

      const {data} = await api.fetchMovies();

      commit('setMovies', data);
      commit('setLoading', false);
    },
  },
};