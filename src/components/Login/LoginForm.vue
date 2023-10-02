<template>
  <form class="form" @submit.prevent="login(username, password)">
      <h3>Login</h3>
      <label>Username:</label>
      <input type="text" v-model="username">
      <br>
      <label>Password:</label>
      <input type="password" v-model="password">
      <br>
      <button type="submit">Login</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/user';

const username = ref('');
const password = ref('');
const { loginUser, updateSession } = useUserStore();

const login = async (username: string, password: string) => {
  await loginUser(username, password);
  await updateSession();
}
</script>