<template>
   <div class="wrapper-color--accent">
    <div class="container-mini">
      <Header />
    </div>
  </div>
  <router-view></router-view>
  <div class="wrapper-color--white">
    <div class="container-midi">
      <Footer />
    </div>
  </div>
</template>

<script>

import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";


export default {
 name: 'App',

 components: {
    Header,
    Footer
}
}

</script>


