<template>
  <nav class="navbar">
    <div class="navbar__list">
      <router-link to="/collections"
        ><div class="navbar__item">Collections</div></router-link
      >
      <router-link to="/exhibitions"
        ><div class="navbar__item">Exibitions</div></router-link
      >
      <div class="navbar__item navbar__item--logo">
        <router-link to="/">
          <span class="navbar__logo-text">HARVARD ART</span>
          <span class="navbar__logo-text navbar__logo-text--museum"
            >MUSEUMS</span
          >
        </router-link>
      </div>
     
      <div class="navbar__item">
        <div class="navbar__account">
          <router-link to="/login"
            ><div class="navbar__item navbar__item-user-auth">
              Login
            </div></router-link
          > |
          <router-link to="/signup"
            ><div class="navbar__item navbar__item-user-auth">
              Registration
            </div></router-link
          >
        </div>
      </div>
      <div class="navbar__item"> <co-heart /></div>
    </div>
  </nav>
</template>

<script>
import { CoHeart } from 'oh-vue-icons/icons';

export default {
  components: {
    'co-heart': CoHeart 
  },
};
</script>

<style lang="scss">
@import "../../scss/variables";

.navbar {
  padding-top: 30px;
  font-family: $font-family-accent;

  &__list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  &__account {
    display: flex;
    gap: 5px;
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
