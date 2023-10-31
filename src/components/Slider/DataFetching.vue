<template>
  <slot :cards="cards"></slot>
</template>

<script>
export default {
  data() {
    return {
      cards: [],
    };
  },
  created() {
    this.fetchCards();
  },
  methods: {
    fetchCards() {
      const apiUrl = `https://openaccess-api.clevelandart.org/api/artworks/?limit=10`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          this.cards = data.data.filter(card => {
            if ('web' in card.images) {
              return true; 
            } else {
              return false; 
            }
          });
        })
        .catch((error) => {
          console.error(
            "There was a problem with the fetch operation:",
            error.message
          );
        });
    },
  },
};
</script>
