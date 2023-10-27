<template>
  <div class="card">
    <div class="card-img">
      <img class="card-img__image" :src="card.primaryimageurl" :alt="card.title" v-if="card.primaryimageurl"/>
      <div class="card-img__date">{{ card.begindate }}</div>
    </div>
      <a class="card__title" :href="'https://www.harvardartmuseums.org/exhibitions/' + card.id">{{ card.title }}</a>
  </div>
</template>

<script>


export default {
  props: {
    card: {
        type: Object,
        required: true
    }
}
};
</script>



<style lang="scss">
@import "../../scss/variables";

.card {
  max-width: 500px;

  &-img {
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
