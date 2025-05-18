<script setup lang="ts">
import { useAuthStore } from '@/store/auth';
import { storeToRefs } from 'pinia';
import { ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';
import { useNotification } from '@/composables/useNotification'
import { useI18n } from 'vue-i18n';

interface LoginCredentials {
  email: string;
  password: string;
}

const router = useRouter();
const authStore = useAuthStore();
const { login } = authStore;
const { loading } = storeToRefs(authStore);

const { t } = useI18n()

const { showError } = useNotification()

const credentials: Ref<LoginCredentials> = ref({
  email: '',
  password: ''
});

const handleSubmit = async (): Promise<void> => {
  try {
    const success = await login(credentials.value);
    if (!success) {
      showError(t('notifications.login_error'));
    } else {
      await router.push({ name: 'Home' });
    }
  } catch (err) {
    console.error('Login failed:', err);
    showError('Login failed. Please try again.');
  }
};
</script>

<template>
  <div class="login-container">
    <div class="header">
      <div class="header-text">
        <h1 v-if="!loading" class="title text-bold">{{ $t('join_title') }}&nbsp;<em>{{ $t('feat') }}</em></h1>
        <div v-else class="title loading-placeholder" style="width: 250px; height: 49px;"></div>
        
        <p v-if="!loading" class="subtitle">{{ $t('join_subtitle') }}</p>
        <div v-else class="subtitle loading-placeholder" style="width: 300px; height: 22px; margin-top: 8px;"></div>
      </div>
    </div>

    <form class="form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label v-if="!loading" for="email" class="input-label">{{ $t('email') }}</label>
        <div v-else class="input-label loading-placeholder" style="width: 50px; height: 19px;"></div>
        
        <input 
          v-if="!loading"
          v-model="credentials.email" 
          type="email" 
          id="email" 
          class="input-field" 
          placeholder="hello@feat.hu"
          required
        >
        <div v-else class="input-field loading-placeholder" style="height: 40px;"></div>
      </div>

      <div class="form-group">
        <label v-if="!loading" for="password" class="input-label">{{ $t('password') }}</label>
        <div v-else class="input-label loading-placeholder" style="width: 70px; height: 19px;"></div>
        
        <input 
          v-if="!loading"
          v-model="credentials.password" 
          type="password" 
          id="password" 
          class="input-field" 
          placeholder="***************"
          required
        >
        <div v-else class="input-field loading-placeholder" style="height: 40px;"></div>
        
        <div class="options">
          <label v-if="!loading" class="remember-me">
            <input type="checkbox" class="checkbox">
            <span>{{ $t('remember_me') }}</span>
          </label>
          <div v-else class="remember-me loading-placeholder" style="width: 120px; height: 16px;"></div>
          
          <a v-if="!loading" href="#" class="forgot-password">{{ $t('forgot_password') }}</a>
          <div v-else class="forgot-password loading-placeholder" style="width: 100px; height: 16px;"></div>
        </div>
      </div>

      <button  v-if="!loading" type="submit" class="login-button" :disabled="loading || !credentials.email || !credentials.password">
        <span>{{ $t('login_button') }}</span>
      </button>
      <div v-else class="input-field loading-placeholder" style="height: 40px;"></div>

    </form>

    <div class="signup">
      <span v-if="!loading" class="signup-prompt">{{ $t('not_applied') }}</span>
      <div v-else class="signup-prompt loading-placeholder" style="width: 150px; height: 19px;"></div>
      
      <a v-if="!loading" href="#" class="signup-link">{{ $t('create_account') }}</a>
      <div v-else class="signup-link loading-placeholder" style="width: 100px; height: 19px;"></div>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/styles/login";
</style>