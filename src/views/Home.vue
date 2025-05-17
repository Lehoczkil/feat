<template>
  <div class="view-content">
    <h1 class="title">{{ $t('welcome_part1') }}<span class="str">{{ $t('welcome_part2') }}</span></h1>
    <p class="text">{{ $t('job_title_part1') }}<span class="str">{{ $t('job_title_part2') }}</span></p>
    <p class="text">{{ $t('features') }}:</p>
    <div class="row">
      <h2 class="subtitle red">
        {{ $t('feature_1') }}
      </h2>
      <p class="text">{{ $t('feature_text') }}</p>
    </div>
    <div class="row">
      <h2 class="subtitle green">
        {{ $t('feature_2') }}
      </h2>
      <p class="text">{{ $t('feature_text') }}</p>
    </div>
    <div class="row">
      <h2 class="subtitle blue">
        {{ $t('feature_3') }}
      </h2>
      <p class="text">{{ $t('feature_text') }}</p>
    </div>

    <button type="submit" class="logout-button">{{ $t('logout') }}</button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/home";
</style>