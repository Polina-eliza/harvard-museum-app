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