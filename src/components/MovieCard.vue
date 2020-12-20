<template>
  <div class="card">
    <div class="card__poster">
      <img :src="movie.poster" alt="poster">
    </div>
    <div class="card__info">
      <router-link v-if="isLink" :to="`/${movie.id}`" class="card__title">{{ movie.title }}</router-link>
      <div v-else class="card__title">{{ movie.title }}</div>
      <div v-if="movie.year || movie.genres" class="card__year-genre card__subheader">{{ `${movie.year}, ${genres}` }}</div>
      <div v-if="movie.directors" class="card__director card__subheader"><span>Режиссёр:</span>{{ directors }}</div>
      <div v-if="movie.actors" class="card__actors"><span class="card__subheader">Актеры:</span>{{ actors }}</div>
      <div v-if="movie.description" class="card__description">{{ movie.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object,
    isLink: {
      type: Boolean,
    },
  },
  computed: {
    actors() {
      return this.movie.actors.join(', ');
    },
    directors() {
      return this.movie.directors.join(', ');
    },
    genres() {
      return this.movie.genres.join(', ');
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 1400px;
  margin: 12px 0;
  display: flex;
  background: #4D4747;


  &__poster {
    width: 168px;
    min-width: 168px;
    max-width: 168px;
    background: #c4c4c4;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-height: 168px;
      max-width: 168px;
    }
  }

  &__info {
    padding: 32px 0 32px 24px;
  }

  a {
    display: inline-block;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #FF5252;
    }
  }

  &__title {
    font-weight: bold;
    font-size: 36px;
    line-height: 36px;
    color: #fff;
  }

  &__subheader {
    color: #988F8F;
    font-size: 12px;
    line-height: 12px;
    text-transform: uppercase;
    font-weight: bold;
  }

  &__year-genre {
    padding-top: 12px;
  }

  &__director {
    padding-top: 8px;

    span {
      padding-right: 5px;
    }
  }

  &__actors {
    padding-top: 8px;
    font-size: 12px;
    line-height: 16px;
    color: #e5e5e5;
    display: flex;

    span {
      padding-top: 2px;
      padding-right: 5px;
    }

  }

  &__description {
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    padding-top: 14px;
  }
}
</style>
