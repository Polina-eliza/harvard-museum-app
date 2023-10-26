<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li class="navbar__item"><a href="#">Collections</a></li>
      <li class="navbar__item"><a href="#">Exibition</a></li>
      <li class="navbar__item navbar__item--logo">
        <router-link to="/">
          <span class="navbar__logo-text">HARVARD ART</span>
          <span class="navbar__logo-text navbar__logo-text--museum"
            >MUSEUMS</span
          >
        </router-link>
      </li>
      <li class="navbar__item"><a href="#">Events</a></li>
      <li class="navbar__item"><a href="#">Publications</a></li>
    </ul>
  </nav>
  <Hero />
</template>

<style lang="scss">
// Fonts
$font-family-body: "Didact Gothic", Arial, Helvetica, sans-serif;
$font-family-accent: "Futura", Helvetica, Arial, sans-serif;

// Colors
$font-color-body-black: #231f20;
$font-color-body-white: #e1e0e0;
$font-color-body-grey: rgb(74, 71, 71);
$color-background-yellow: #fce373;
$color-background-black: #151515;
$color-background-white: #faf9f7;

.navbar {
  padding-top: 30px;

  &__list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  &__item {
    &--logo {
      font-family: $font-family-accent;
      line-height: 29px;
      font-size: 30px;
      text-align: center;
      display: block;
    }
  }

  &__logo-text {
    display: block;

    &--museum {
      transform: rotate(180deg);
    }
  }
}
</style>
