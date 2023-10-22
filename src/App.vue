<template>
  <div class="wrapper-color__accent">
    <div class="container-mini">
      <Header />
    </div>
    <div class="container-midi">
      <Hero />
    </div>
  </div>
  <div class="wrapper-color__dark">
    <div class="container-large">
      <WhatsOn />
    </div>
  </div>
  <div class="wrapper-color__light">
    <div class="container-midi">
      <SearchInput />

    </div>
  </div>

</template>

<script>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import WhatsOn from "./components/layout/WhatsOn.vue";
import SearchInput from './components/Search/SearchInput.vue'

export default {
  components: {
    Header,
    Hero,
    WhatsOn,
    SearchInput
  },
};
</script>

<style scoped>
.wrapper-color__accent {
 background-color: var(--color-background-yellow);
  padding-bottom: 2px;
}

.wrapper-color__dark {
  background-color: var(--color-background-black);
  padding-bottom: 6px;
}

.wrapper-color__light {
  background-color: var(--color-background-white);
  padding-bottom: 6px;
  

}
</style>

