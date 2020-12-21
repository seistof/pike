<template>
  <div id="app">
    <header class="header">
      <span>#MOVIENOW</span>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
@import "./scss/vars";

* {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#app {
  height: calc(100vh - 100px);
  margin-top: 100px;
  background: $main-bg-color;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  height: 100px;
  width: 100%;
  background: $header-color;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  span {
    font-weight: bold;
    font-size: 48px;
    line-height: 48px;
    letter-spacing: 0.21em;
    padding-top: 18px;
    padding-right: 5px;

  }
}

</style>
