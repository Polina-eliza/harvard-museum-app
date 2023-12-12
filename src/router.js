import { createRouter, createWebHistory } from "vue-router";

import CollectionsPage from "./Pages/CollectionsPage.vue";
import HomePage from './Pages/HomePage.vue'
import DetailsPage from "./Pages/DetailsPage.vue"
import ExhibitionsPage from "./Pages/ExhibitionsPage.vue"
import LoginPage from "./Pages/LoginPage.vue"
import SignupPage from "./Pages/SignupPage.vue"

const routes = [
  { path: "/collections", component: CollectionsPage },
  { path: "/details/:artworkId", component: DetailsPage },
  { path: "/exhibitions", component: ExhibitionsPage },
  { path: "/signup", component: SignupPage },
  { path: "/login", component: LoginPage },
  { path: "/home", component: HomePage }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
