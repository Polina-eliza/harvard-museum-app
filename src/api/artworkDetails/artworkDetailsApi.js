class ArtworkDetailsApi {
  static async getArtworkDetails(artworkId) {
    try {
      const response = await fetch(
        `https://openaccess-api.clevelandart.org/api/artworks/${artworkId}`
      );
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
