<template>
  <div class="container-midi accent-bg exhibitions-hero">
    <h2 class="exhibitions-hero__header">Exhibitions</h2>
    <h3 class="exhibitions-hero__subheader">Browse through our art objects</h3>
  </div>

  <div class="container-midi dark-bg exhibitions">
    <div
      v-for="(exhibition, index) in exhibitions"
      :key="index"
      class="exhibitions-current"
    >
      <ExihbitionCurrent :exhibition="exhibition"/>

    </div>
    <hr class="exhibitions-current__divider" />
  </div>
</template>

<script>
import exhibitionsService from "../service/exhibitions/exhibitionsService";
import ExihbitionCurrent from "../components/Exibitions/ExihbitionCurrent.vue"

export default {
  components: {
    ExihbitionCurrent
  },
  data() {
    return {
      exhibitions: [],
    };
  },
  async created() {
    try {
      this.exhibitions = await exhibitionsService.getExhibitions();
      await exhibitionsService.addImagesToStorage( this.exhibitions );
    } catch (error) {
      this.$toast.error(error.message);
    }
  },
};
</script>

<style lang="scss">
@import "../scss/_variables.scss";

.exhibitions-hero {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 70px 0 10px 0;

  &__header {
    font-size: 90px;
    line-height: 80px;
  }

  &__subheader {
    margin-top: 35px;
    font-size: 40px;
  }
}

.exhibitions {
  &-current {
    display: flex;
    justify-content: space-between;
    gap: 50px;
    padding-top: 100px;

    &__image {
      width: 600px;
    }

    &__divider {
      margin: 50px 0;
    }

    &__information {
      &-subheading {
        font-size: 23px;
        color: $font-color-body-grey-light;
        font-family: $font-family-accent;
      }

      &-heading {
        margin-top: 15px;
        color: $font-color-body-white;
      }

      &-location {
        color: $font-color-body-grey;
      }

      &-closing-date,
      &-opening-date {
        color: $font-color-body-white;
      }
    }
  }
}
</style>
