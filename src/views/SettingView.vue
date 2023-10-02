<template>
  <h1>This is the settings page!</h1>
  <h1>Settings for {{ currentUsername }}</h1>
  <div class="button">
    <button @click="logoutUser">Logout</button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';

const { currentUsername } = storeToRefs(useUserStore());
const { logoutUser } = useUserStore();
</script>

<style scoped>
h1 {
  text-align: center;
}

.button {
  text-align: center;
}
</style>