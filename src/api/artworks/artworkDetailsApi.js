class ArtworkDetailsApi {
  static #apiBaseURL = 'https://openaccess-api.clevelandart.org/api';

  static async getArtworkDetails(artworkId) {
    try {
     const response = await fetch(`${this.#apiBaseURL}/artworks/${artworkId}`);
      if (!response.ok) {
        throw new Error(`API fetch error: ${response.status}`);
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      throw error;
    }
  }
}

export default ArtworkDetailsApi;
