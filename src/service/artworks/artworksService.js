import { getArtworks } from "../../api/artworks/artworksAPI";

export const getFilteredArtworks = async () => {
  try {
    const artworks = await getArtworks();
    const filteredArtworks = artworks.filter((card) => "web" in card.images);
    return filteredArtworks;
  } catch (error) {
    throw error;
  }
};