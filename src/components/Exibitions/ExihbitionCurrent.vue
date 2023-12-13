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
export default {
  props: {
    exhibition: Object
  },
};
</script>