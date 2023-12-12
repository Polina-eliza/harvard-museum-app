import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export function validateLoginForm(email, password) {
  let errors = {
    email: null,
    password: null,
  };

  if (!email) {
    errors.email = "This field must be filled in";
  }

  if (!password) {
    errors.password = "This field must be filled in";
  }

  return errors;
}

export function loginUserWithEmailAndPassword(email, password) {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
}
