<template>
  <div class="container-midi accent-bg collections-hero">
    <h2 class="collections-hero__header">Collections</h2>
    <h3 class="collections-hero__subheader">Browse through our art objects</h3>
  </div>
  <div class="container-midi dark-bg">
    <SearchInput @onSearch="handleSearch" />
  </div>
  <div class="container-midi light-bg collections">
    <form class="collections-header">
      <div class="collections-header-loading">
        <label class="collections-header-loading__label">Load Amount</label>
        <select
          class="collections-header-loading__select"
          v-model="selectedLoadAmount"
        >
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
      <LoadingSpinner v-if="isLoading" />
      <div
        v-for="artwork in foundArtworks.length ? foundArtworks : artworks"
        :key="artwork.id"
        class="artwork-container"
      >
      <span
  :class="isArtworkLiked(artwork.id) ? 'mdi mdi-heart' : 'mdi mdi-heart-outline'"
  @click.stop="toggleLike(artwork.id)"
  class="heart-icon"
></span>
        <router-link :to="`/details/${artwork.id}`" class="collections-link">
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
          </div>
        </router-link>
      </div>
    </main>
    <button
      type="submit"
      @click="loadMoreArtworks"
      class="collections-main__load-btn"
    >
      Load More
    </button>
  </div>
</template>

<script>
import SearchInput from "@components/Search/SearchInput.vue";
import LoadingSpinner from "@components/UI/LoadingSpinner.vue";
import ArtworkService from "../service/collections/collectionsService.js";

export default {
  components: {
    SearchInput,
    LoadingSpinner,
  },
  data() {
    return {
      artworks: [],
      foundArtworks: [],
      selectedLoadAmount: 12,
      currentPage: 1,
      isLoading: false,
      likedArtworks: {},
      isSearchActive: false, 
    };
  },
  created() {
    this.getCards();
  },
  methods: {
    async getCards() {
      this.isLoading = true;
      try {
        const newArtworks = await ArtworkService.getArtworksForCollections(
          this.selectedLoadAmount,
          this.currentPage
        );
        this.artworks = [...this.artworks, ...newArtworks];
      } catch (error) {
        this.$toast.error("Error fetching artworks: " + error.message);
      } finally {
        this.isLoading = false;
      }
    },
    async handleSearch(query) {
      this.isLoading = true;
      try {
        const filteredArtworks = await ArtworkService.searchArtworks(
          query,
          this.selectedLoadAmount,
          this.currentPage
        );
        this.foundArtworks = filteredArtworks;
        this.isSearchActive = true;
      } catch (error) {
        this.$toast.error("Error fetching artworks: " + error.message);
      } finally {
        this.isLoading = false;
      }
    },
    loadMoreArtworks() {
      this.currentPage++;
      this.isSearchActive ? this.loadMoreFoundArtworks() : this.getCards();
    },
    getImageUrl(images) {
      return ArtworkService.getImageUrl(images);
    },
    toggleLike(artworkId) {
      ArtworkService.toggleLike(artworkId, this.artworks);
    },
    isArtworkLiked(artworkId) {
    return this.$store.getters.isArtworkLiked(artworkId);
  },

  toggleLike(artworkId) {
    ArtworkService.toggleLike(artworkId, this.artworks);
  },
  },
};
</script>

<style lang="scss" src="../scss/collectionsPage.scss"></style>
