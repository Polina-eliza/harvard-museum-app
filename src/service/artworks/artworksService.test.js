import { ArtworksService } from "./artworksService";
import ArtworksApi from "../../api/artworks/artworksApi";

jest.mock("../../api/artworks/artworksApi.js");

describe("ArtworksService", () => {
  test("should filter artworks correctly", async () => {

    //Arrage
    
    const mockArtworks = [
      { id: 1, images: { web: "image1.jpg" } },
      { id: 2, images: { web: "image2.jpg" } },
      { id: 3, images: { web: "image3.jpg" } },
      { id: 4, images: {} },
    ];

    ArtworksApi.mockImplementation(() => {
      return {
        getArtworks: jest.fn().mockResolvedValue(mockArtworks),
      };
    });

    const service = new ArtworksService();

    //Act

    const filteredArtworks = await service.getFilteredArtworks();

    //Assert

    expect(filteredArtworks.length).toBe(3);
    expect(filteredArtworks).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: 1, images: { web: "image1.jpg" } }),
        expect.objectContaining({ id: 2, images: { web: "image2.jpg" } }),
        expect.objectContaining({ id: 3, images: { web: "image3.jpg" } }),
      ])
    );
  });
});
