import store from './store';

describe('Vuex Store', () => {

  test('initializes the correct state', () => {
    const initialState = store.state;
    expect(initialState.isLoggedIn).toBe(localStorage.getItem('isLoggedIn') === 'true');
    expect(initialState.likedArtworks).toEqual([]);
  });

  describe('mutations', () => {
    test('setLoginStatus', () => {
      store.commit('setLoginStatus', true);
      expect(store.state.isLoggedIn).toBe(true);
    });

    test('addLikedArtwork', () => {
      const artwork = { id: 1, title: 'Artwork 1' };
      store.commit('addLikedArtwork', artwork);
      expect(store.state.likedArtworks).toContain(artwork);
    });

    test('removeLikedArtwork', () => {
      const artwork = { id: 1, title: 'Artwork 1' };
      store.commit('addLikedArtwork', artwork);
      store.commit('removeLikedArtwork', artwork.id);
      expect(store.state.likedArtworks).not.toContain(artwork);
    });
  });

  describe('getters', () => {
    test('isLoggedIn', () => {
      store.commit('setLoginStatus', true);
      expect(store.getters.isLoggedIn).toBe(true);
    });

    test('likedArtworks', () => {
      const artwork = { id: 1, title: 'Artwork 1' };
      store.commit('addLikedArtwork', artwork);
      expect(store.getters.likedArtworks).toContain(artwork);
    });

    test('isArtworkLiked', () => {
      const artwork = { id: 1, title: 'Artwork 1' };
      store.commit('addLikedArtwork', artwork);
      expect(store.getters.isArtworkLiked(artwork.id)).toBe(true);
      expect(store.getters.isArtworkLiked(1111)).toBe(false); 
    });
  });

});