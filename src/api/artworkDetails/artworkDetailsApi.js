import DefaultImg from "../../assets/17816812.jpeg";

class ArtworkDetailsService {
    static async getArtworkDetails(artworkId) {
        try {
            const response = await fetch(`https://openaccess-api.clevelandart.org/api/artworks/${artworkId}`);
            if (!response.ok) {
                throw new Error(`API fetch error: ${response.status}`);
            }
            const data = await response.json();
            return data.data[0];
        } catch (error) {
            console.error("Error fetching artwork details:", error.message);
            return null;
        }
    }

    static getImageUrl(images) {
        return images && images.web && images.web.url ? images.web.url : DefaultImg;
    }
}

export default ArtworkDetailsService;