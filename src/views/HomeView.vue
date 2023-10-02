<template>
  <main>
    <h1>This is the home page!</h1>
    <h1 v-if="isLoggedIn">Welcome {{ currentUsername }}!</h1>
    <h1 v-else>Please login!</h1>
  </main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';

const { currentUsername, isLoggedIn } = storeToRefs(useUserStore());
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>