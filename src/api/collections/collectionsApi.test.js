import ArtworksAPI from './ArtworksAPI';

describe('ArtworksAPI', () => {
  const mockJson = jest.fn();
  global.fetch = jest.fn(() => Promise.resolve({ ok: true, json: mockJson }));

  beforeEach(() => {
    fetch.mockClear();
    mockJson.mockClear();
  });

  describe('getArtworksByPage', () => {
    test('should fetch artworks by page successfully', async () => {
      const mockArtworksData = [{ id: '1', title: 'Artwork 1' }];
      mockJson.mockResolvedValue(mockArtworksData);
      const amount = 10;
      const page = 1;

      const data = await ArtworksAPI.getArtworksByPage(amount, page);
      expect(fetch).toHaveBeenCalledWith('https://openaccess-api.clevelandart.org/api/artworks?limit=10&skip=1');
      expect(data).toEqual(mockArtworksData);
    });

    test('should handle network errors in getArtworksByPage', async () => {
      global.fetch = jest.fn(() => Promise.resolve({ ok: false }));

      await expect(ArtworksAPI.getArtworksByPage(10, 1)).rejects.toThrow("Network response was not ok");
    });
  });

  describe('searchArtworksByQuery', () => {
    test('should fetch artworks by search query successfully', async () => {
      const mockArtworksData = [{ id: '2', title: 'Artwork 2' }];
      mockJson.mockResolvedValue(mockArtworksData);
      const query = 'painting';
      const amount = 10;
      const page = 1;

      const data = await ArtworksAPI.searchArtworksByQuery(query, amount, page);
      expect(fetch).toHaveBeenCalledWith('https://openaccess-api.clevelandart.org/api/artworks?search=painting&limit=10&skip=1');
      expect(data).toEqual(mockArtworksData);
    });

    test('should handle network errors in searchArtworksByQuery', async () => {
      global.fetch = jest.fn(() => Promise.resolve({ ok: false }));

      await expect(ArtworksAPI.searchArtworksByQuery('painting', 10, 1)).rejects.toThrow("Network response was not ok");
    });
  });
});