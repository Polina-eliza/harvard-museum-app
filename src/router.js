import { createRouter, createWebHistory } from "vue-router";

import CollectionsPage from "./Pages/CollectionsPage.vue";
import HomePage from './Pages/HomePage.vue'
import DetailsPage from "./Pages/DetailsPage.vue"
import ExhibitionsPage from "./Pages/ExhibitionsPage.vue"
import LoginPage from "./Pages/LoginPage.vue"
import RegistrationPage from "./Pages/RegistrationPage.vue"
import FavoritesPage from "./Pages/FavoritesPage.vue"

const routes = [
  { path: "/collections", component: CollectionsPage },
  { path: "/details/:artworkId", component: DetailsPage },
  { path: "/exhibitions", component: ExhibitionsPage },
  { path: "/signup", component: RegistrationPage },
  { path: "/login", component: LoginPage },
  { path: "/favorites", component: FavoritesPage },
  { path: "/home", component: HomePage }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
