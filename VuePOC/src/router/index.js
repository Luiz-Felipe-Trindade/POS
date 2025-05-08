import { createRouter, createWebHistory } from "vue-router";
import Login from "../view/Login/Login.vue";
import Home from "../view/Home/HomePage.vue"

const routes = [
  { patch: "/", name: "Home", component: Home},
  { path: "/login", name: "Login", component: Login }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
