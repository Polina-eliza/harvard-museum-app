<template>
  <div class="container-midi accent-bg hero-section">
    <h2 class="hero-section__header">
      One place <br />
      three myseums
    </h2>
    <h1 class="hero-section__subheader">
      the Fogg, Busch-Reisinger, and Arthur M. Sackler Museums
    </h1>
  </div>

  <div class="container-large ongoing-exhibitions dark-bg">
    <h2 class="ongoing-exhibitions__subheader">what's on</h2>
    <Slider :cards="cards" />
    <div v-if="error" class="ongoing-exhibitions__error-message">
      {{ error }}
    </div>
    <router-link class="btn ongoing-exhibitions__event-link" to="/collections"
      >View all events</router-link
    >
  </div>

  <div class="museum-visit dark-bg">
    <div class="museum-visit-image">
      <img
        class="museum-visit-image__image"
        src="../assets/Museum-img.png"
        alt="Museum"
      />
    </div>
    <div class="museum-details">
      <div class="museum-details-schedule">
        <h3 class="museum-details-schedule__title">plan your visit</h3>
        <p class="museum-details-schedule__hours">
          Open Tuesday-Sunday 10am-5pm <br />
          <span class="museum-details-schedule__notice"
            >Closed on major holidays</span
          >
        </p>
        <p class="museum-details-schedule__ticket-info">
          <span class="museum-details-schedule__ticket-highlight">Tickets</span>
          <br />
          The museums are free to all visitors. Please check in at the
          Admissions desk. <br />
          <br />
          <span class="museum-details-schedule__ticket-credits"
            >This new initiative is made possible by a generous contribution
            from the Estate of David Rockefeller and support from the Office of
            the President at Harvard University.</span
          >
        </p>
        <a class="museum-details-schedule__link" href="#">More details</a>
      </div>

      <div class="museum-details-location">
        <h3 class="museum-details-location__title">location</h3>
        <div class="museum-details-location__info">
          <img
            class="museum-details-location__image"
            src="../assets/svg/icon-museum.png"
            alt="Museum Icon"
          />

          <div class="museum-details-location__address">
            Harvard Art Museums <br />
            32 Quincy Street <br />
            Cambridge, MA 02138 <br />
            1 (617) 495-9400
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from "@components/Search/SearchInput.vue";
import Slider from "@components/Slider/Slider.vue";
import { ArtworksService } from "../service/artworks/artworksService.js";

const artworksService = new ArtworksService();

export default {
  components: {
    SearchInput,
    Slider,
  },
  data() {
    return {
      cards: [],
      error: null,
    };
  },
  created() {
    this.getCardsForSlider();
  },
  methods: {
    async getCardsForSlider() {
      try {
        this.cards = await artworksService.getFilteredArtworks();
      } catch (error) {
        this.$toast.error("Error fetching artworks: " + error.message);
      }
    },
    async handleSearch(query) {
      try {
        this.artworks = await artworksService.searchArtworks(
          query,
          this.selectedLoadAmount,
          this.currentPage
        );
      } catch (error) {
        this.$toast.error("Error searching artworks: " + error.message);
      }
    },
  },
};
</script>

<style lang="scss">
@import "../scss/_variables.scss";

.hero-section {
  &__header {
    text-align: center;
    padding-top: 70px;
    font-size: 90px;
    line-height: 80px;
    font-family: $font-family-accent;
    font-weight: 400;
    text-transform: uppercase;
  }

  &__subheader {
    text-align: center;
    margin-top: 35px;
    line-height: 35px;
    font-size: 30px;
  }
}

.ongoing-exhibitions {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $font-color-body-white;

  &__subheader {
    text-align: center;
    padding-top: 100px;
    margin-bottom: 50px;
    text-transform: uppercase;
  }

  &__event-link {
    margin: 100px 0;
    color: $font-color-body-black;
    font-family: $font-family-accent;
    font-size: 15px;
    background-color: $color-background-yellow;
  }
}

.museum-visit {
  display: flex;

  &-image {
    flex: 1;

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.museum-details {
  flex: 2;
  display: flex;
  flex-direction: column;

  &-schedule {
    color: $font-color-body-black;
    background-color: $color-background-yellow;
    padding: 40px 120px;
    font-size: 23px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
      text-align: center;
      text-transform: uppercase;
    }

    &__hours {
      margin-top: 30px;
      text-align: center;
    }

    &__notice {
      text-decoration: underline;
      font-weight: bold;
    }

    &__ticket-highlight {
      text-decoration: underline;
    }

    &__ticket-credits {
      font-size: 18px;
      color: $font-color-body-grey;
    }

    &__ticket-info {
      text-align: center;
      margin-top: 30px;
    }

    &__link {
      margin-top: 20px;
      text-decoration: underline;
      font-size: 18px;
    }
  }

  &-location {
    flex: 1;
    background-color: $color-background-black;
    color: $font-color-body-white;
    padding: 40px 120px;

    &__title {
      text-align: center;
      text-transform: uppercase;
    }

    &__info {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 50px;
      margin-top: 50px;
    }

    &__image {
      width: 80px;
    }
  }
}
</style>
