import ArtworksAPI from '../../api/artworks/artworksAPI'; 

const api = new ArtworksAPI('https://openaccess-api.clevelandart.org');

export const getFilteredArtworks = async () => {
    try {
        const filteredArtworks = await api.getFilteredArtworks();
        return filteredArtworks;
    } catch (error) {
        throw error;
    }
};