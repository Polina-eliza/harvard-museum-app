import ExhibitionsApi from "../../api/exhibitions/exhibitionsApi";
import DefaultImg from "../../assets/17816812.jpeg";
import { exhibitionImagesStorage } from "../../exhibitionImagesStorage";
import * as indexedDbService from "../../indexedDbService";
import { createToaster } from "@meforma/vue-toaster";

class ExhibitionsService {
  constructor() {
    this.api = new ExhibitionsApi();
  }

  async getExhibitions() {
    const searchParams = new URLSearchParams(window.location.search);
    try {
      const response = await this.api.fetchExhibitions(searchParams);
      const exhibitions = await Promise.all(
        response.data.map(async (exhibition) => {
          let imageURL = await this.addImageURL(exhibition);
          return { ...exhibition, imageURL };
        })
      );

      return exhibitions;
    } catch (error) {
      toast.error("Error fetching exhibitions: " + error.message);
      throw error;
    }
  }

  async syncAndGetImageURL(exhibition) {
    try {
      let imageURL = await indexedDbService.getImage(exhibition.id);

      if (!imageURL) {
        imageURL = this.getImageUrl(exhibition.artworks?.[0]?.images);
        if (imageURL) {
          await indexedDbService.addImage(exhibition.id, imageURL);
        } else {
          const localImage = this.getLocalImageForExhibition(exhibition.id);
          imageURL = localImage || DefaultImg;
        }
      }

      return imageURL;
    } catch (error) {
      toast.error("Error in syncing image for exhibition:", error);
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
