import ArtworksAPI from "../../api/artworks/artworksAPI";

const api = new ArtworksAPI('https://openaccess-api.clevelandart.org');

export const getFilteredArtworks = async () => {
  try {
    const artworks = await api.getArtworks();
    const filteredArtworks = artworks.filter((card) => "web" in card.images);
    return filteredArtworks;
  } catch (error) {
    throw error;
  }
};