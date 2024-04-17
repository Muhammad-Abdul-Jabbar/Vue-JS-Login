import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/¨", component: () => import("../views/home.vue") },
    { path: "/register", component: () => import("../views/register.vue") },
    { path: "/SignIn", component: () => import("../views/SignIn.vue") },
    { path: "/TOS", component: () => import("../views/TOS.vue") },
    { path: "/tos1", component: () => import("../views/tos1.vue") }
  ]
});

export default router;

