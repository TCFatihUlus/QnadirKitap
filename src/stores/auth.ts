import { defineStore } from 'pinia';

import { useRouter } from 'vue-router';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: null,
    loading: false,
    router: useRouter(),
  }),
  actions: {
    handleLogin(data) {
      delete data.password;
      console.log(data);
      this.loading = false;
      this.router.push({ name: 'home' });
    },
  },
  getters: {
    isAuth: (state) => state.user != null,
    getCurrrentUser(state) {
      return state.user;
    },
  },
});
