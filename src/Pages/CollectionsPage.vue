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
      <div class="collections-header-loading">
        <label class="collections-header-loading__label">Load Amount</label>
        <select class="collections-header-loading__select" v-model="selectedLoadAmount">
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
import CollectionsService from "../service/collections/collectionsService.js";
import DefaultImg from "../assets/17816812.jpeg";

export default {
  components: {
    SearchInput,
    DefaultImg,
  },
  data() {
    return {
      artworks: [],
      selectedLoadAmount: 12,
    };
  },
  created() {
    this.getCardsForCollections(this.selectedLoadAmount);
  },
  watch: {
    selectedLoadAmount(newVal) {
      this.getCardsForCollections(newVal);
    },
  },
  methods: {
    async getCardsForCollections(amount) {
      try {
        this.artworks = await CollectionsService.getArtworksForCollections(amount);
      } catch (error) {
        console.error("Error fetching artworks:", error);
      }
    },
    getImageUrl(images) {
      return CollectionsService.getImageUrl(images);
    },
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    
  },
};
</script>

<style lang="scss" src="../scss/collectionsPage.scss"></style>
