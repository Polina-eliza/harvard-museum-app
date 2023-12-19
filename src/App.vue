<template>
  <div class="container-mini accent-bg">
    <Header />
  </div>
  <router-view></router-view>
  <div class="container-midi light-bg">
    <Footer />
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";

export default {
  name: "App",

  components: {
    Header,
    Footer,
  },
};
</script>

