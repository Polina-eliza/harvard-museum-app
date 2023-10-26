<template>
  <div class="card">
    <div class="card-img-container">
      <img class="card-img-container__image" :src="imageSrc" :alt="imageAlt" />
      <div class="card-img-container__date">{{ date }}</div>
    </div>
      <a class="card__title" :href="linkHref">{{ title }}</a>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      default: "",
    },
    date: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    linkHref: {
      type: String,
      default: "#",
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/variables";

.card {
  max-width: 500px;

  &-img-container {
    position: relative;

    &__date {
      position: absolute;
      bottom: 20px;
      left: 10px;
      color: $font-color-body-grey;
      background-color: #dfdfdf;
      padding: 2px 10px;
    }

    &__image {
      width: 500px;
      height: 400px;
    }
  }

  &__title {
    font-family: $font-family-accent;
    display: block;
  }
}
</style>
