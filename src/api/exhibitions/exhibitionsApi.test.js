import ExhibitionsApi from './ExhibitionsApi';

describe('ExhibitionsApi', () => {
  let api;
  const mockJson = jest.fn();
  global.fetch = jest.fn(() => Promise.resolve({ ok: true, json: mockJson }));

  beforeEach(() => {
    api = new ExhibitionsApi();
    fetch.mockClear();
    mockJson.mockClear();
  });

  describe('fetchExhibitions', () => {
    test('should fetch exhibitions successfully', async () => {
      const mockExhibitionsData = [{ id: '1', title: 'Exhibition 1' }];
      mockJson.mockResolvedValue(mockExhibitionsData);
      const searchParams = 'year=2021';

      const data = await api.fetchExhibitions(searchParams);
      expect(fetch).toHaveBeenCalledWith('https://openaccess-api.clevelandart.org/api/exhibitions/?year=2021&limit=10');
      expect(data).toEqual(mockExhibitionsData);
    });

    test('should handle HTTP errors', async () => {
      global.fetch = jest.fn(() => Promise.resolve({ ok: false, status: 404 }));

      await expect(api.fetchExhibitions('year=2021')).rejects.toThrow('HTTP error! status: 404');
    });
  });
});