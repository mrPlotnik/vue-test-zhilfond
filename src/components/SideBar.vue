<template>
  <aside class="sidebar">

    <!-- Поиск -->
    <div class="sidebar__section">
      <h2 class="sidebar__title">Поиск сотрудников</h2>
      <label for="search" class="sidebar__label">
        <input
          id="search"
          class="sidebar__input"
          type="text"
          placeholder="Введите Id или имя"
          v-model="inputData"
          @change="inputChange"
        >
        <div v-if="isLoading" class="sidebar__loader-wrap">
          <PulseLoader />
        </div>
      </label>
    </div>

    <!-- Результаты -->
    <div class="sidebar__section">
      <h2 class="sidebar__title">Результаты</h2>
      <span
        v-if="!change && !error"
        class="sidebar__status"
      >Начните поиск</span>
      <span
        v-else-if="users.length === 0 && !isLoading && change && !error"
        class="sidebar__status"
      >Ничего не найдено</span>
      <span
        v-else-if="error"
        class="sidebar__status sidebar__status--error"
      >{{ errorType }}</span>

      <UserMiniCard
        v-else
        :users="users"
      />
    </div>

  </aside>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import UserMiniCard from '@/components/UserMiniCard.vue';
import PulseLoader from '@/components/PulseLoader.vue';
import { preParse, parseArrayToNumbers } from '@/utils/utils';

const store = useStore();

const inputData = ref('');
const change = ref(false);
let beautyInputArray = [];

const isLoading = computed(() => store.state.loading);
const error = computed(() => store.state.error);
const errorType = computed(() => store.state.errorType);
const users = computed(() => store.state.users);

// Проверка на число первого элемента в массиве
function firstElementIsNumber(arr) {
  const isFirstElementNumber = !Number.isNaN(Number(arr[0]));
  if (isFirstElementNumber) {
    // Преобразование всех элементов массива в числа (для корректного сравнения)
    beautyInputArray = parseArrayToNumbers(arr);
    return true;
  }
  return false;
}

// Сброс
const reset = () => {
  change.value = false;
  beautyInputArray = [];
  store.commit('SET_USERS', []);
};

// После ввода по onChange
const inputChange = (e) => {
  store.commit('CLEAR_SELECTED_USER');
  const { value } = e.target;
  change.value = true;

  if (value === '') {
    reset();
    return;
  }

  // Удаляем лишнее. Приводим к нормальному виду
  beautyInputArray = preParse(value);

  if (firstElementIsNumber(beautyInputArray)) {
    store.dispatch('searchUsers', { arr: beautyInputArray, fieldName: 'id' });
  } else {
    store.dispatch('searchUsers', { arr: beautyInputArray, fieldName: 'username' });
  }
};

</script>

<style scoped lang="scss">
.sidebar {
  @include flex-container(column);
  padding: 1em;
  border-right: 1px solid #DEDEDD;
  transition: all .2s ease;

  &__section {
    @include flex-container(column);
    margin-bottom: 1em;
  }

  &__title {
    width: 100%;
    font-weight: 600;
    margin-bottom: 1em;
    color: #333;
  }

  &__label {
    position: relative;
  }

  &__loader-wrap {
    position: absolute;
    display: flex;
    width: 100%;
    right: 0;
    bottom: -.5em;
  }

  &__input {
    min-width: 300px;
    width: 100%;
    padding: 1em;
    border: 1px solid #E9ECEF;
    font-size: .85em;
    color: #76787D;

    &:focus {
      border-color: #b8babd;
    }

  }

  &__status {
    font-size: 0.85em;
    color: #76787D;
    &--error {
      font-size: 0.85em;
      color: #ff2f2f;
    }
  }
}
</style>
