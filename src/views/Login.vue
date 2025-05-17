<template>
  <div class="login-container">
    <div class="header">
      <div class="header-text">
        <h1 class="title text-bold">{{ $t('join_title') }}&nbsp;<em>{{ $t('feat') }}</em></h1>
        <p class="subtitle">{{ $t('join_subtitle') }}</p>
      </div>
    </div>

    <form class="form">
      <div class="form-group">
        <label for="email" class="input-label">{{ $t('email') }}</label>
        <input type="email" id="email" class="input-field" :placeholder="$t('email_placeholder')">
      </div>

      <div class="form-group">
        <label for="password" class="input-label">{{ $t('password') }}</label>
        <input type="password" id="password" class="input-field" placeholder="***************">
        <div class="options">
          <label class="remember-me">
            <input type="checkbox" class="checkbox">
            <span>{{ $t('remember_me') }}</span>
          </label>
          <a href="#" class="forgot-password">{{ $t('forgot_password') }}</a>
        </div>
      </div>

      <button type="submit" class="login-button">{{ $t('login_button') }}</button>
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