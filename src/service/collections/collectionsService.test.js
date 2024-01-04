import ArtworkService from './ArtworkService';
import ArtworkApi from '../../api/collections/collectionsApi';
import DefaultImg from '../../assets/17816812.jpeg';
import store from '../../store';

jest.mock('../../api/collections/collectionsApi');
jest.mock('../../store');

describe('ArtworkService', () => {
  let service;
  const mockArtworks = [
    { id: '1', images: { web: { url: 'https://example.com/artwork1.jpg' } } },
    { id: '2' }, 
  ];

  beforeEach(() => {
    service = new ArtworkService();
    ArtworkApi.getArtworksByPage.mockClear();
    ArtworkApi.searchArtworksByQuery.mockClear();
    store.state.likedArtworks = [];
  });

  describe('getArtworksForCollections', () => {
    test('should fetch and filter artworks', async () => {
      ArtworkApi.getArtworksByPage.mockResolvedValue({ data: mockArtworks });

      const artworks = await service.getArtworksForCollections(10, 1);
      expect(ArtworkApi.getArtworksByPage).toHaveBeenCalledWith(10, 1);
      expect(artworks).toEqual([mockArtworks[0]]);
    });
  });

  describe('searchArtworks', () => {
    test('should search and filter artworks', async () => {
      ArtworkApi.searchArtworksByQuery.mockResolvedValue({ data: mockArtworks });

      const artworks = await service.searchArtworks('query', 10, 1);
      expect(ArtworkApi.searchArtworksByQuery).toHaveBeenCalledWith('query', 10, 1);
      expect(artworks).toEqual([mockArtworks[0]]);
    });
  });

  describe('getImageUrl', () => {
    test('should return the image URL if available', () => {
      const url = service.getImageUrl(mockArtworks[0].images);
      expect(url).toBe('https://example.com/artwork1.jpg');
    });

    test('should return default image URL if no image is available', () => {
      const url = service.getImageUrl(mockArtworks[1].images);
      expect(url).toBe(DefaultImg);
    });
  });

  describe('toggleLike', () => {
    test('should add an artwork to liked artworks if not already liked', () => {
      store.state.likedArtworks = [];
      store.commit = jest.fn();

      service.toggleLike('1', mockArtworks);
      expect(store.commit).toHaveBeenCalledWith('addLikedArtwork', mockArtworks[0]);
    });

    test('should remove an artwork from liked artworks if already liked', () => {
      store.state.likedArtworks = [mockArtworks[0]];
      store.commit = jest.fn();

      service.toggleLike('1', mockArtworks);
      expect(store.commit).toHaveBeenCalledWith('removeLikedArtwork', '1');
    });
  });
});