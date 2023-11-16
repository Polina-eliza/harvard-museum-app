class ArtworkDetailsApi {
  static BASE_URL = 'https://openaccess-api.clevelandart.org/api';

  static async getArtworkDetails(artworkId) {
    try {
     const response = await fetch(`${this.BASE_URL}/artworks/${artworkId}`);
      if (!response.ok) {
        throw new Error(`API fetch error: ${response.status}`);
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error("Error fetching artwork details:", error.message);
      throw error;
    }
  }
}

export default ArtworkDetailsApi;
