<template>
    <img
        class="exhibitions-current__image"
        :src="exhibition.imageURL"
        :alt="exhibition.title"
      />
      <div class="exhibitions-current__information">
        <div class="exhibitions-current__information-subheading">Current</div>
        <div class="exhibitions-current__information-heading">
          {{ exhibition.title }}
        </div>
        <div class="exhibitions-current__information-location">
          {{ exhibition.organizer }}
        </div>
        <div class="exhibitions-current__information-opening-date">
          {{ exhibition.opening_date }}
        </div>
        <div class="exhibitions-current__information-closing-date">
          {{ exhibition.closing_date }}
        </div>
      </div>
</template>

<script>
import ExhibitionsService from '../../service/exhibitions/exhibitionsService'

export default {
  props: {
    exhibition: Object
  },
  async mounted() {
    try {
      const exhibitions = await ExhibitionsService.getExhibitions();
      // Process exhibitions data as needed
    } catch (error) {
      console.error('Error loading exhibitions:', error);
    }
  }
};
</script>