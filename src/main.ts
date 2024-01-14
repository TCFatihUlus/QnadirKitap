import { createApp } from 'vue';
import App from '../src/App.vue';
import pinia from './stores';

const app = createApp(App);
app.use(pinia);

app.mount('#app');
