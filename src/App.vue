<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import MovieList from '@/views/MovieList';
import MovieDetails from '@/views/MovieDetails';
import Header from '@/components/Header';
import MovieCard from '@/components/MovieCard';
import Control from '@/components/Control';

export default {
  name: 'App',
  components: {
    Control,
    MovieList,
    MovieDetails,
    Header,
    MovieCard,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

//$lighter-red: #FF5252;
//$header-color: #FA2828;
//$light-grey: #E5E5E5;
//$card-img-bg-color: #C4C4C4;
//$dark-grey: #988F8F;
//$card-bg-color: #4D4747;
//$main-bg-color: #363232;

* {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>
