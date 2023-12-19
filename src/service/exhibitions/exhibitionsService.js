import ExhibitionsApi from "../../api/exhibitions/exhibitionsApi";
import DefaultImg from "../../assets/17816812.jpeg";

class ExhibitionsService {
  constructor() {
    this.api = new ExhibitionsApi(); 
  }

  async getExhibitions() {
    const searchParams = new URLSearchParams(window.location.search);
    try {
      const data = await this.api.fetchExhibitions(searchParams); 
      return data.data.map((exhibition) => {
        const imageURL = this.getImageUrl(exhibition.artworks?.[0]?.images);
        return { ...exhibition, imageURL };
      });
    } catch (error) {
      throw new Error("Error fetching exhibitions: " + error.message);
    }
  }

  getImageUrl(images) {
    if (images && images.web && images.web.url) {
      return images.web.url;
    } else {
      return DefaultImg;
    }
  }
}

export default new ExhibitionsService();