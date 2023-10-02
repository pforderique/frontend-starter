<template>
  <header>
    <nav>
      <div class="left">
        <img src="@/assets/logo.svg">
        <RouterLink to="/" class="link">
          <h1 class="title">Social Media App</h1>
        </RouterLink>
      </div>
      <button v-if="isLoggedIn">
        <RouterLink to="/setting" class="link">
          Settings
        </RouterLink>
      </button>
      <button v-else>
        <RouterLink to="/login" class="link">
          Login
        </RouterLink>
      </button>
    </nav>
  </header>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
const { isLoggedIn } = storeToRefs(useUserStore());
</script>

<style scoped>
nav {
    padding: 1vw 2vw;
    background-color:  gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index:100;
}

.title {
    font-size: 32px;
    margin: 0 5px;
}

img {
    height: 34px;
}

.left {
	display: flex;
	align-items: normal;
}
.link {
  font-size: large;
  color: black;
  text-decoration: none;
}
</style>

