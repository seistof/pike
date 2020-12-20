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
      color: rgba(255, 82, 82, 0.98);
      text-decoration: underline;
      margin-bottom: 20px;

      &:hover {
        color: lighten(rgba(255, 82, 82, 0.98), 10);
      }
    }
  }

  .divider {
    width: 1400px;
    border: .5px solid #c4c4c4;
  }
}
</style>