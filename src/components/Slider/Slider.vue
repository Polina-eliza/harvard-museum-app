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
  created() {
    this.fetchCards();
  },
  methods: {
    fetchCards() {
      const API_KEY = "53773212-d46d-4ec2-9981-1fa94f247e05";
      const apiUrl = `https://api.harvardartmuseums.org/exhibition?apikey=${API_KEY}&size=10`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          this.cards = data.records;
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error.message);
        });
    }
  }
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
