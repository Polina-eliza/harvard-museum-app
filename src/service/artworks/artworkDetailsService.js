import ArtworkDetailsApi from "../../api/artworks/artworkDetailsApi";
import DefaultImg from "../../assets/17816812.jpeg";

class ArtworkDetailsService {
  async getArtworkDetails(artworkId) {
    try {
      const artworkDetails = await ArtworkDetailsApi.getArtworkDetails(
        artworkId
      );
      return artworkDetails;
    } catch (error) {
      throw error;
    }
  }

  getImageUrl(images) {
    return images && images.web && images.web.url ? images.web.url : DefaultImg;
  }
}

export default new ArtworkDetailsService();

