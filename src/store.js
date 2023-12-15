import { createStore } from 'vuex';

export default createStore({
  state: {
    isLoggedIn: false
  },
  mutations: {
    setLoginStatus(state, status) {
      state.isLoggedIn = status;
    }
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn
  }
})