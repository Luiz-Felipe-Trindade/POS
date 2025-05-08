<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Senha" required />
      <button type="submit">Entrar</button>
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
</script>

<style scoped>
.login-container {
  height: 95vh;
  margin: 0px auto;
  justify-content: center;
  align-items: center;

  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
}
input {
  border-radius: 10px;
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
}
</style>
