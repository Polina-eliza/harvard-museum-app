import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export function handleUserRegistration(email, password, toaster, router) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      toaster.success('Successfully registered');
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
