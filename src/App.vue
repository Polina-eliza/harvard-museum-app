<template>
  <div class="accent-bg container-mini">
    <Header />
  </div>
  <router-view></router-view>
  <div class="light-bg container-midi">
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
