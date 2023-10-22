<template>
  <div class="currently">
    <h2 class="subheader-currently">WHAT'S ON</h2>
    <Card />

    <button class="btn btn-view"><a href="#">View all events</a></button>
  </div>
</template>

<script>
import Card from '../Slider.vue/Card.vue';


export default {
  components: {
    Card
  }
  
}


</script>

<style scoped>
.currently {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.subheader-currently {
  text-align: center;
  padding-top: 100px;
  margin-bottom: 50px;
}

.btn {
  padding: 15px 25px;
  background-color: black;
  text-align: center;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  
}
.btn a {
  color: #fce373;
  font-family: var(--font-family-accent);
  font-size: 15px;
}

.btn-view {
  margin: 100px 0;

}
</style>
