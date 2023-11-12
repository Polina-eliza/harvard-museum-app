class ArtworksAPI {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }


    async getArtworks(limit = 10) {
        try {
            const response = await fetch(`${this.baseURL}/api/artworks/?limit=${limit}`);
            const { data } = await response.json();
            return data.filter((card) => "web" in card.images);
        } catch (error) {
            throw new Error("There was a problem with the fetch operation. Please try again later.");
        }
    }
    async getFilteredArtworks() {
        try {
            const { data: artworks } = await this.getArtworks();
            const filteredArtworks = artworks.filter((card) => "web" in card.images);
            return filteredArtworks;
        } catch (error) {
            throw error;
        }
    }
}

const api = new ArtworksAPI('https://openaccess-api.clevelandart.org');
export default ArtworksAPI;

