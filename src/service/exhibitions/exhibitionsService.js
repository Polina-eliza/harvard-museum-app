import ExhibitionsApi from "../../api/exhibitions/exhibitionsApi";
import DefaultImg from "../../assets/17816812.jpeg";
import { exhibitionImagesStorage } from "../../exhibitionImagesStorage";
import * as indexedDbService from "../../indexedDbService";
import { createToaster } from "@meforma/vue-toaster";

class ExhibitionsService {
  constructor() {
    this.api = new ExhibitionsApi();
    this.toast = createToaster();
  }

  async getExhibitions() {
    const searchParams = new URLSearchParams(window.location.search);
    try {
      const response = await this.api.fetchExhibitions(searchParams);
      console.log('Здесь приходит массив без картинок: ', response);
      const exhibitions = await Promise.all(
        response.data.map(async (exhibition) => {
          let imageURL = await this.getImageURL(exhibition);
          return { ...exhibition, imageURL };
        })
      );

      return exhibitions;
    } catch (error) {
      this.toast.error("Error fetching exhibitions: " + error.message);
      throw error;
    }
  }

  async addImagesToStorage(exhibitions) {
    for (const exhibition of exhibitions) {
      await indexedDbService.addImage(exhibition.id, exhibition.imageURL);
    }
  }

  async getImageURL(exhibition) {
    try {
      let imageURL = this.getImageUrl(exhibition?.artworks?.[0]?.images);

      if (!imageURL) {
        imageURL = await indexedDbService.getImage(exhibition.id);
      }

      return imageURL;
    } catch (error) {
      this.toast.error("Error in syncing image for exhibition:", error);
      return DefaultImg;
    }
  }

  getLocalImageForExhibition(exhibitionId) {
    const localImageObj = exhibitionImagesStorage.find(
      (image) => image.id === exhibitionId
    );
    return localImageObj ? localImageObj.imageURL : null;
  }

  getImageUrl(images) {
    if (images && images.web && images.web.url) {
      return images.web.url;
    }
    return null;
  }
}

export default new ExhibitionsService();
