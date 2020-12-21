<template>
  <div class="movie-list">
    <Control
        :sortByName="sortByName"
        :sortByYear="sortByYear"
        @changeSortByName="setNameFilter"
        @changeSortByYear="setYearFilter"
    />
    <Loader v-if="getLoading"/>
    <MovieCard
        v-else
        isLink
        v-for="movie of getAllMovies"
        :key="movie.id"
        :movie="movie"
    />
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import MovieDetails from '@/views/MovieDetails';
import MovieCard from '@/components/MovieCard';
import Control from '@/components/Control';
import Loader from '@/components/Loader';

export default {
  data() {
    return {
      sortByName: false,
      sortByYear: false,
    };
  },
  name: 'App',

  components: {
    Control,
    MovieDetails,
    MovieCard,
    Loader,
  },
  computed: {
    ...mapGetters('movies', ['getAllMovies', 'getLoading']),
  },
  methods: {
    ...mapActions('movies', ['fetchMovies']),
    setNameFilter(value) {
      this.sortByName = value;
    },
    setYearFilter(value) {
      this.sortByYear = value;
    },
  },
  async mounted() {
    await this.fetchMovies();
  },
  watch: {
    sortByName(value) {
      if (value) {
        this.getAllMovies.sort((a, b) => a.title.localeCompare(b.title));
        this.sortByYear = false;
      }
    },
    sortByYear(value) {
      if (value) {
        this.getAllMovies.sort((a, b) => a.year - b.year);
        this.sortByName = false;
      }
    },
  },
};

</script>

<style lang="scss" scoped>
@import "../scss/vars";

.movie-list {
  //background: $main-bg-color;
  padding-top: 157px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
}

.card:hover {
  margin-bottom: 20px;
  margin-top: 4px;
  box-shadow: 0 8px 20px $card-shadow;
  transition: all .5s;
}

</style>