import Vue from 'vue';
import Vuex from 'vuex';
import movie from './modules/movie';
import movies from './modules/movies';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    movie,
    movies,
  },
});