<template>
  <div class="container-midi accent-bg exibitions-hero">
    <h2 class="exhibitions-hero__header">Collections</h2>
    <h3 class="exhibitionss-hero__subheader">Browse through our art objects</h3>
  </div>

  <div class="container-midi dark-bg exhibitions">
    <div class="exhibitions-current">
      <img
        class="exhibitions-current__image"
        src="../assets/17816812.jpeg"
        alt=""
      />
      <div class="exhibitions-current__information">
        <div class="exhibitions-current__information-subheading">Current</div>
        <div class="exhibitions-current__information-heading">
          Disrupt the View: Arlene Shechet at the Museum
        </div>
        <div class="exhibitions-current__information-location">
          July 1, 2022-July 6, 2025
        </div>
        <div class="exhibitions-current__information-description">
          Experience the Harvard Art Museums’ historical collections through
          fresh eyes in a one-of-a kind installation by contemporary American
          sculptor Arlene Shechet.
        </div>
      </div>
    </div>

    <hr class="exhibitions-current__divider" />

  </div>
</template>

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

      &-description {
        color: $font-color-body-white;
      }
    }
  }
}
</style>
