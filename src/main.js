import { createApp } from 'vue'
import App from './App.vue'
import './main.css'; 
import router from './router'; 


import Toaster from '@meforma/vue-toaster';

const app = createApp(App);


app.use(router);


app.use(Toaster);


app.mount('#app');