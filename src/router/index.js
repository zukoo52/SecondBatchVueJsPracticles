const routes = [
  {
    path: "/",
    component: import("@/pages/index.vue"),
  },
  {
    path: "/text",
    component: import("@/pages/text.vue"),
  },

  {
    path: "/reviews",
    component: import("@/pages/createreaview.vue"),
  },

  {
    path: "/form",
    component: import("@/components/Rform.vue"),
  },
  {
    path: "/sample",
    component: import("@/pages/sample.vue"),
  },
];

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
