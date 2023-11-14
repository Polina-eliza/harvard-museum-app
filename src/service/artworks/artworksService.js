import ArtworksAPI from "../../api/artworks/artworksAPI";

const api = new ArtworksAPI("https://openaccess-api.clevelandart.org");

export const getFilteredArtworks = async () => {
  try {
    return await api.getFilteredArtworks();
  } catch (error) {
    throw error;
  }
};
