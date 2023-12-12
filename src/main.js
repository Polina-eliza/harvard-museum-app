import { createApp } from 'vue';
import App from './App.vue';
import './main.css'; 
import router from './router'; 
import Toaster from '@meforma/vue-toaster';
import { createVuetify } from 'vuetify'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqaTTB6uJCt5Imlz6MyumnH2KY6OfIQOI",
  authDomain: "museum-project-vue.firebaseapp.com",
  projectId: "museum-project-vue",
  storageBucket: "museum-project-vue.appspot.com",
  messagingSenderId: "845984490847",
  appId: "1:845984490847:web:81596be909b8993f3e82ea"
};

initializeApp(firebaseConfig);




const vuetify = createVuetify()

const app = createApp(App);

app.use(router);
app.use(Toaster);
app.use(vuetify);
app.mount('#app');