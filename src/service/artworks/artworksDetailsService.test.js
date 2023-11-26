import { ArtworkDetailsService } from "./artworkDetailsService";
import ArtworkDetailsApi from "../../api/artworks/artworkDetailsApi";
import DefaultImg from "../../assets/17816812.jpeg";

jest.mock("../../api/artworks/artworkDetailsApi.js");

afterEach(() => jest.clearAllMocks());

describe("ArtworkDetailsService", () => {
    test("should retrieve the artworks id", async () => {
        //arrange
        const mockArtworkId = '1111';
        const mockResponse = { id: mockArtworkId };
        ArtworkDetailsApi.getArtworkDetails.mockResolvedValue(mockResponse);

        //act
        const results = await ArtworkDetailsService.getArtworkDetails(mockArtworkId);

        //assert
        expect(results).toEqual(mockResponse);
    })

    test("should throw an error when there is an issue to retrieve artworks id", async () => {

        //arrange
        
        const mockArtworkId = '1111';
        ArtworkDetailsApi.getArtworkDetails.mockRejectedValue(new Error('Error fetching artwork details'));

        //act & assert

        await expect(ArtworkDetailsService.getArtworkDetails(mockArtworkId)).rejects.toThrow('Error fetching artwork details');

    })

    test("should return valid image URL", () => {
        // arrange
        const images = { web: { url: 'http://example.com/image.jpg' }};

        // act
        const result = ArtworkDetailsService.getImageUrl(images);

        // assert
        expect(result).toBe('http://example.com/image.jpg');
    });

    test("should return default image when URL is not available", () => {
        // arrange
        const images = {};

        // act
        const result = ArtworkDetailsService.getImageUrl(images);

        // assert
        expect(result).toBe(DefaultImg);
    });
})
