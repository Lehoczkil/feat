<template>
  <div class="login-container">
    <div class="header">
      <div class="header-text">
        <h1 class="title">{{ $t('join_title') }}</h1>
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
$gray-font-color: #525252;
$light-gray-font-color: #828282;
$border-color: #DED2D9;
$placeholder-color: #E0E0E0;
$lighter-gray-font-color: #A1A1A1;
$purple: #7F265B;

.login-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 36px;
  width: 414px;
}

.header {
  &-text {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
}

.title {
  font-weight: 700;
  font-size: 36px;
  line-height: 49px;
  color: $gray-font-color;
  margin: 0;
}

.subtitle {
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: $gray-font-color;
  margin: 0;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.input-label {
  width: 100%;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: $light-gray-font-color;
}

.input-field {
  flex-direction: row;
  padding: 13px 10px;
  gap: 13px;
  height: 40px;
  border: 1px solid $border-color;
  border-radius: 5px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: $gray-font-color;

  &::placeholder {
    color: $placeholder-color;
  }
}

.options {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.remember-me {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: $lighter-gray-font-color;
  cursor: pointer;

  .checkbox {
    width: 12px;
    height: 12px;
    accent-color: $purple;
    outline: none;
    cursor: pointer;
  }
}

.forgot-password {
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: $purple;
  text-decoration: none;
}

.login-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 10px 12px;
  gap: 13px;
  width: 100%;
  height: 40px;
  background: $purple;
  border-radius: 6px;
  border: none;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 25px;
  color: #FFFFFF;
  cursor: pointer;
}

.signup {
  display: flex;
  gap: 10px;

  &-prompt {
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: $light-gray-font-color;
  }

  &-link {
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: $purple;
    text-decoration: none;
  }
}
</style>