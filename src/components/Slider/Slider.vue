<template>
  <div class="slider">
    <img class="slider__arrow arrow-left" :src="leftArrow" alt="Left Arrow" />
    <img class="slider__arrow arrow-right" :src="rightArrow" alt="Right Arrow" />

    <div class="slider__cards">
      <Card v-for="card in cards" :key="card.id" :card="card" />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import rightArrow from "../../assets/svg/right-arrow-backup-2-svgrepo-com (2).svg";
import leftArrow from "../../assets/svg/left-arrow-backup-2-svgrepo-com (1).svg";

export default {
  components: {
    Card,
  },
  data() {
    return {
      cards: [],
      leftArrow,
      rightArrow,
    };
  },
  created() {
    this.fetchCards();
  },
  methods: {
    fetchCards() {
      const apiUrl = `https://openaccess-api.clevelandart.org/api/artworks/?limit=10`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          this.cards = data.data;
        })
        .catch((error) => {
          console.error(
            "There was a problem with the fetch operation:",
            error.message
          );
        });
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/variables";

.slider {
  position: relative;
  overflow: hidden; 

  &__cards {
    display: flex;
    gap: 60px;
    transition: all 0.3s ease; 
  }
  
  &__arrow {
    width: 40px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%); 
    cursor: pointer;

    &.arrow-left {
      left: 10px;
    }
    
    &.arrow-right {
      right: 10px;
    }
  }
}
</style>
