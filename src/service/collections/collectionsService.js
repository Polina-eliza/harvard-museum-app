import ArtworkApi from '../api/ArtworkApi';

export default {
  async getArtworksForCollections() {
    const { data } = await ArtworkApi.fetchArtworks();
    return data.filter(
      (artwork) => artwork.images && "web" in artwork.images
    );
  },
};