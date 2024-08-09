import { createStore } from 'vuex';
import load from '@/utils/load';
import api from '@/service/api';

export default createStore({
  state: {
    users: [],
    selectedUser: {},
    cache: [],
    loading: false,
    error: false,
    errorType: '',
  },

  getters: {
  },

  mutations: {
    SET_USERS: (state, users) => {
      state.users.push(...users);
    },
    SET_SELECTED_USER: (state, payload) => {
      const user = state.users.find((i) => i.id === payload);
      state.selectedUser = user;
    },
    CLEAR_SELECTED_USER: (state) => {
      state.selectedUser = {};
    },
    SET_CACHE(state, users) {
      state.cache.push(...users);
    },
    SET_LOADING(state, isLoading) {
      state.loading = isLoading;
    },
    CLEAR_USERS(state) {
      state.users = [];
    },
    SET_ERROR(state, error) {
      state.errorType = error;
      state.error = true;
    },
    CLEAR_ERROR(state) {
      state.error = false;
    },
  },

  actions: {
    // Поиск в кэше
    async searchUsers({ state, commit, dispatch }, { arr, fieldName }) {
      commit('CLEAR_ERROR');
      commit('CLEAR_USERS');

      const unmatchedObjects = [];

      arr.forEach((i) => {
        const match = state.cache.find((obj) => obj[fieldName] === i);
        if (match) {
          state.users.push(match);
        } else unmatchedObjects.push(i);
      });

      if (unmatchedObjects.length !== 0) {
        dispatch('dataRequest', { unmatchedObjects, fieldName });
      }
    },

    // Запрос данных
    async dataRequest({ commit }, { unmatchedObjects, fieldName }) {
      load(
        // Запрос
        () => {
          commit('SET_LOADING', true);
          return fieldName === 'id'
            ? api.user.getUserById(unmatchedObjects)
            : api.user.getUserByUserName(unmatchedObjects);
        },
        // Обработчик успешного запроса
        ({ data }) => {
          commit('SET_LOADING', false);
          commit('SET_USERS', data);
          commit('SET_CACHE', data);
        },
        // Обработчик ошибки запроса
        (err) => {
          commit('CLEAR_USERS');
          commit('SET_LOADING', false);
          commit('SET_ERROR', err);
        },
      );
    },

  },
});
