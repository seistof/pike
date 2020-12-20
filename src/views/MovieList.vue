<template>
  <div class="movie-list">
    <Header/>
    <div class="control">
      <div class="control__title">Фильмы</div>
      <div class="filter">

        <label class="filter__item">
          <input v-model="sortByName" type="checkbox">
          <span class="checkmark"></span>
          <span>Отсортировать по названию</span>
        </label>

        <label class="filter__item">
          <input v-model="sortByYear" type="checkbox">
          <span class="checkmark"></span>
          <span>Отсортировать по году</span>
        </label>

      </div>
      <div class="divider"></div>
    </div>
    <Loader v-if="getLoading"/>
    <MovieCard
        v-else
        :isLink="isLink"
        v-for="movie of getAllMovies"
        :key="movie.id"
        :movie="movie"
    />
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import MovieDetails from '@/views/MovieDetails';
import Header from '@/components/Header';
import MovieCard from '@/components/MovieCard';
import Control from '@/components/Control';
import Loader from '@/components/Loader';

export default {
  data() {
    return {
      isLink: true,
      sortByName: false,
      sortByYear: false,
    };
  },
  name: 'App',

  components: {
    Control,
    MovieDetails,
    Header,
    MovieCard,
    Loader,
  },
  computed: {
    ...mapGetters('movies', ['getAllMovies', 'getLoading']),
  },
  methods: {
    ...mapActions('movies', ['fetchMovies']),
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

.control {
  padding-top: 40px;
  padding-bottom: 28px;

  &__title {
    font-weight: 500;
    font-size: 32px;
    line-height: 32px;
    color: #FFFFFF;
    padding-bottom: 16px;
  }

  .filter {
    display: flex;

    span {
      font-size: 16px;
      line-height: 16px;
      color: #C4C4C4;
    }

    &__item {
      display: block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 22px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      padding-right: 30px;
    }

    &__item input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    .checkmark {
      position: absolute;
      top: 5px;
      left: 0;
      height: 20px;
      width: 20px;
      background-color: #363232;
      border: 1px solid #C4C4C4;
    }

    &__item:hover input ~ .checkmark {
      background-color: #4D4747;
    }

    &__item input:checked ~ .checkmark {
      background-color: #FF5252;
    }

    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    &__item input:checked ~ .checkmark:after {
      display: block;
    }

    &__item input:checked ~ .checkmark {
      border: 1px solid #FF5252;
    }

    &__item .checkmark:after {
      left: 5px;
      top: -1px;
      width: 5px;
      height: 13px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }

  .divider {
    width: 1400px;
    border: .5px solid #c4c4c4;
  }
}

.movie-list {
  background: #363232;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
}

.card:hover {
  margin-bottom: 20px;
  margin-top: 4px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
  transition: all .5s;
}

</style>