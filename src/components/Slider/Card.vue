<template>
  <div class="card">
    <div class="card-img-container">
      <img class="card-img-container__image" :src="imageSrc" :alt="imageAlt" />
      <div class="card-img-container__date">{{ date }}</div>
    </div>
    <div class="card__title">
      <a :href="linkHref">{{ title }}</a>
    </div>
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

<style lang="scss" scoped>
// Fonts
$font-family-body: "Didact Gothic", Arial, Helvetica, sans-serif;
$font-family-accent: "Futura", Helvetica, Arial, sans-serif;

// Colors
$font-color-body-black: #231f20;
$font-color-body-white: #e1e0e0;
$font-color-body-grey: rgb(74, 71, 71);
$color-background-yellow: #fce373;
$color-background-black: #151515;
$color-background-white: #faf9f7;

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
  }
}
</style>
