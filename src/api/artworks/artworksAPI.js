class ArtworksApi {
  #apiBaseURL;

  constructor(apiBaseURL = "https://openaccess-api.clevelandart.org") {
    this.#apiBaseURL = apiBaseURL;
  }

  async getArtworks(limit = 10) {
    try {
      const response = await fetch(`${this.#apiBaseURL}/api/artworks/?limit=${limit}`);
      const { data } = await response.json();
      return data;
    } catch (error) {
      throw new Error("There was a problem with the fetch operation: " + error.message);
    }
  }
}

export default ArtworksApi;