import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: () => import("../views/home.vue") },
    { path: "/register", component: () => import("../views/register.vue") },
    { path: "/SignIn", component: () => import("../views/SignIn.vue") },
    { path: "/feed", component: () => import("../views/feed.vue") }
  ]
});

export default router;

