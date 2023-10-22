

<template>
  <div class="hero">
  <div class="container-mini">
    <Header />
  </div>
    <div class="container">
      <Hero/>

    </div>
    </div>
    
      

   
   


  
   


  
  

</template>



<script>

import Header from './components/Header.vue';
import Hero from './components/Hero.vue'


export default {
  components: {
    Header,
    Hero
  }

 

}





</script>

<style scoped>
.hero {
  background-color: #fce373;
  padding-bottom: 6px;
  
}

</style>
