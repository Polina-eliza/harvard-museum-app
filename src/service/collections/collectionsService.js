import ArtworkApi from "../../api/collections/collectionsApi";
import DefaultImg from "../../assets/17816812.jpeg";
import store from '../../store'; 

class ArtworkService {
  constructor() {
    this.artworkApi = new ArtworkApi();
  }

  async getArtworksForCollections(amount, page) {
    const { data } = await ArtworkApi.getArtworksByPage(amount, page);
    return data.filter((artwork) => artwork.images && "web" in artwork.images);
  }

  async searchArtworks(query, amount, page) {
    const { data } = await ArtworkApi.searchArtworksByQuery(query, amount, page);
    return data.filter((artwork) => artwork.images && "web" in artwork.images);
  }

  getImageUrl(images) {
    if (images && images.web && images.web.url) {
      return images.web.url;
    } else {
      return DefaultImg;
    }
  }

  toggleLike(artworkId, artworks) {
    const artwork = artworks.find((art) => art.id === artworkId);
    if (artwork) {
      const isLiked = store.state.likedArtworks.some((a) => a.id === artworkId);
      if (isLiked) {
        store.commit("removeLikedArtwork", artworkId);
      } else {
        store.commit("addLikedArtwork", artwork);
      }
    }
  }

}


export default new ArtworkService();