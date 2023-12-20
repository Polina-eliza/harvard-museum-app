import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import store from "../../store"

export function loginUserWithEmailAndPassword(email, password) {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      localStorage.setItem('isLoggedIn', 'true');
      store.commit('setLoginStatus', true);
    });
}

export function validateLoginForm(email, password) {
  let errors = { email: null, password: null };

  if (!email.includes('@')) {
    errors.email = 'Invalid email format';
  }
  if (password.length < 6) {
    errors.password = 'Password should be at least 6 characters';
  }

  return errors;
}