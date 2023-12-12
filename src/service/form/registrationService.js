import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export function validateRegistrationForm(email, password, repeatPassword) {
  let errors = {
    email: null,
    password: null,
    repeatPassword: null,
  };

  if (!email) {
    errors.email = "This field must be filled in";
  }

  if (!password) {
    errors.password = "This field must be filled in";
  }

  if (password !== repeatPassword) {
    errors.repeatPassword = "Passwords do not match";
  }

  return errors;
}

export function registerUser(email, password) {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
}
