import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { validateRegistrationForm } from "./authValidation";

export function handleUserRegistration(email, password, repeatPassword, toaster, router) {
  const validationErrors = validateRegistrationForm(email, password, repeatPassword);

  if (Object.values(validationErrors).some(error => error !== null)) {
    return;
  }

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