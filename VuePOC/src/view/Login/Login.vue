<template>
  <div class="login-container">
    <h2>Faça o seu Login</h2>
    <form @submit.prevent="handleLogin">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Senha" required />
      <button type="submit">Entrar</button>
      <div>
        <a @click="recovery">Esqueci a senha</a>
        <a @click="cadastrar">Cadastre-se agora</a>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const error = ref("");
const router = useRouter();

function handleLogin() {
  router.push("/dashboard");
}

function recovery() {
  router.push("/recovery");
}
function cadastrar() {
  router.push("/cadastro");
}
</script>

<style scoped>
.login-container {
  margin: 0px auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
input {
  border-radius: 10px;
  width: 300px;
  height: 20px;
  border: 1px solid;
  margin-bottom: 10px;
  padding: 8px;
}
form {
  display: flex;
  flex-direction: column;
}
button {
  border: 1px solid;
  border-radius: 10px;
  cursor: pointer;
  width: 320px;
  height: 30px;
  color: white;
  background-color: black;
}
a {
  color: blue;
  text-decoration: underline;
  margin: 0.3rem;
  cursor: pointer;
  font-size: 0.9rem;
}
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
}
</style>
