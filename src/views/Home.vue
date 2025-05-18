<script setup lang="ts">
import { useAuthStore } from '@/store/auth';
import { storeToRefs } from 'pinia';
import { computed, type ComputedRef } from 'vue';

const authStore = useAuthStore();
const { user, loading, isLoginLoading } = storeToRefs(authStore);
const { logout } = authStore;

const handleLogout = async (): Promise<void> => {
  try {
    await logout();
  } catch (error) {
    console.error('Logout failed:', error);
  }
};

const getName = (): string => {
  if (!user.value) return '';
  return `${user.value.first_name} ${user.value.last_name}`;
};
</script>

<template>
  <div class="view-content">
    <template v-if="!loading">
      <h1 class="title">{{ $t('welcome_part1') }}<span class="text-bold">{{ getName() }}</span></h1>
      <p class="text">{{ $t('job_title_part1') }}<span class="text-bold">{{ user?.job_tile }}</span></p>
      <p class="text">{{ $t('features') }}:</p>

      <template v-if="user?.features?.length">
        <div v-for="feature in user?.features" class="row">
          <h2 class="subtitle text-bold" :class="feature.color">
            {{ feature.title }}
          </h2>
          <p class="text">{{ feature.description }}</p>
        </div>
      </template>
    </template>

    <template v-else>
      <div class="title loading-placeholder" style="width: 300px; height: 49px; margin-bottom: 16px;"></div>
      <div class="text loading-placeholder" style="width: 250px; height: 22px; margin-bottom: 16px;"></div>
      <div class="text loading-placeholder" style="width: 100px; height: 22px; margin-bottom: 24px;"></div>
      
      <div v-for="i in 3" class="row" style="margin-bottom: 32px;">
        <div class="subtitle loading-placeholder" style="width: 150px; height: 27px; margin-bottom: 8px;"></div>
        <div class="text loading-placeholder" style="width: 100%; height: 22px;"></div>
      </div>
    </template>

    <button v-if="!loading" type="button" class="logout-button" @click="handleLogout" :disabled="isLoginLoading">
      <span>{{ $t('logout') }}</span>
    </button>
    <div v-else class="input-field loading-placeholder" style="height: 40px;"></div>

  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/home";
</style>