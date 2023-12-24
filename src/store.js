import { createStore } from 'vuex';

export default createStore({
  state: {
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
    likedArtworks: []
  },
  mutations: {
    setLoginStatus(state, status) {
      state.isLoggedIn = status;
    },
    addLikedArtwork(state, artwork) {
      if (!state.likedArtworks.find(a => a.id === artwork.id)) {
        state.likedArtworks.push(artwork);
      }
    },
    removeLikedArtwork(state, artworkId) {
      state.likedArtworks = state.likedArtworks.filter(artwork => artwork.id !== artworkId);
    },
  
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn,
    likedArtworks: state => state.likedArtworks,
    isArtworkLiked: (state) => (artworkId) => { 
      return state.likedArtworks.some(a => a.id === artworkId);
    }
  }
});