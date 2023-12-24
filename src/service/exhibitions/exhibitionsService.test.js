import ExhibitionsService from './ExhibitionsService';
import ExhibitionsApi from '../../api/exhibitions/exhibitionsApi';
import DefaultImg from '../../assets/17816812.jpeg';
import * as indexedDbService from '../../indexedDbService';

jest.mock('../../api/exhibitions/exhibitionsApi');
jest.mock('../../indexedDbService');

describe('ExhibitionsService', () => {
  let service;
  const mockExhibitions = [
    { id: '1', artworks: [{ images: { web: { url: 'https://example.com/image1.jpg' } } }] },
    { id: '2', artworks: [] },
  ];
  const mockApiResponse = { data: mockExhibitions };

  beforeEach(() => {
    service = new ExhibitionsService();
    ExhibitionsApi.mockClear();
    indexedDbService.mockClear();
    ExhibitionsApi.mockImplementation(() => {
      return { fetchExhibitions: jest.fn().mockResolvedValue(mockApiResponse) };
    });
    indexedDbService.getImage.mockResolvedValue('https://example.com/default.jpg');
    indexedDbService.addImage.mockResolvedValue(true);
  });

  describe('getExhibitions', () => {
    test('should fetch exhibitions and return them with image URLs', async () => {
      const exhibitions = await service.getExhibitions();
      expect(ExhibitionsApi.mock.instances[0].fetchExhibitions).toHaveBeenCalled();
      expect(exhibitions[0].imageURL).toBe('https://example.com/image1.jpg');
      expect(exhibitions[1].imageURL).toBe('https://example.com/default.jpg');
    });

    test('should handle error when fetching exhibitions', async () => {
      ExhibitionsApi.mockImplementation(() => {
        return { fetchExhibitions: jest.fn().mockRejectedValue(new Error('Network error')) };
      });

      await expect(service.getExhibitions()).rejects.toThrow('Network error');
    });
  });

  describe('addImagesToStorage', () => {
    test('should call addImage for each exhibition', async () => {
      await service.addImagesToStorage(mockExhibitions);
      expect(indexedDbService.addImage).toHaveBeenCalledTimes(mockExhibitions.length);
      expect(indexedDbService.addImage).toHaveBeenCalledWith('1', 'https://example.com/image1.jpg');
      expect(indexedDbService.addImage).toHaveBeenCalledWith('2', 'https://example.com/default.jpg');
    });
  });

  describe('getImageURL', () => {
    test('should return the image URL if available', async () => {
      const url = await service.getImageURL(mockExhibitions[0]);
      expect(url).toBe('https://example.com/image1.jpg');
    });

    test('should return default image URL if no image is available', async () => {
      const url = await service.getImageURL(mockExhibitions[1]);
      expect(url).toBe('https://example.com/default.jpg');
    });
  });

  describe('getLocalImageForExhibition', () => {
    test('should return the local image URL if available', () => {
      service.exhibitionImagesStorage = [{ id: '1', imageURL: 'https://example.com/local-image.jpg' }];
      const url = service.getLocalImageForExhibition('1');
      expect(url).toBe('https://example.com/local-image.jpg');
    });

    test('should return null if no local image is available', () => {
      service.exhibitionImagesStorage = [{ id: '1', imageURL: 'https://example.com/local-image.jpg' }];
      const url = service.getLocalImageForExhibition('2');
      expect(url).toBeNull();
    });
  });
});