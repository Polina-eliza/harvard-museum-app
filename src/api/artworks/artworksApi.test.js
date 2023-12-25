import ArtworksApi from './ArtworksApi';

describe('ArtworksApi', () => {
  let api;
  const mockFetchResponse = jest.fn();
  global.fetch = jest.fn(() => Promise.resolve({ json: mockFetchResponse }));

  beforeEach(() => {
    api = new ArtworksApi();
    fetch.mockClear();
    mockFetchResponse.mockClear();
  });

  describe('getArtworks', () => {
    test('should fetch artworks successfully', async () => {
      const mockData = { data: [{ id: '1', title: 'Artwork 1' }] };
      mockFetchResponse.mockResolvedValue(mockData);
      const limit = 10;

      const artworks = await api.getArtworks(limit);
      expect(fetch).toHaveBeenCalledWith('https://openaccess-api.clevelandart.org/api/artworks/?limit=10');
      expect(artworks).toEqual(mockData.data);
    });

    test('should handle fetch errors', async () => {
      const errorMessage = "Network Error";
      global.fetch = jest.fn(() => Promise.reject(new Error(errorMessage)));

      await expect(api.getArtworks(10)).rejects.toThrow("There was a problem with the fetch operation: " + errorMessage);
    });
  });
});