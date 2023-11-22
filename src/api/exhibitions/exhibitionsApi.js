class ExhibitionsApi {
  static #apiBaseUrl = 'https://openaccess-api.clevelandart.org/api/exhibitions/';

  static async fetchExhibitions(searchParams) {
    const response = await fetch(`${this.#apiBaseUrl}?${searchParams}&limit=10`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }
}
export default ExhibitionsApi;