import ArtworkApi from '../../api/collections/collectionsApi';
import DefaultImg from '../../assets/17816812.jpeg'; 

export default {
  async getArtworksForCollections(amount) {
    const { data } = await ArtworkApi.fetchArtworks(amount);
    return data.filter(
      (artwork) => artwork.images && "web" in artwork.images
    );
  },
  getImageUrl(images) {
    if (images && images.web && images.web.url) {
      return images.web.url;
    } else {
      return DefaultImg;
    }
  }
  
};