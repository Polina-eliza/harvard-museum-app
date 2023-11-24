import { ArtworksService } from "./artworksService";
import ArtworksApi from "../../api/artworks/artworksApi";

jest.mock("../../api/artworks/artworksApi.js");

describe("ArtworksService", () => {
  test("should filter artworks correctly", async () => {
    //arrage

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

    //act

    const filteredArtworks = await service.getFilteredArtworks();

    //assert

    expect(filteredArtworks.length).toBe(3);
    expect(filteredArtworks).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: 1, images: { web: "image1.jpg" } }),
        expect.objectContaining({ id: 2, images: { web: "image2.jpg" } }),
        expect.objectContaining({ id: 3, images: { web: "image3.jpg" } }),
      ])
    );
  });



  test("should throw error when there is an issue with fetching API", () => {
    //arrange

    ArtworksApi.mockImplementation(() => {
      return {
        getArtworks: jest.fn().mockRejectedValue(new Error("Error with API")),
      };
    });

    const service = new ArtworksService();

    //act
    //assert

    expect(service.getFilteredArtworks()).rejects.toThrow(
      "Error in ArtworksService: Error with API"
    );
  });
});
