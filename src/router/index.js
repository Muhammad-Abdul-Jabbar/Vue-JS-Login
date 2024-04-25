import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: () => import("../views/register.vue") },
    { path: "/SignIn", component: () => import("../views/SignIn.vue") },
    { path: "/home", component: () => import("../views/home.vue") },
    { path: "/TOS", component: () => import("../views/TOS.vue") },
    { path: "/tos1", component: () => import("../views/tos1.vue") },
    { path: "/abdu", component: () => import("../views/abdu.vue") },
    { path: "/mo", component: () => import("../views/mo.vue") },
    { path: "/game/:slug", component: () => import("../views/game.vue") }
  ]
});

export default router;

