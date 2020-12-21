<template>
  <div class="return">
    <div class="return__link">
      <router-link to="/">
        <img src="../assets/arrow.png" alt="arrow back">
        Назад к списку
      </router-link>
    </div>
    <div class="divider"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/vars";

.return {
  padding-top: 40px;
  padding-bottom: 28px;

  &__link {
    display: flex;

    a {
      width: 175px;
      height: 24px;
      display: flex;
      justify-content: space-between;
      font-size: 20px;
      line-height: 20px;
      color: $light-red;
      text-decoration: underline;
      margin-bottom: 20px;

      &:hover {
        color: lighten($light-red, 10);
      }
    }
  }

  .divider {
    width: 1400px;
    border: .5px solid $card-img-bg-color;
  }
}
</style>