<template>
  <div class="slider" ref="slider">
    <img
      class="slider__arrow slider__arrow--left"
      :src="leftArrow"
      alt="Slide Left"
      @click.stop="slide('left')"
    />
    <div class="slider__cards" :style="sliderStyle">
      <Card v-for="card in cards" :key="card.id" :card="card" />
    </div>
    <img
      class="slider__arrow slider__arrow--right"
      :src="rightArrow"
      alt="Slide Right"
      @click.stop="slide('right')"
    />
  </div>
</template>

<script>
import Card from "./Card.vue";
import rightArrow from "../../assets/svg/right-arrow.svg";
import leftArrow from "../../assets/svg/left-arrow.svg";

export default {
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Card,
  },
  data() {
    return {
      rightArrow,
      leftArrow,
      currentIndex: 0,
    };
  },
  computed: {
    sliderWidth() {
      return this.$refs.slider.clientWidth;
    },
    sliderStyle() {
      const cardWidthWithGap = 500;
      const offset = this.currentIndex * cardWidthWithGap;
      return {
        transform: `translateX(-${offset}px)`,
      };
    },
  },

  methods: {
    slide(direction) {
      const cardWidthWithGap = 500 + 50;
      const fullyVisibleCards = Math.floor(this.sliderWidth / cardWidthWithGap);
      const maxIndex = this.cards.length - fullyVisibleCards - 2.5;

      if (direction === "left" && this.currentIndex > 0) {
        this.currentIndex--;
      } else if (direction === "right" && this.currentIndex < maxIndex) {
        this.currentIndex++;
      }
    },
  },
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
