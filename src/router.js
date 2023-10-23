import { createRouter, createWebHistory } from "vue-router";

import CollectionsPage from "./Pages/CollectionsPage.vue";

const routes = [{ path: "/collections", component: CollectionsPage }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
