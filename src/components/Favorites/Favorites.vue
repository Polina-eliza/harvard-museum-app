<template>
    <table class="favorites-saved__table">
        <thead>
          <tr class="favorites-saved__table-header-row">
            <th class="favorites-saved__table-header">Artwork Image</th>
            <th class="favorites-saved__table-header">Author's name</th>
            <th class="favorites-saved__table-header">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr class="favorites-saved__table-row" v-for="artwork in likedArtworks" :key="artwork.id">
            <td class="favorites-saved__table-data"><img :src="artwork.images[0]" :alt="artwork.title"  /></td>
            <td class="favorites-saved__table-data">{{ artwork.creators[0].description }}</td>
            <td class="favorites-saved__table-data">
              <span class="mdi mdi-plus delete-icon" @click="removeFromFavorites(artwork.id)"></span>
            </td>
          </tr>
        </tbody>
      </table>
</template>

<script>
export default {
    computed: {
  likedArtworks() {
    return this.$store.getters.likedArtworks;
  }
}, 
methods: {
 removeFromFavorites(artworkId) {
  this.$store.commit('removeLikedArtwork', artworkId)

 }
}
}

</script>

<style lang="scss">
@import "../../scss//variables";

.favorites-saved {
    &__table {
      margin-top: 40px;
      width: 100%;
      border-collapse: collapse;

      &-header,
      &-data {
        text-align: center;
        width: 33.3333%;
      }

      &-header-row {
        color: $color-background-yellow;
        th {
          padding: 15px 0;
        }
      }

      &-row {
        td {
          padding: 15px 0;
        }
      }
    }
}

.delete-icon {
  display: inline-block;
  transform: rotate(45deg);
  font-size: 35px;
  cursor: pointer;
}
</style>