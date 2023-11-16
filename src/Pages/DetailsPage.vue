<template>
  <div v-if="isLoading"></div>
  <div v-else class="container-midi dark-bg art-details">
    <router-link class="art-details__btn" to="/collections">Back </router-link>

    <div class="art-details-hero">
      <img
        class="art-details-hero__image"
        :src="fetchImageUrl(artworkDetails.images)"
        :alt="artworkDetails.title"
      />
      <div class="art-details-hero__id">{{ artworkDetails.id }}</div>
      <div class="art-details-hero__accession-number">
        {{ artworkDetails.accession_number }}
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
          <p class="">{{ artworkDetails.title }}</p>
        </div>
        <div class="art-details-identification-content__creator">
          <p class="accent-subtitle">Creator</p>
<<<<<<< HEAD
          <p>{{ artworkDetails.description }}</p>
=======
          <p>{{ artworkDetails.creators }}</p>
>>>>>>> ac7b2408d3d67761defc7f7151d6eadd61e0e6f7
        </div>
        <div class="art-details-identification-content__date">
          <p class="accent-subtitle">Date</p>
          <p>{{ artworkDetails.creation_date_earliest }}</p>
        </div>
        <div class="art-details-identification-content__classification">
          <p class="accent-subtitle">Classification</p>
          <p>{{ artworkDetails.type }}</p>
        </div>
        <div class="art-details-identification-content__culture">
          <p class="accent-subtitle">Culture</p>
<<<<<<< HEAD
          <p>{{ artworkDetails.culture}}</p>
=======
          <p>{{ artworkDetails.culture }}</p>
>>>>>>> ac7b2408d3d67761defc7f7151d6eadd61e0e6f7
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
          <p>{{ artworkDetails.technique }}</p>
        </div>
        <div class="art-details-description-content__dimensions">
          <p class="accent-subtitle">Dimensions</p>
          <p>{{ artworkDetails.measurements }}</p>
        </div>
        <div class="art-details-description-content__full-descr">
          <p class="accent-subtitle">Description</p>
          <p>
            {{ artworkDetails.description }}
          </p>
        </div>
      </div>
    </section>

    <section class="art-details-author">
      <div class="art-details-author__section-title accent-subtitle">
        Authors Information
      </div>
      <div v-for="creator in artworkDetails.creators" :key="Math.random() + artworkDetails.id + Math.random()" class="art-details-author-content">
        <div class="art-details-author-content__name">
          <p class="accent-subtitle">Name</p>
          <p>{{ creator.description }}</p>
        </div>
        <div class="art-details-author-content__role">
          <p class="accent-subtitle">Role</p>
<<<<<<< HEAD
          <p>{{ creator.role}}</p>
=======
          <p>{{ creator.role }}</p>
>>>>>>> ac7b2408d3d67761defc7f7151d6eadd61e0e6f7
        </div>
        <div class="art-details-author-content__bibliography">
          <p class="accent-subtitle">Biography</p>
          <p>
<<<<<<< HEAD
            {{ creator.biography}}
=======
            {{ creator.biography }}
>>>>>>> ac7b2408d3d67761defc7f7151d6eadd61e0e6f7
          </p>
        </div>
        <div class="art-details-author-content__birth-year">
          <p class="accent-subtitle">Date of Birth</p>
          <p>{{ creator.birth_year }}</p>
        </div>
        <div class="art-details-author-content__death-year">
          <p class="accent-subtitle">Date of Death</p>
          <p>{{ creator.death_year }}</p>
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
      isLoading: true,
      error: null,
      artworkDetails: null,
    };
  },
async created() {
  try {
    const artworkId = this.$route.params.artworkId;
    this.artworkDetails = await ArtworkDetailsApi.getArtworkDetails(artworkId);
  } catch (error) {
    this.error = `Error fetching artwork details: ${error.message}`;
  }
  this.isLoading = false;
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
