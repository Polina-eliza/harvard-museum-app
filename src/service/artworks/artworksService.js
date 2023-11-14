import ArtworksAPI from "../../api/artworks/artworksAPI";

export class ArtworksService {
  constructor() {
    this.api = new ArtworksAPI("https://openaccess-api.clevelandart.org");
  }

  async getFilteredArtworks() {
    try {
      return await this.api.getFilteredArtworks();
    } catch (error) {
      throw error;
    }
  }
}