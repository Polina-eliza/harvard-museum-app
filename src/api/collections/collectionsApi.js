class ArtworksAPI {
  static #apiBaseURL = "https://openaccess-api.clevelandart.org/api";

  static async getArtworksByPage(amount, page) {
    const response = await fetch(
      `${ArtworksAPI.#apiBaseURL}/artworks?limit=${amount}&skip=${page}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }
  static async searchArtworksByQuery(query, amount, page) {
    const response = await fetch(
      `${ArtworksAPI.#apiBaseURL}/artworks?search=${query}&limit=${amount}&skip=${page}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }
}

export default ArtworksAPI;