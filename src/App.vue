<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const changeLanguage = (lang: string) => {
  locale.value = lang
}
</script>

<template>
  <div class="wrapper">
    <section class="skeleton">
    </section>
    <section class="view">
      <header>
        <img src="./assets/feat_logo_rgb_green 1.png" alt="Feat logo">
        <div class="lang-selector">
          <button @click="changeLanguage('hu')" :class="{ selected: locale === 'hu' }">hu</button>
          <button @click="changeLanguage('en')" :class="{ selected: locale === 'en' }">en</button>
        </div>
      </header>
      <router-view />
    </section>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');
@import "@/styles/app";
</style>
