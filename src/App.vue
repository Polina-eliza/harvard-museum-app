<template>
  <div class="wrapper-hero">
    <div class="container-mini">
      <Header />
    </div>
    <div class="container-midi">
      <Hero />
    </div>
  </div>
  <div class="wrapper-currently">
    <div class="container-large">
      <WhatsOn />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import WhatsOn from "./components/layout/WhatsOn.vue";

export default {
  components: {
    Header,
    Hero,
    WhatsOn,
  },
};
</script>

<style scoped>
.wrapper-hero {
 background-color: var(--color-background-yellow);
  padding-bottom: 2px;
}

.wrapper-currently {
  
  background-color: var(--color-background-black);
  padding-bottom: 6px;
}
</style>

