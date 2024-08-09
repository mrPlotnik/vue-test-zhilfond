<template>
  <div class="app__container container">

    <AppHeader />

    <main class="app__main">
      <SideBar />
      <ProfileSection />
    </main>

  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
import SideBar from '@/components/SideBar.vue';
import ProfileSection from '@/components/ProfileSection.vue';

</script>

<style scoped lang="scss">
.app {
  &__container {
    display: flex;
    height: 100vh;
  }
  &__main {
    display: flex;
    flex-grow: 1;
    margin-bottom: 1em;
    border-radius: .5em;
    box-shadow: $box-shadow;
  }
}
</style>
