<template>
  <form class="form" @submit.prevent="register(username, password)">
    <h3>Register User</h3>
    <label>Username:</label>
    <input type="text" v-model="username">
    <br>
    <label>Password:</label>
    <input type="password" id="password" v-model="password">
    <br>
    <button type="submit">Register</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/user';

const username = ref('');
const password = ref('');
const { createUser, loginUser, updateSession } = useUserStore();

const register = async (username: string, password: string) => {
  const userInfo  = await createUser(username, password);
  if (userInfo) {
    const {username, password} = userInfo;
    await loginUser(username, password);
    await updateSession();
  }
}
</script>