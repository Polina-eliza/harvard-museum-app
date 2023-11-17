import ArtworksAPI from "../../api/artworks/artworksAPI";

export class ArtworksService {
  #api;

  constructor(apiBaseURL = "https://openaccess-api.clevelandart.org") {
    this.#api = new ArtworksAPI(apiBaseURL);
  }

  async getFilteredArtworks() {
    try {
      const artworks = await this.#api.getArtworks();
      return artworks.filter((card) => "web" in card.images);
    } catch (error) {
      throw new Error("Error in ArtworksService: " + error.message);
    }
  }
}