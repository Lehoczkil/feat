<script setup lang="ts">
import { useAuthStore } from '@/store/auth';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const authStore = useAuthStore();
const { login } = authStore;
const { loading } = storeToRefs(authStore);

const credentials = ref({
  email: '',
  password: ''
});

const handleSubmit = async () => {
  try {
    const success = await login(credentials.value);
    if (success) {
      router.push({ name: 'Home' });
    }
  } catch (err) {
    console.error(err);
  }
};
</script>

<template>
  <div class="login-container">
    <div class="header">
      <div class="header-text">
        <h1 class="title text-bold">{{ $t('join_title') }}&nbsp;<em>{{ $t('feat') }}</em></h1>
        <p class="subtitle">{{ $t('join_subtitle') }}</p>
      </div>
    </div>

    <form class="form" @submit.prevent="handleSubmit">
      
      <div class="form-group">
        <label for="email" class="input-label">{{ $t('email') }}</label>
        <input 
          v-model="credentials.email" 
          type="email" 
          id="email" 
          class="input-field" 
          placeholder="hello@feat.hu"
          required
        >
      </div>

      <div class="form-group">
        <label for="password" class="input-label">{{ $t('password') }}</label>
        <input 
          v-model="credentials.password" 
          type="password" 
          id="password" 
          class="input-field" 
          placeholder="***************"
          required
        >
        <div class="options">
          <label class="remember-me">
            <input type="checkbox" class="checkbox">
            <span>{{ $t('remember_me') }}</span>
          </label>
          <a href="#" class="forgot-password">{{ $t('forgot_password') }}</a>
        </div>
      </div>

      <button type="submit" class="login-button" :disabled="loading">
        {{ $t('login_button') }}
      </button>
    </form>

    <div class="signup">
      <span class="signup-prompt">{{ $t('not_applied') }}</span>
      <a href="#" class="signup-link">{{ $t('create_account') }}</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/login";
</style>