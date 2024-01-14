import { defineStore } from 'pinia';
export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: null,
    loading: false,
  }),

  actions: {
    handleLogin(data) {
      console.log(data);
    },
  },

  getters: {},
});
