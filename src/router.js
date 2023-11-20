import { createRouter, createWebHistory } from "vue-router";

import CollectionsPage from "./Pages/CollectionsPage.vue";
import HomePage from './Pages/HomePage.vue'
import DetailsPage from "./Pages/DetailsPage.vue"
import ExibitionsPage from "./Pages/ExibitionsPage.vue"

const routes = [
  { path: "/collections", component: CollectionsPage },
  { path: "/details/:artworkId", component: DetailsPage },
  { path: "/exibitions", component: ExibitionsPage },
  { path: "/", component: HomePage }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
