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
        <router-link to="/home">
          <span class="navbar__logo-text">HARVARD ART</span>
          <span class="navbar__logo-text navbar__logo-text--museum"
            >MUSEUMS</span
          >
        </router-link>
      </div>

      <div class="navbar__item">
        <div v-if="!isLoggedIn" class="navbar__account logged-in">
          <router-link to="/login">
            <div class="navbar__item navbar__item-user-auth">
              <span class="mdi mdi-account"></span>
            </div>
          </router-link>
          <router-link to="/signup">
            <div
              class="navbar__item navbar__item-user-auth navbar__item-user-auth--registration"
            >
              Registration
            </div>
          </router-link>
        </div>
        <div v-else class="navbar__account logged-out">
          <router-link to="/favorites">
            <div class="navbar__item navbar__item--favorites">
              <span class="mdi mdi-heart"></span>
            </div>
          </router-link>

          <router-link to="/login">
            <div @click="signOut" class="navbar__item navbar__item--login">
              <span class="mdi mdi-account-arrow-left-outline"></span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useAuthComposable } from '../../composables/useAuthComposable';

const { isLoggedIn, signOut } = useAuthComposable();
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

  &__item-user-auth--registration::before {
    content: "|";
  }

  &__item--favorites::after {
    content: "|";
  }
}
</style>
