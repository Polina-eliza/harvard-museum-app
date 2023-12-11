export function validateRegistrationForm(username, email) {
    let errors = {
      username: null,
      email: null,
    };

    if (!username) {
      errors.username = "This field must be filled in";
    }
  
    if (!email) {
      errors.email = "This field must be filled in";
    }
  
    return errors;
  }