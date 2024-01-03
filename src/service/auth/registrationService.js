import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import store from "../../store"

export function handleUserRegistration(email, password, toaster, router) {
  const authInstance = getAuth();
  return createUserWithEmailAndPassword(authInstance, email, password)
    .then(() => {
      toaster.success('Successfully registered');
      store.commit('setLoginStatus', true);
      router.push('/collections');
    })
    .catch(error => {
      toaster.error(`Registration failed: ${error.message}`);
    });
}

export function registerUser(email, password) {
const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
}