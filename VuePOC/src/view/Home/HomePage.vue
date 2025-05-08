<template>
  <div class="login-container">
    <div class="login-card">
      <h1 class="title">ERP Manager</h1>
      <p class="subtitle">Sistema de gerenciamento empresarial</p>

      <button class="btn primary" @click="entrarSistema">Entrar no Sistema</button>
      <button class="btn secondary" @click="cadastrarEmpresa">Cadastrar Empresa</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const entrarSistema = () => {
  router.push('/login');
}

const cadastrarEmpresa = () => {
  router.push('/cadastro');
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #FFFFFF;
}

.login-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;
}

.title {
  font-size: 1.75rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.btn {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 0.75rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border: none;
}

.btn.primary {
  background-color: #111;
  color: white;
}

.btn.primary:hover {
  background-color: #333;
}

.btn.secondary {
  background-color: white;
  color: black;
  border: 1px solid #ccc;
}

.btn.secondary:hover {
  background-color: #f3f3f3;
}
</style>
