<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <section class="skeleton">
    </section>
    <section class="view">
      <header>
        <img src="./assets/feat_logo_rgb_green 1.png" alt="Feat logo">
        <div class="lang-selector">
          <button>hu</button>
          <button class="selected">en</button>
        </div>
      </header>
      <router-view />
    </section>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');
$background-color: #FFE6C9;
$gray-font-color: #525252;

body #app {
  height: 100vh;
  width: 100vw;
  background-color: $background-color;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito Sans', sans-serif;
}

.wrapper {
  max-width: 1306px;
  height: 100vh;
  display: flex;
  margin-inline: auto;

  .skeleton {
    width: 746px;
  }

  .view {
    flex-grow: 1;
    background-color: white;
    padding-block: 30px;
    padding-inline: 24px;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 76px;

      .lang-selector {
        display: flex;
        gap: 12px;

        button {
          border: none;
          background-color: transparent;
          text-transform: uppercase;
          font-weight: 300;
          font-size: 16px;
          padding: 0;
          color: $gray-font-color;

          &.selected {
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>
