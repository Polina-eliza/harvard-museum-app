<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <router-link to="/collections"><li class="navbar__item">Collections</li></router-link>
      <li class="navbar__item navbar__item--logo">
        <router-link to="/">
          <span class="navbar__logo-text">HARVARD ART</span>
          <span class="navbar__logo-text navbar__logo-text--museum"
            >MUSEUMS</span
          >
        </router-link>
      </li>
      <router-link to="/exhibitions"><li class="navbar__item"><a href="#">Exibitions</a></li></router-link>
    </ul>
  </nav>
</template>

<style lang="scss">
@import "../../scss/variables";

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
