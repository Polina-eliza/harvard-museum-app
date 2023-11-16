class ArtworksAPI {
  static #API_BASE_URL = "https://openaccess-api.clevelandart.org/api";

  static async getArtworksByPage(amount, page) {
    const response = await fetch(
      `${ArtworksAPI.#API_BASE_URL}/artworks?limit=${amount}&skip=${page}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }
  static async searchArtworksByQuery(query, amount, page) {
    const response = await fetch(
      `${ArtworksAPI.#API_BASE_URL}/artworks?search=${query}&limit=${amount}&skip=${page}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }
}

export default ArtworksAPI;