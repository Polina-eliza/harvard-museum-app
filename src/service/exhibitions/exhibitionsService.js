import ExhibitionsApi from "../../api/exhibitions/exhibitionsApi";
import DefaultImg from "../../assets/17816812.jpeg";

export class ExhibitionsService {
  async fetchAndProcessExhibitions(searchParams) {
    try {
      const data = await ExhibitionsApi.fetchExhibitions(searchParams);
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
