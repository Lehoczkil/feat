<script setup lang="ts">
import { useAuthStore } from '@/store/auth';
import { storeToRefs } from 'pinia';

const authStore = useAuthStore();
const { user, loading } = storeToRefs(authStore);
const { logout } = authStore;

const handleLogout = async () => {
  await logout();
};

const getName = () => {
  return user.value?.first_name + ' ' + user.value?.last_name;
};
</script>

<template>
  <div v-if="!loading" class="view-content">
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

    <button type="button" class="logout-button" @click="handleLogout">
      {{ $t('logout') }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/home";
</style>