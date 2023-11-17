<template>
  <LoadingSpinner v-if="isLoading" />
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
          <p>{{ artworkDetails.description }}</p>
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
          <p>{{ artworkDetails.culture }}</p>
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
      <div
        v-for="creator in artworkDetails.creators"
        :key="creator.id"
        class="art-details-author-content"
      >
        <div class="art-details-author-content__name">
          <p class="accent-subtitle">Name</p>
          <p>{{ creator.description }}</p>
        </div>
        <div class="art-details-author-content__role">
          <p class="accent-subtitle">Role</p>
          <p>{{ creator.role }}</p>
        </div>
        <div class="art-details-author-content__bibliography">
          <p class="accent-subtitle">Biography</p>
          <p>
            {{ creator.biography }}
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
import ArtworkDetailsService from "../service/artworkDetails/artworkDetailsService";
import LoadingSpinner from "@components/UI/LoadingSpinner.vue";

export default {
  components: {
    LoadingSpinner
  },
  data() {
    return {
      isLoading: true,
      artworkDetails: null,
    };
  },
  async created() {
    try {
      const path = this.$route.params.artworkId;
      const artworkId = path.substring(path.lastIndexOf("/") + 1);

      if (!artworkId) {
        throw new Error("No artwork ID provided in the URL");
      }

      this.artworkDetails = await ArtworkDetailsService.getArtworkDetails(
        artworkId
      );
    } catch (error) {
      this.errorMessage = `Error fetching artwork details: ${error.message}`;
    }
    this.isLoading = false;
  },
  methods: {
    fetchImageUrl(images) {
      return ArtworkDetailsService.getImageUrl(images);
    },
  },
};
</script>

<style lang="scss" src="../scss/detailsPage.scss"></style>
