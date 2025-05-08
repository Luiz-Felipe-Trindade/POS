import { createRouter, createWebHistory } from "vue-router";
import Login from "../view/Login/Login.vue";
import Home from "../view/Home/HomePage.vue";
import Cadastro from "../view/Cadastro/Cadastro.vue";
import Recovery from "../view/Recovery/Recovery.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/login", name: "Login", component: Login },
  { path: "/cadastro", name: "Cadastro", component: Cadastro },
  { path: "/recovery", component: Recovery },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
