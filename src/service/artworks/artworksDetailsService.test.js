import ArtworkDetailsService from "./ArtworkDetailsService"; 
import ArtworkDetailsApi from "../../api/artworks/artworkDetailsApi";
import DefaultImg from "../../assets/17816812.jpeg";

jest.mock("../../api/artworks/artworkDetailsApi.js");

afterEach(() => jest.clearAllMocks());

describe("ArtworkDetailsService", () => {
    test("should return artworks by id", async () => {
        const mockArtworkId = '1111';
        const mockResponse = { id: mockArtworkId };
        ArtworkDetailsApi.getArtworkDetails.mockResolvedValue(mockResponse);

        const results = await ArtworkDetailsService.getArtworkDetails(mockArtworkId);

        expect(results).toEqual(mockResponse);
    });

    test("should throw an error when there is an issue to retrieve artworks id", async () => {
        const mockArtworkId = '1111';
        const expectedError = 'Error fetching artwork details';
        ArtworkDetailsApi.getArtworkDetails.mockRejectedValue(new Error(expectedError));

        await expect(ArtworkDetailsService.getArtworkDetails(mockArtworkId)).rejects.toThrow('Error fetching artwork details');
    });

    test("should return the URL from the images object when a valid image is available", () => {
        const images = { web: { url: 'http://example.com/image.jpg' }};

        const result = ArtworkDetailsService.getImageUrl(images);

        expect(result).toBe('http://example.com/image.jpg');
    });

    test("should return default image when URL is not available", () => {
        const images = {};

        const result = ArtworkDetailsService.getImageUrl(images);

        expect(result).toBe(DefaultImg);
    });
});