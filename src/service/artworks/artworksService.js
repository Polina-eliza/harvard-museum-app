import ArtworksAPI from "../../api/artworks/artworksAPI";

export class ArtworksService {
  #api;

  constructor() {
    this.#api = new ArtworksAPI("https://openaccess-api.clevelandart.org");
  }

  async getFilteredArtworks() {
    try {
      const artworks = await this.api.getArtworks();
      return artworks.filter((card) => "web" in card.images);
    } catch (error) {
      throw new Error("Error in ArtworksService: " + error.message);
    }
  }
}
