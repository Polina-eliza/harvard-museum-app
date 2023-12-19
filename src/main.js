import { createApp } from 'vue';
import App from './App.vue';
import './main.css';
import router from './router';
import Toaster from '@meforma/vue-toaster';
import { createVuetify } from 'vuetify';
import store from './store';
import './firebaseInit'; 

const vuetify = createVuetify()
const app = createApp(App);

app.use(store);
app.use(router);
app.use(Toaster);
app.use(vuetify);
app.mount('#app');
