import Vue from 'vue';
import Router from 'vue-router';
import MovieList from '@/views/MovieList';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MovieList,
    },
    {
      path: `/:id`,
      component: () => import('./views/MovieDetails'),
    },
  ],
});