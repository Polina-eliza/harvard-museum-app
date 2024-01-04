import store from './store';

const localStorageMock = (function() {
  let store = {};
  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

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
      expect(store.state.likedArtworks).toContainEqual(artwork);
    });

    test('removeLikedArtwork', () => {
      const artwork = { id: 1, title: 'Artwork 1' };
      store.commit('addLikedArtwork', artwork);
      store.commit('removeLikedArtwork', artwork.id);
      expect(store.state.likedArtworks).not.toContainEqual(artwork);
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
      expect(store.getters.likedArtworks).toContainEqual(artwork);
    });

    test('isArtworkLiked', () => {
      const artwork = { id: 1, title: 'Artwork 1' };
      store.commit('addLikedArtwork', artwork);
      expect(store.getters.isArtworkLiked(artwork.id)).toBe(true);
      expect(store.getters.isArtworkLiked(1111)).toBe(false); 
    });
  });

});