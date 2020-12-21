<template>
  <div class="control">
    <div class="control__title">Фильмы</div>
    <div class="filter">

      <label class="filter__item">
        <input v-model="sortByName" @click="isName" type="checkbox">
        <span class="checkmark"></span>
        <span>Отсортировать по названию</span>
      </label>

      <label class="filter__item">
        <input v-model="sortByYear" @click="isYear" type="checkbox">
        <span class="checkmark"></span>
        <span>Отсортировать по году</span>
      </label>

    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
export default {
  props: {
    sortByName: {
      type: Boolean,
    },
    sortByYear: {
      type: Boolean,
    },
  },
  methods: {
    isName() {
      this.$emit('changeSortByName', !this.sortByName);
    },
    isYear() {
      this.$emit('changeSortByYear', !this.sortByYear);
    },
  },
}
;
</script>

<style lang="scss" scoped>
@import "../scss/vars";

.control {
  background: $main-bg-color;
  position: fixed;
  top: 100px;
  padding-top: 40px;
  padding-bottom: 28px;
  z-index: 1;

  &__title {
    font-weight: 500;
    font-size: 32px;
    line-height: 32px;
    color: $white;
    padding-bottom: 16px;
  }

  .filter {
    display: flex;

    span {
      font-size: 16px;
      line-height: 16px;
      color: $card-img-bg-color;
    }

    &__item {
      display: block;
      position: relative;
      padding-left: 30px;
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
      height: 17px;
      width: 17px;
      background-color: #363232;
      border: 1px solid $card-img-bg-color;
    }

    &__item:hover input ~ .checkmark {
      background-color: #4D4747;
    }

    &__item input:checked ~ .checkmark {
      background-color: $light-red;
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
      border: 1px solid $light-red;
    }

    &__item .checkmark:after {
      left: 4px;
      top: -2px;
      width: 5px;
      height: 13px;
      border: solid $white;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }

  .divider {
    width: 1400px;
    border: .5px solid $card-img-bg-color;
  }
}

</style>
