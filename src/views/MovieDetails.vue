<template>
  <div class="movie-details">
    <Header/>
    <Return/>
    <Loader v-if="getLoading"/>
    <MovieCard
        v-if="movie"
        :isLink="isLink"
        :movie="movie"
    />
    <div v-else-if="!getLoading" class="movie-details__not-found">
      <span>К сожалению, по вашему запросу ничего не найдено...</span>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Return from '@/components/Return';
import Loader from '@/components/Loader';
import MovieCard from '@/components/MovieCard';
import {mapActions, mapGetters} from 'vuex';

export default {
  data() {
    return {
      isLink: false,
      movie: null,
    };
  },
  computed: {
    ...mapGetters('movie', ['getMovie', 'getLoading']),
    ...mapGetters('movies', ['getMovieById']),
  },
  methods: mapActions('movie', ['fetchMovie', 'updateLoading']),
  async mounted() {
    if (this.getMovieById(this.$route.params.id)) {
      this.updateLoading();
      this.movie = this.getMovieById(this.$route.params.id);
    } else {
      await this.fetchMovie(this.$route.params.id);
      this.movie = this.getMovie;
    }
  },
  components: {
    MovieCard,
    Return,
    Header,
    Loader,
  },
};
</script>

<style lang="scss">
.movie-details {
  position: relative;
  background: #363232;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  &__not-found {
    color: #fff;
    font-weight: 500;
    font-size: 32px;
    line-height: 32px;
    width: 1400px;
    padding-top: 20px;

    span {
      align-self: flex-start;
    }
  }

  .card {
    a {
      cursor: default;
      user-select: none;
    }

    a:hover {
      color: #fff;
    }

  }
}
</style>