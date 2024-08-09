<template>
  <header class="header">
    <div class="header__logo">
      <img :src="logo" alt="Logo">
    </div>
    <div class="header__user">
      <span>Пользователь</span>
    </div>
  </header>
</template>

<script setup>
import logo from '@/assets/logo.svg';
</script>

<style scoped lang="scss">
.header {
  @include flex-container(row, space-between);
  margin: 1em 0;
  &__logo {
    @include flex-container(column, center, center);
    width: 170px;
  }
  &__user {
    @include flex-container(row, center, center);
    color: $title-color;
  }
}
</style>
