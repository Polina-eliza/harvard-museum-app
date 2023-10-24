import { createRouter, createWebHistory } from "vue-router";

import CollectionsPage from "./Pages/CollectionsPage.vue";
import HomePage from './Pages/HomePage.vue'

const routes = [
  { path: "/collections", component: CollectionsPage },
  { path: "/", component: HomePage }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
