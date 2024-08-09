<template>
  <TransitionGroup name="list">
    <div
      v-for="user in props.users"
      :key="user.id"
    >
      <div
        class="card__wrap"
        role="button"
        tabindex="0"
        @click="cardClick(user.id)"
        @keypress="cardClick(user.id)"
      >
        <div class="card__img">
          <img :src="noImg" alt="No Image">
        </div>
        <div class="card__data">
          <span class="card__username">{{ user.username }}</span>
          <span class="card__email">{{ user.email }}</span>
        </div>
      </div>
    </div>
  </TransitionGroup>
</template>

<script setup>
import { defineProps } from 'vue';
import { useStore } from 'vuex';
import noImg from '@/assets/no-img.png';

const store = useStore();

const props = defineProps(['users']);

const cardClick = (id) => {
  store.commit('SET_SELECTED_USER', id);
};

</script>

<style scoped lang="scss">

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.card {
  &__wrap {
    display: flex;
    height: 70px;
    margin-bottom: 1em;
    border-radius: .5em;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .1);
    transition: all .2s ease;
    &:hover,
    &:focus-visible {
      cursor: pointer;
      outline: none;
      box-shadow: 0px 0px 0px 1px #E0E0E0;
      .card-data {
        background-color: #E0E0E0;
      }
    }
  }
  &__img {
    display: flex;
    flex-shrink: 0;
    width: 70px;
    border-top-left-radius: .5em;
    border-bottom-left-radius: .5em;
    border-right: 1px solid #DEDEDD;
    img {
      object-fit: contain;
    }
  }
  &__data {
    @include flex-container(column, center);
    width: 100%;
    padding: 0 1em;
    border-top-right-radius: .5em;
    border-bottom-right-radius: .5em;
    font-size: 0.85em;
    background-color: #fff;
    transition: all .2s ease;
  }
  &__username {
    margin-bottom: 0.25em;
    font-weight: 600;
    color: #333;
  }
  &__email {
    color: #76787D;
  }
}

</style>
