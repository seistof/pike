import api from '@/api';

export default {
  namespaced: true,
  state: {
    movie: {},
    loading: true,
  },
  getters: {
    getMovie: state => state.movie,
    getLoading: state => state.loading,
  },
  mutations: {
    setMovie: (state, movie) => {
      state.movie = movie;
    },
    setLoading: (state, loading) => {
      state.loading = loading;
    },
  },
  actions: {
    fetchMovie: async ({commit}, id) => {
      const {data} = await api.fetchMovie(id);

      commit('setMovie', data);
      commit('setLoading', false);
    },
    updateLoading: ({commit}) => {
      commit('setLoading', false);
    },
  },
};