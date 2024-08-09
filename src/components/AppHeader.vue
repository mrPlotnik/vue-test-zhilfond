<template>
  <header class="header">
    <div class="header__logo">
      <img :src="logo" alt="Logo">
    </div>
  </header>
</template>

<script setup>
import logo from '@/assets/logo.svg';
</script>

<style scoped lang="scss">
.header {
  margin: 1em 0;
  &__logo {
    @include flex-container(column, center, center);
    width: 170px;
  }
}
</style>
