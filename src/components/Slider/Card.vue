<template>
  <div class="card">
    <div class="card-media">
      <img
        class="card-media__image"
        :src="card.images.web.url"
        :alt="card.title"
      />
      <div class="card-media__title">{{ truncatedTitle }}</div>
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
  computed: {
    truncatedTitle() {
      const maxLength = 33;
      if (this.card.title.length > maxLength) {
        return `${this.card.title.substring(0, maxLength)}...`;
      }
      return this.card.title;
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/variables";

.card {
  width: 500px;

  &-media {
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
