<template>
  <div class="container-midi dark-bg art-details">
    <router-link class="art-details__btn" to="/collections">Back </router-link>

    <div class="art-details-hero">
      <img
        class="art-details-hero__image"
        :src="fetchImageUrl(artworkDetails.images)"
        :alt="artworkDetails.imageAlt"
      />
      <div class="art-details-hero__id">{{ artworkDetails.artworkId }}</div>
      <div class="art-details-hero__accession-number">
        {{ artworkDetails.accessionNumber }}
      </div>
    </div>
    <hr />

    <section class="art-details-identification">
      <div class="art-details-identification__section-title accent-subtitle">
        Identification and Creation
      </div>
      <div class="art-details-identification-content">
        <div class="art-details-identification-content__title">
          <p class="accent-subtitle">Title</p>
          <p class="">{{ artworkDetails.artworkTitle }}</p>
        </div>
        <div class="art-details-identification-content__creator">
          <p class="accent-subtitle">Creator</p>
          <p>{{ artworkDetails.artworkCreator }}</p>
        </div>
        <div class="art-details-identification-content__date">
          <p class="accent-subtitle">Date</p>
          <p>{{ artworkDetails.artworkDate }}</p>
        </div>
        <div class="art-details-identification-content__classification">
          <p class="accent-subtitle">Classification</p>
          <p>{{ artworkDetails.artworkType }}</p>
        </div>
        <div class="art-details-identification-content__culture">
          <p class="accent-subtitle">Culture</p>
          <p>{{ artworkDetails.artworkCulture }}</p>
        </div>
      </div>
    </section>

    <section class="art-details-description">
      <div class="art-details-description__section-title accent-subtitle">
        Physical Description
      </div>
      <div class="art-details-description-content">
        <div class="art-details-description-content__technique">
          <p class="accent-subtitle">Technique</p>
          <p>{{ artworkDetails.artworkTechnique }}</p>
        </div>
        <div class="art-details-description-content__dimensions">
          <p class="accent-subtitle">Dimensions</p>
          <p>{{ artworkDetails.artworkDimensions }}</p>
        </div>
        <div class="art-details-description-content__full-descr">
          <p class="accent-subtitle">Description</p>
          <p>
            {{ artworkDetails.artworkDesc }}
          </p>
        </div>
      </div>
    </section>

    <section class="art-details-author">
      <div class="art-details-author__section-title accent-subtitle">
        Author Information
      </div>
      <div class="art-details-author-content">
        <div class="art-details-author-content__name">
          <p class="accent-subtitle">Name</p>
          <p>{{ artworkDetails.artistName }}</p>
        </div>
        <div class="art-details-author-content__role">
          <p class="accent-subtitle">Role</p>
          <p>{{ artworkDetails.artistRole }}</p>
        </div>
        <div class="art-details-author-content__bibliography">
          <p class="accent-subtitle">Biography</p>
          <p>
            {{ artworkDetails.artistBibliography }}
          </p>
        </div>
        <div class="art-details-author-content__birth-year">
          <p class="accent-subtitle">Date of Birth</p>
          <p>{{ artworkDetails.artistBirth }}</p>
        </div>
        <div class="art-details-author-content__death-year">
          <p class="accent-subtitle">Date of Death</p>
          <p>{{ artworkDetails.artistDeath }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ArtworkDetailsApi from "../api/artworkDetails/artworkDetailsApi";

export default {
  data() {
    return {
      error: null,
      artworkDetails: {
        imageURL: null,
        imageAlt: "",
        artworkId: null,
        accessionNumber: "",
        artworkTitle: "",
        artworkCreator: "",
        artworkDate: "",
        artworkType: "",
        artworkCulture: "",
        artworkTechnique: "",
        artworkDimensions: "",
        artworkDesc: "",
        artistName: "",
        artistRole: "",
        artistBibliography: "",
        artistBirth: "",
        artistDeath: "",
      },
    };
  },
  async created() {
    const artworkId = this.$route.params.artworkId;
    this.artworkDetails = await ArtworkDetailsApi.getArtworkDetails(
      artworkId
    );
    if (!this.artworkDetails) {
      this.error = "Error fetching artwork details";
    }
  },
  methods: {
  fetchImageUrl(images) {
    return ArtworkDetailsApi.getImageUrl(images);
  }
}
};
</script>

<style lang="scss">
@import "../scss/_variables.scss";

.art-details {
  padding-top: 100px;
  padding-bottom: 100px;
  color: $font-color-body-white;

  &__btn {
    color: $font-color-body-white;
  }

  &__btn::before {
    content: url(../assets/svg/return-arrow.svg);
    transform: translateY(5px);
    display: inline-block;
    margin-right: 5px;
  }

  &__btn:hover::before {
    transform: translateY(5px) translateX(-5px);
  }

  &-hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__image {
      width: 500px;
    }

    &__id {
      font-family: $font-family-accent;
      margin-top: 20px;
    }

    &__accession-number {
      color: $font-color-body-grey-light;
      margin-bottom: 20px;
    }
  }

  &-identification {
    display: flex;
    gap: 200px;

    &-content {
      width: 400px;
    }

    &__section-title {
      width: 300px;
    }
  }

  &-description {
    display: flex;
    gap: 200px;
    margin-top: 100px;

    &-content {
      width: 400px;
    }

    &__section-title {
      width: 300px;
    }
  }

  &-author {
    display: flex;
    gap: 200px;
    margin-top: 100px;

    &-content {
      width: 400px;
    }

    &__section-title {
      width: 300px;
    }
  }
}

.accent-subtitle {
  font-family: $font-family-accent;
  font-size: 22px;
  margin-top: 15px;
  color: $font-color-body-grey-light;
}
</style>
