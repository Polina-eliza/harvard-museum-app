import ExhibitionsApi from "../../api/exhibitions/exhibitionsApi";
import DefaultImg from "../../assets/17816812.jpeg";
import { exhibitionImagesStorage } from "../../exhibitionImagesStorage";

class ExhibitionsService {
  constructor() {
    this.api = new ExhibitionsApi(); 
  }

  async getExhibitions() {
    const searchParams = new URLSearchParams(window.location.search);
    try {
      const data = await this.api.fetchExhibitions(searchParams); 
      return data.data.map((exhibition) => {
        const localImage = this.getLocalImageForExhibition(exhibition.id);
        const imageURL = localImage || this.getImageUrl(exhibition.artworks?.[0]?.images);
        return { ...exhibition, imageURL };
      });
    } catch (error) {
      throw new Error("Error fetching exhibitions: " + error.message);
    }
  }

  getLocalImageForExhibition(exhibitionId) {
    const localImageObj = exhibitionImagesStorage.find(image => image.id === exhibitionId);
    return localImageObj ? localImageObj.imageURL : null;
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