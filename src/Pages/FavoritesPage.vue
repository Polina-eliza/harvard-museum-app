<template>
  <div class="container-midi dark-bg favorites">
    <div class="favorites-saved">
      <h3 class="favorites-saved__header">Saved Collections</h3>
      <Favorites />
    </div>
  </div>
</template>

<script>
import Favorites from "../components/Favorites/Favorites.vue"

export default {
    components: {
        Favorites
    }
}
</script>

<style lang="scss">
@import "../scss/variables";

.favorites {
  color: $font-color-body-white;
  min-height: 900px;

  &-saved {
    &__header {
      padding-top: 100px;
      text-align: center;
    }
  }
}


</style>
