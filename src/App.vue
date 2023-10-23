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

  <div class="wrapper-color__dark">
    <About />
   
      
  </div>

  <div class="wrapper-color__white">
    <div class="container-midi">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import Hero from "./components/Hero/Hero.vue";
import WhatsOn from "./components/WhatsOn/WhatsOn.vue";
import SearchInput from "./components/Search/SearchInput.vue";
import Footer from "./components/layout/Footer.vue";
import About from "./components/About/About.vue"


export default {
  components: {
    Header,
    Hero,
    WhatsOn,
    SearchInput,
    Footer,
    About
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
