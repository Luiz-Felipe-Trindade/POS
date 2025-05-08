<template>
  <div class="cadastro-container">
    <h2>Cadastro Empresa</h2>
    <form @submit.prevent="handleCadastro">
      <input v-model="email" placeholder="Email" required />
      <input v-model="senha" placeholder="Senha" required />
      <button type="submit">Entrar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const senha = ref("");
const error = ref("");
const router = useRouter();

function handleCadastro() {
  router.push("/dashboard");
}
</script>

<style scoped>
.cadastro-container {
  height: 100vh;
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
  width: 300px;
  height: 20px;
  margin-bottom: 10px;
  padding: 8px;
}
form {
  display: flex;
  flex-direction: column;
}
button {
  width: 320px;
  height: 30px;
  border: 1px solid;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  background-color: black;
}
</style>
