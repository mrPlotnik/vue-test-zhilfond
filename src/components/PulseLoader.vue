<template>
  <span class="loader"></span>
</template>

<script setup>
</script>

<style scoped lang="scss">
.loader {
  width: 100%;
  height: 4.8px;
  display: inline-block;
  position: relative;
  overflow: hidden;
}
.loader::after {
  content: '';
  width: 96px;
  height: 4.8px;
  background: #6ebeff;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  animation: hitZak 0.6s ease-in-out infinite alternate;
}

@keyframes hitZak {
  0% {
    left: 0;
    transform: translateX(-1%);
  }
  100% {
    left: 100%;
    transform: translateX(-99%);
  }
}

</style>
