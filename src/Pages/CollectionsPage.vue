<template>
  <div class="container-midi accent-bg collections-hero">
    <h1 class="collections-hero__header">Collections</h1>
    <h2 class="collections-hero__subheader">Browse through our art objects</h2>
  </div>
  <div class="container-midi dark-bg">
    <SearchInput />
  </div>
</template>

<script>
import SearchInput from "../components/Search/SearchInput.vue";

export default {
  components: {
    SearchInput,
  },
};
</script>

<style lang="scss">
.collections-hero {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 70px 0 10px 0;

  &__subheader {
    margin-top: 35px;
  }
}
</style>
