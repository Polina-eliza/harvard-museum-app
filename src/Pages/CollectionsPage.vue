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
import SearchInput from "../components/Search/SearchInput.vue";
import FilterDropdown from "../components/Dropdown/FilterDropdown.vue";
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

<style lang="scss">
@import "../scss/_variables.scss";

.collections-hero {
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
.collections {
  &-header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;

    &__filter-btn {
      padding: 10px 20px;
      text-align: center;
      font-family: $font-family-accent;
      font-size: 16px;
      background-color: transparent;
      border: 1px solid;
      cursor: pointer;

      &:hover {
        background-color: $color-background-yellow;
      }
      &:focus + &__dropdown,
      &:hover + &__dropdown {
        display: block;
      }
    }

    &__dropdown {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 1;
      border: 1px solid #ccc;
      background-color: #f9f9f9;

      &-item {
        position: relative;

        &:hover &__dropdown-list {
          display: block;
        }
      }

      &-toggle {
        background-color: #f9f9f9;
        border: none;
        padding: 10px 15px;
        text-align: left;
        cursor: pointer;
        width: 100%;

        &:hover {
          background-color: #ddd;
        }

        &:focus + &__dropdown-list {
          display: block;
        }
      }

      &-list {
        display: none;
        padding: 0;
        margin: 0;
        list-style-type: none;
        max-height: 250px;
        overflow-y: auto;
        position: absolute;
        left: 100%;
        top: 0;
        border: 1px solid #ccc;
        background-color: #f9f9f9;

        & > li {
          display: flex;
          align-items: center;
          padding: 10px;
          border-bottom: 1px solid #ccc;

          &:last-child {
            border-bottom: none;
          }

          & > input[type="checkbox"] {
            margin-right: 10px;
          }
        }
      }
    }

    &-loading {
      font-family: $font-family-accent;

      &__label {
        margin: 5px;
      }

      &__select {
        width: 60px;
        padding: 5px;
        border: 1px solid #ccc;
        background-color: #fff;
        font-size: 16px;
        cursor: pointer;
      }
    }
  }

  &-main {
    display: flex;
    flex-wrap: wrap;
    gap: 70px;

    &-card {
      margin-top: 50px;
      max-width: 400px;

      &__image {
        width: 400px;
      }

      &__author {
        color: $font-color-body-grey;
        font-size: 20px;
      }

      &__title {
        font-size: 20px;
        font-weight: bold;
      }

      &__type {
        color: $font-color-body-grey;
        font-size: 18px;
      }

      &__technique {
        color: $font-color-body-grey-light;
        font-size: 16px;
      }
    }

    &__load-btn {
      padding: 10px 20px;
      text-align: center;
      font-family: $font-family-accent;
      font-size: 16px;
      border: none;
      background-color: transparent;
      border: 1px solid;
      margin: 50px auto 0 auto;
      display: block;
      cursor: pointer;

      &:hover {
        background-color: $color-background-yellow;
      }
    }
  }
}
</style>
