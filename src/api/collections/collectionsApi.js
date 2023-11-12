const API_BASE_URL = "https://openaccess-api.clevelandart.org/api";

export default {
  async fetchArtworks(amount, page) {
    const response = await fetch(
      `${API_BASE_URL}/artworks?limit=${amount}&skip=${page}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },
};
