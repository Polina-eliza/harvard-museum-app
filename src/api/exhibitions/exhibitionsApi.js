class ExhibitionsApi {
  static #apiBaseUrl = 'https://openaccess-api.clevelandart.org/api/exhibitions/';

  static async fetchExhibitions(searchParams) {
    const params = new URLSearchParams(searchParams).toString();
    const response = await fetch(`${this.#apiBaseUrl}?${params}&limit=10`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }
}
export default ExhibitionsApi;