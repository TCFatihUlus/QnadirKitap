import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import { useRouter } from 'vue-router';
const pinia = createPinia();
const router = useRouter();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');
