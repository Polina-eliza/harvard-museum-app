<template>
  <div class="slider">
    <img class="slider__arrow slider__arrow--left" :src="leftArrow" alt="Slide Left" @click="slide('left')" />
    <div class="slider__cards" :style="sliderStyle">
      <Card v-for="card in cards" :key="card.id" :card="card" />
    </div>
    <img class="slider__arrow slider__arrow--right" :src="rightArrow" alt="Slide Right" @click="slide('right')" />
  </div>
</template>

<script>
import Card from "./Card.vue";
import rightArrow from "../../assets/svg/right-arrow.svg";
import leftArrow from "../../assets/svg/left-arrow.svg";

export default {
  components: {
    Card,
  },
  data() {
    return {
      cards: [],
      rightArrow,
      leftArrow,
      currentIndex: 0,
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
    slide(direction) {
      if (direction === "left" && this.currentIndex > 0) {
        this.currentIndex--;
      } else if (direction === "right" && this.currentIndex < this.cards.length - 1) {
        this.currentIndex++;
      }
    }
  },
  computed: {
    sliderStyle() {
      const cardWidthWithGap = 500; 
      const offset = this.currentIndex * cardWidthWithGap;
      return {
        transform: `translateX(-${offset}px)`
      };
    }
  }
};
</script>

<style lang="scss">
@import "../../scss/variables";

.slider {
  position: relative;
  overflow: hidden;
  width: 100%;

  &__cards {
    display: flex;
    gap: 60px;
    transition: all 0.3s ease;
    scroll-behavior: smooth;
  }

  &__arrow {
    position: absolute;
    top: 50%;
    width: 40px;
    cursor: pointer;
    z-index: 2;
    transform: translateY(-50%);

    &--left {
      left: 10px;
   
    }

    &--right {
      right: 10px;
    }
  }
}
</style>
