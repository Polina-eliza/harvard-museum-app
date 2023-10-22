<template>
  <div class="currently">
    <h2 class="subheader-currently">WHAT'S ON</h2>
    <Slider />

    <button class="btn btn-view"><a href="#">View all events</a></button>
  </div>
</template>

<script>
import Slider from '../Slider.vue/Slider.vue';


export default {
  components: {
    Slider
  }
  
}


</script>

<style scoped>
.currently {
  display: flex;
  flex-direction: column;
  align-items: center;
  color :var(--font-color-body-white);
}
.subheader-currently {
  text-align: center;
  padding-top: 100px;
  margin-bottom: 50px;
}

.btn {
  padding: 15px 25px;
  background-color: var(--color-background-yellow);
  text-align: center;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  

  
}
.btn a {
  color: var(--font-color-body-black);
  font-family: var(--font-family-accent);
  font-size: 15px;
}

.btn-view {
  margin: 100px 0;

}
</style>
