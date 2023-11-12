const API_BASE_URL = 'https://openaccess-api.clevelandart.org/api';

export default {
  async fetchArtworks(amount) {
    const response = await fetch(`${API_BASE_URL}/artworks?limit=${amount}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  },
};