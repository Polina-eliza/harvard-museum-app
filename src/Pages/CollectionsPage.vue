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
        :class="likedArtworks[artwork.id] ? 'mdi mdi-heart' : 'mdi mdi-heart-outline'"
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
import CollectionsService from "../service/collections/collectionsService.js";
import LoadingSpinner from "@components/UI/LoadingSpinner.vue";

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
      likedArtworks: {}
    };
  },
  created() {
    this.getCards();
  },
  methods: {
    async getCards() {
      try {
        const newArtworks = await CollectionsService.getArtworksForCollections(
          this.selectedLoadAmount,
          this.currentPage
        );
        this.artworks = [...this.artworks, ...newArtworks];
      } catch (error) {
        this.$toast.error("Error fetching artworks: " + error.message);
      }
    },
    async handleSearch(query) {
      this.isLoading = true;
      try {
        const filteredArtworks = await CollectionsService.searchArtworks(
          query,
          this.selectedLoadAmount,
          this.currentPage
        );
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
      return CollectionsService.getImageUrl(images);
    },
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    toggleLike(artworkId) {
  if (this.likedArtworks.hasOwnProperty(artworkId)) {
    this.likedArtworks[artworkId] = !this.likedArtworks[artworkId];
  } else {
    this.likedArtworks[artworkId] = true;
  }
}
  },
};
</script>

<style lang="scss" src="../scss/collectionsPage.scss"></style>
