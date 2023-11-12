import api from "../../api/artworks/artworksAPI";



export const processArtworksData = async () => {
  try {
      const filteredArtworks = await api.getFilteredArtworks();
      
      return filteredArtworks;
  } catch (error) {
      throw error;
  }
};