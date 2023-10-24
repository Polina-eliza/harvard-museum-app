<template>
  <div class="slider">
    <div class="cards-container">
      <Card v-for="card in cards" :key="card.id" :card="card"/>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  components: {
    Card,
  },
  data() {
    return {
      cards: []
    }
  },
}
</script>

<style scoped>

.cards-container {
  display: flex;
  gap: 60px;
}

</style>
