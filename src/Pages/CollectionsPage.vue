<template>
  <div class="container-midi accent-bg collections-hero">
    <h2 class="collections-hero__header">Collections</h2>
    <h3 class="collections-hero__subheader">Browse through our art objects</h3>
  </div>

  <div class="container-midi dark-bg">
    <SearchInput />
  </div>

  <div class="container-midi light-bg collections">
    <form class="collections-header">
      <button
        type="button"
        class="collections-header__filter-btn"
        @submit.prevent="collectionsFilter"
      >
        Filter
      </button>
      <FilterDropdown />

      <div class="collections-header-loading">
        <label class="collections-header-loading__label">Load Amount</label>
        <select class="collections-header-loading__select">
          <option class="collections-header-loading__select-option">12</option>
          <option class="collections-header-loading__select-option">24</option>
          <option class="collections-header-loading__select-option" selected>
            48
          </option>
          <option class="collections-header-loading__select-option">100</option>
        </select>
      </div>
    </form>

    <main class="collections-main">
      <router-link to="/details" v-for="artwork in artworks" :key="artwork.id">
        <div class="collections-main-card">
          <img
            class="collections-main-card__image"
            :src="getImageUrl(artwork.images)"
            :alt="artwork.title"
          />
          <div class="collections-main-card__author">
            {{ artwork.creators[0].description }}
          </div>
          <div class="collections-main-card__title">
            {{ artwork.title }}
          </div>
          <div class="collections-main-card__type">{{ artwork.type }}</div>
          <div class="collections-main-card__technique">
            {{ artwork.technique }}
          </div>
        </div></router-link
      >
    </main>
    <button type="submit" class="collections-main__load-btn">Load More</button>
  </div>
</template>

<script>
import SearchInput from "@components/Search/SearchInput.vue";
import FilterDropdown from "@components/Dropdown/FilterDropdown.vue";
import CollectionsService from "../service/collections/collectionsService.js";
import DefaultImg from "../assets/17816812.jpeg";

export default {
  components: {
    SearchInput,
    FilterDropdown,
    DefaultImg,
  },
  data() {
    return {
      artworks: [],
    };
  },
  created() {
    this.getCardsForCollections();
  },
  methods: {
    async getCardsForCollections() {
      try {
        this.artworks = await CollectionsService.getArtworksForCollections();
      } catch (error) {
        console.error("Error fetching artworks:", error);
      }
    },
    getImageUrl(images) {
      return CollectionsService.getImageUrl(images);
    },
    collectionsFilter() {},
  },
};
</script>

<style lang="scss" src="../scss/collectionsPage.scss"></style>
