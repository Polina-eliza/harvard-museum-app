export function validateRegistrationForm(username, email, password, repeatPassword) {
    let errors = {
      username: null,
      email: null,
      password: null,
      repeatPassword: null
    };
  
    if (!username) {
      errors.username = "This field must be filled in";
    }
  
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