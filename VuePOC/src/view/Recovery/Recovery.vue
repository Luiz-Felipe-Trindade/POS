<template>
  <div class="recover-container">
    <div class="recover-card">
      <h2>Recuperação de Senha</h2>
      <p class="subtitle">
        Digite seu e-mail para receber um link de recuperação de senha
      </p>
      <form @submit.prevent="handleRecover">
        <label for="email">E-mail</label>
        <input
          id="email"
          type="email"
          v-model="email"
          placeholder="seu@email.com"
          required
        />
        <button type="submit">Enviar link de recuperação</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");

function handleRecover() {
  alert("Link de recuperação enviado para: " + email.value);
}
</script>

<style scoped>
.recover-container {
  background-color: #e5e5e5;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.recover-card {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: "Roboto", sans-serif;
  text-align: center;
}

h2 {
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
}

.subtitle {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
}

label {
  font-size: 14px;
  font-weight: 600;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

button {
  padding: 10px;
  background-color: #121212;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2c2c2c;
}
</style>
