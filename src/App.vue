<template>
   <div class="wrapper-color--accent">
    <div class="container-mini">
      <Header />
    </div>
  </div>
  <router-view></router-view>
</template>

<script>

import Header from "./components/layout/Header.vue";


export default {
 name: 'App',

 components: {
    Header,
}
}

</script>


