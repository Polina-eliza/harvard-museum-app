<template>
  <div class="slider">
    <div class="slider__cards">
      <Card v-for="card in cards" :key="card.id" :card="card" />
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
      cards: [],
    };
  },
};
</script>

<style lang="scss">

@import "../../scss/variables";

.slider {
  &__cards {
    display: flex;
    gap: 60px;
  }
}
</style>
