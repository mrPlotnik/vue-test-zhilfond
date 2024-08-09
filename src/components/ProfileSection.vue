<template>
  <article class="profile">

    <div v-if="empty" class="profile__empty">
      <span>Выберите сотрудника, чтобы посмотреть его профиль</span>
    </div>

    <div v-else class="profile__card">
      <div class="profile__card-img">
        <img :src="noImg" alt="No Image">
      </div>
      <div class="profile__card-data">
        <div class="profile__card-data-name">
          <span>{{ user.name }}</span>
        </div>
        <div class="profile__card-data-email">
          <span>E-mail:&nbsp;</span>
          <span>{{ user.email }}</span>
        </div>
        <div class="profile__card-data-phone">
          <span>Phone:&nbsp;</span>
          <span>{{ user.phone }}</span>
        </div>
        <div class="profile__card-data-about">
          <span>О себе:</span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, cumque vel. Sint laboriosam tempore dolor fugit numquam nulla nobis consectetur inventore error ea quam nisi accusantium ipsum magni fugiat dicta molestiae eum, consequatur explicabo suscipit doloribus aspernatur eveniet aliquid. Expedita recusandae, repudiandae eos similique odit vitae cupiditate mollitia quaerat. Quibusdam!</span>
        </div>
      </div>
    </div>

  </article>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import noImg from '@/assets/no-img.png';

const store = useStore();

const user = computed(() => store.state.selectedUser);
const empty = computed(() => Object.entries(user.value).length === 0);
</script>

<style scoped lang="scss">
.profile {
  width: 100%;
  &__empty {
    @include flex-container(column, center, center);
    flex-grow: 1;
    padding: 1em;
    span {
      font-size: 0.85em;
      color: $main-color;
    }
  }

  &__card {
    display: flex;
    padding: 1em;
    &-img {
      display: flex;
      height: fit-content;
      margin-right: 1em;
      border: 1px solid #E0E0E0;
      min-width: 200px;
      max-width: 400px;
      img {
        object-fit: contain;
      }
    }
    &-data  {
      @include flex-container(column);
      width: 100%;
      min-width: 300px;

      &-name {
        margin-bottom: 1em;
        font-weight: 600;
        font-size: 1.15em;
      }

      &-email,
      &-phone,
      &-about {
        margin-bottom: .5em;
        span {
          font-size: .85em;
          &:first-child {
            font-weight: 600;
          }
          &:last-child {
            color: $main-color;
          }
        }
      }

      &-about {
        span {
          &:first-child {
            display: block;
          }
        }
      }
    }
  }
}

</style>
