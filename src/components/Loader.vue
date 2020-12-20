<template>
  <div>
    <img src="../assets/loader.png" class="loader">
  </div>
</template>

<style scoped>
.loader {
  position: absolute;
  top: calc(50%);
  animation: loading 1.2s linear infinite;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>