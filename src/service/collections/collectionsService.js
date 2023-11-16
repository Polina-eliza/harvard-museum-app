import ArtworkApi from "../../api/collections/collectionsApi";
import DefaultImg from "../../assets/17816812.jpeg";

export default {
  async getArtworksForCollections(amount, page) {
    const { data } = await ArtworkApi.getArtworksByPage(amount, page);
    return data.filter((artwork) => artwork.images && "web" in artwork.images);
  },
  async searchArtworks(query, amount, page) {
    const { data } = await ArtworkApi.searchArtworksByQuery(query, amount, page);
    return data.filter((artwork) => artwork.images && "web" in artwork.images);
  },
  getImageUrl(images) {
    if (images && images.web && images.web.url) {
      return images.web.url;
    } else {
      return DefaultImg;
    }
  },
};

