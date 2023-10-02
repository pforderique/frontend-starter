import { createRouter, createWebHistory } from 'vue-router'
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user'
import HomeView from '../views/HomeView.vue'
import SettingView from '../views/SettingView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/setting',
      name: 'setting',
      component: SettingView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

/**
 * Navigation guards to prevent user from accessing wrong pages.
 */
router.beforeEach((to, from) => {
  const { isLoggedIn } = storeToRefs(useUserStore());


  if (!isLoggedIn.value && to.name === 'setting') {
    return { name: 'login'};
  }
  
  if (isLoggedIn.value && to.name === 'login') {
    return { name: 'setting' };
  }
})

export default router
