import { createRouter, createWebHistory } from "vue-router";
import { authGuard } from "../auth";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
// import Header from "@/views/Header.vue";
import Author from "@/views/Author.vue";
import Recipe from "@/views/Recipe.vue";
import Cook from "@/views/Cook.vue";
import Login from "@/components/Login.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    // meta: { auth: true },
  },
  {
    name: "about",
    path: "/about",
    component: About,
    // meta: { auth: true },
  },
  {
    name: "login",
    path: "/login",
    component: Login,
    meta: { auth: false },
  },
  {
    name: "author",
    path: "/author",
    component: Author,
    meta: { auth: true },
  },
  {
    name: "recipe",
    path: "/recipe",
    component: Recipe,
  },
  {
    name: "cook",
    path: "/cook",
    component: Cook,
    meta: { auth: true },

  },
  {
    path: "/authfinalize",
    name: "authfinalize",
    component: () => import("../views/Authfinalize.vue"),
    meta: { auth: false },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  console.log(`from ${from.fullPath} to ${to.fullPath}`);

  if (!to.meta.auth) {
    console.log("router -- auth NOT Required");
    next();
  } else {
    console.log("router -- auth Required");
    await authGuard(to, from, next);
  }
});

export default router;
