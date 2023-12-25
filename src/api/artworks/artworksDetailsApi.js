import ArtworkDetailsApi from './ArtworkDetailsApi';

describe('ArtworkDetailsApi', () => {
  const mockJson = jest.fn();
  global.fetch = jest.fn(() => Promise.resolve({ ok: true, json: mockJson }));

  beforeEach(() => {
    fetch.mockClear();
    mockJson.mockClear();
  });

  describe('getArtworkDetails', () => {
    const artworkId = '12345';

    test('should fetch artwork details successfully', async () => {
      const mockArtworkDetails = { data: { id: artworkId, title: 'Artwork Title' } };
      mockJson.mockResolvedValue(mockArtworkDetails);

      const data = await ArtworkDetailsApi.getArtworkDetails(artworkId);
      expect(fetch).toHaveBeenCalledWith(`https://openaccess-api.clevelandart.org/api/artworks/${artworkId}`);
      expect(data).toEqual(mockArtworkDetails.data);
    });

    test('should handle API fetch errors', async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({ ok: false, status: 404, json: mockJson })
      );
      mockJson.mockResolvedValue({});

      await expect(ArtworkDetailsApi.getArtworkDetails(artworkId)).rejects.toThrow('API fetch error: 404');
    });

    test('should handle network errors', async () => {
      global.fetch = jest.fn(() => Promise.reject(new Error('Network error')));

      await expect(ArtworkDetailsApi.getArtworkDetails(artworkId)).rejects.toThrow('Network error');
    });
  });
});