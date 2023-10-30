<template>
  <div class="card">
    <div class="card-img">
      <img
        class="card-img__image"
        :src="card.images.web.url"
        :alt="card.title"
      />
      <div class="card-img__title">{{ card.title }}</div>
    </div>
    <a class="card__department" :href="card.url">{{ card.department }}</a>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    console.log(this.card);
  },
};
</script>

<style lang="scss">
@import "../../scss/variables";

.card {
  max-width: 500px;

  &-img {
    position: relative;

    &__title {
      position: absolute;
      bottom: 20px;
      left: 10px;
      color: $font-color-body-grey;
      background-color: #dfdfdf;
      padding: 2px 10px;
    }

    &__image {
      width: 350px;
      height: 400px;
    }
  }

  &__department {
    font-family: $font-family-accent;
    color: $font-color-body-white;
    display: block;
  }
}
</style>
