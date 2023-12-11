export function validateLoginForm(username, password) {
    let errors = {
      username: null,
      password: null,
    };

    if (!username) {
      errors.username = "This field must be filled in";
    }
  
    if (!password) {
      errors.password = "This field must be filled in";
    }
  
    return errors;
  }